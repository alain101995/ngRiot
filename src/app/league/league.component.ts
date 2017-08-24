import { Component, OnInit, NgZone } from '@angular/core';
import { RiotService } from '../riot.service';
import { ILeague } from '../types';
@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {
  errorMessage: string;
  // name = 59627;
  leagueData: ILeague[];
  constructor(
    private riotService: RiotService
  ) { }

  ngOnInit() {
    /*this.riotService.playerLeague(this.riotService.currentPlayer.id).then(response => {
      this.leagueData = response;
      console.log(response);
    });
    */
    this.riotService.searchSubscription().subscribe(data => {
      this.getLeagueData(data);
      console.log('Data' , data);
    });

    console.log('qwer', this.riotService.currentPlayer);
    if (!this.riotService.currentPlayer) {
      return;
    }

  }
  getLeagueData(summonerName: string): void {
    this.riotService.playerLeague(summonerName)
      .subscribe(
      leagueData => {
        console.log('qweiru', leagueData);
          this.leagueData = leagueData;
      },
      error => this.errorMessage = <any>error);
  }
}
