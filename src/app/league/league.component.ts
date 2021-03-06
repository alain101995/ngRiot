import { Component, OnInit, OnDestroy } from '@angular/core';
import { RiotService } from '../riot.service';
import { ILeague } from '../types';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit, OnDestroy {
  errorMessage: string;
  leagueData: ILeague[];
  dummyLeague = [];
  playerData = this.riotService.currentPlayer;
  private subscriptions: Subscription[] = [];
  constructor(
    private riotService: RiotService
  ) { }

  ngOnInit() {
    this.riotService.searchSubscription().subscribe(player => {
      if (!player) {
        return;
      }

      // this.playerData = player;
      // console.log('Player Data', this.playerData);

      this.getLeagueData(player.id);
      console.log('Data', player.id);
    });

    console.log('Current Player: ', this.riotService.currentPlayer);
    if (!this.riotService.currentPlayer) {
      return;
    }
  }
  /* USING PROMISES
this.riotService.playerLeague(this.riotService.currentPlayer.id).then(response => {
this.leagueData = response;
console.log(response);
});
*/


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
      }, error => this.errorMessage = <any>error)
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      // console.log('Destroyed');
      subs.unsubscribe();
    });
  }

}
