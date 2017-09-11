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
  champions: any;
  leagueData: ILeague[];
  masteriesThree = [];
  dummyLeague = [];
  errorMessage = 'Something went wrong';
  playerData = this.riotService.currentPlayer;
  constructor(
    private riotService: RiotService,
  ) { }

  ngOnInit() {
    this.riotService.championsData().then(response => {
      this.champions = response;
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
        this.champmData = champmData;

        this.masteriesThree.push( // Pusheo los primeros tres datos de champmData que corresponden a los 3 champions con mas mastery points.
          this.champmData[0],
          this.champmData[1],
          this.champmData[2]
        );
        const test = new KeysPipe().transform(this.champions.data);
        console.log(test[0].key); // <------ This
        for (const championsObj of test) {
          if (this.masteriesThree[0] === test.key) {
            console.log('ChampionsObj: ', test.key);
          }
          // console.log('This', championsObj.data);
        }


        console.log('Masteries Three: ', this.masteriesThree);
      }, error => this.errorMessage = <string>error)
    );
  }

  getLeagueData(playerId: number): void {
    this.subscriptions.push(
      this.riotService.playerLeague(playerId).subscribe(leagueData => {
        // console.log('League Data: ', leagueData);
        this.leagueData = leagueData;
        this.dummyLeague = leagueData;
        do {
          if (this.dummyLeague.length < 3) {
            this.dummyLeague.push([]);
          }
        } while (this.dummyLeague.length < 3);
        console.log('Dummy league', this.dummyLeague);
        // console.log('Subscriptions', this.subscriptions);
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
