import { Component, OnInit, OnDestroy } from '@angular/core';
import { RiotService } from '../riot.service';
import { IChampmData, IChampions, ILeague } from '../types';
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
  leagueData: ILeague[];
  dummyLeague = [];
  errorMessage = 'Something went wrong';
  playerData = this.riotService.currentPlayer;
  constructor(
    private riotService: RiotService,
  ) { }

  ngOnInit() {
    this.riotService.championsData().then(response => {
      this.champions = response;
      console.log('Champ Response', response);
    });

    this.riotService.searchSubscription().subscribe(player => {
      if (!player) {
        return;
      }
      this.playerData = player;
      console.log('Player ID: ', player.id);
      this.getChampmData(player.id);
      this.getLeagueData(player.id);
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
      }, error => this.errorMessage = <string>error)
    );
  }

  getLeagueData(playerId: number): void {
    this.subscriptions.push(
      this.riotService.playerLeague(playerId).subscribe(leagueData => {
        console.log('League Data: ', leagueData);
        this.leagueData = leagueData;
        this.dummyLeague = leagueData;
        do {
          if (this.dummyLeague.length < 3) {
            this.dummyLeague.push([]);
          }
        } while (this.dummyLeague.length < 3);
        console.log('Dummy league', this.dummyLeague);
        console.log('Subscriptions', this.subscriptions);
      }, error => this.errorMessage = <string>error)
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      console.log('Destroyed');
      subs.unsubscribe();
    });
  }
}
