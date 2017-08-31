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
}
