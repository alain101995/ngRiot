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
  leagueData: ILeague[];
  dummyLeague = [];
  finalChampm = [];
  champions: any;
  errorMessage = 'Something went wrong';

  constructor(
    private riotService: RiotService,
  ) { }

  ngOnInit() {
    this.riotService.champions().then(response => {
      this.champions = this.riotService.championsMap; //this.riotService.championsMap;
      // console.log('Mapped champions: ', this.champions);
    });

    this.riotService.searchSubscription().subscribe(player => {
      if (!player) {
        return;
      }
      this.getChampMasterie(player.id);
      this.getLeagueData(player.id);
      console.log('Player ID: ', player.id);
    });
    console.log('Current Player: ', this.riotService.currentPlayer);
    if (!this.riotService.currentPlayer) {
      return;
    }
  }

  getChampMasterie(playerId: number): void {
    this.subscriptions.push(
      this.riotService.champMasterie(playerId).subscribe(champmData => {
        this.riotService.champions().then(response => {
          console.log('ChampmData(Component)', champmData);
          this.finalChampm = [];
          this.champmData = champmData;
          for (let n = 0; n < 3 && champmData.length; n++) {
            console.log('final');

            console.log('Champion ID', champmData[n].championId, 'Champions', this.champions);
            this.finalChampm.push(this.champions[champmData[n].championId]);

          }
          console.log('Final Masteries', this.finalChampm);
        });
      }, error => this.errorMessage = <string>error)

    );
  }

  getLeagueData(playerId: number): void {
    this.subscriptions.push(
      this.riotService.playerLeague(playerId).subscribe(leagueData => {
        console.log('League Data: ', leagueData);
        // this.leagueData = leagueData;
        this.dummyLeague = leagueData;
        do {
          if (this.dummyLeague.length < 3) {
            this.dummyLeague.push([]); // <-- CHECK IT
          }
        } while (this.dummyLeague.length < 3);
        console.log('Dummy league', this.dummyLeague);
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
