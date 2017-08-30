import { Component, OnInit, OnDestroy } from '@angular/core';
import { RiotService } from '../riot.service';
import { IChampmData, IChampions } from '../types';
import { KeysPipe } from '../object-keys.pipe';
import { ForRangePipe } from '../for-range.pipe';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  champmData: IChampmData[];
  champions: IChampions[];
  errorMessage: string;
  constructor(
    private riotService: RiotService,
  ) { }

  ngOnInit() {
    this.riotService.champions().then(response => {
      this.champions = response;
      console.log('Champ Response', response);
    });

    this.riotService.searchSubscription().subscribe(player => {
      if (!player) {
        return;
      }
      this.getChampmData(player.id);
      console.log('Data', player.id);
    });

    console.log('Current Player: ', this.riotService.currentPlayer);
    if (!this.riotService.currentPlayer) {
      return;
    }
  }

  getChampmData(playerId: number): void {
    this.subscriptions.push(
      this.riotService.champMasterie(playerId).subscribe(champmData => {
        console.log('Champion Masterie Data: ', champmData);
        this.champmData = champmData;
      }, error => this.errorMessage = <any>error)
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      console.log('Destroyed');
      subs.unsubscribe();
    });
  }
}
