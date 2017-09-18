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
  errorMessage = 'Something went wrong';
  runesObject: IRunePages[];
  runesData: any;
  private subscription: Subscription[] = [];
  constructor(private riotService: RiotService) {
  }

  ngOnInit() {
    this.riotService.runes().then(response => {
      this.runesData = response;
      // console.log('Runes: ', response);
    });

    this.riotService.searchSubscription().subscribe(player => {
      if (!player) {
        return;
      }
      this.getRunesData(player.id);
      console.log(player.id);
    });
  }
    /*
    USING PROMISES
    this.riotService.playerRunes(this.riotService.currentPlayer.id).then(response => {
      this.runePages = response;
      console.log(response);
    });
    */
  ngOnDestroy() {
    this.subscription.forEach(subs => {
      // console.log('Destroyed');
      subs.unsubscribe();
    });
  }

  getRunesData(playerId: number): void {
    this.subscription.push(
      this.riotService.playerRunes(playerId).subscribe(runesData => {
        console.log('Runes Data(Component): ', runesData);
        this.runesObject = this.runesCounter(runesData);
      }, error => this.errorMessage = <string>error)
    );
  }

  runesCounter(runes) {
    return runes.pages.map(page => {
      const container = {};
      let counter = 0;
      if (!page.slots) { // continue; Salta a la siguiente iteración
        return {
          id: page.id,
          name: page.name,
          runes: container,
        };
      }
      for (const slot of page.slots) { // Iterando en los slots
        if (!container[slot.runeId]) {
          counter = 1;
        }
        // tslint:disable-next-line:one-line
        else {
          counter++;
        }
        container[slot.runeId] = counter;
      }
      // console.log(container);
      return {
        id: page.id,
        name: page.name,
        runes: container,
      };
    });
  }
}
