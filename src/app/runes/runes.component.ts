import { Component, OnInit, OnDestroy } from '@angular/core';
import { RiotService } from '../riot.service';
import { IRunePages, ISlot } from '../types';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-runes',
  templateUrl: './runes.component.html',
  styleUrls: ['./runes.component.css']
})
export class RunesComponent implements OnInit, OnDestroy {
  errorMessage: string;
  runePages: IRunePages[];
  otherRune: IRunePages[];
  private subscription: Subscription[] = [];
  constructor(private riotService: RiotService) {
  }

  ngOnInit() {
    this.riotService.searchSubscription().subscribe(player => {
      if (!player) {
        return;
      }
      this.getRunesData(player.id);
      console.log(player.id);
    });
    /*
    this.riotService.playerRunes(this.riotService.currentPlayer.id).then(response => {
      this.runePages = response;
      console.log(response);
    });
    */
  }
  getRunesData(playerId: number): void {
    this.subscription.push(
      this.riotService.playerRunes(playerId).subscribe(runesData => {
        console.log('Runes Data: ', runesData);
        this.runePages = runesData;
        this.otherRune = runesData;
      }, error => this.errorMessage = <string>error)
    );
  }

  ngOnDestroy() {
    this.subscription.forEach(subs => {
      console.log('Destroyed');
      subs.unsubscribe();
    });
  }
  runesCounter() {
    let container = {};
    let counter = 0;
    for (let i = 0; i < this.runePages.length; i++) { // Iterando en las páginas
      console.log(this.runePages[i].name)
      for (let n = 0; n < this.runePages[i].slots.length; n++) { // Iterando en los slots
        if (!(this.runePages[i].slots[n].runeId in container)) { 
          // Si el ID de la runa no existe en objecto container, lo agregará y le otorgará el valor actual
          // de la variable counter(1);
          counter = 1;
          container[this.runePages[i].slots[n].runeId] = counter
        }
        else {
          counter++;
          container[this.runePages[i].slots[n].runeId] = counter;
        }
      }
      console.log(container);
      container = {}
    }
    return;
  }
}
