import { Component, OnInit } from '@angular/core';
import { RiotService } from '../riot.service';
import { ILeague } from '../types';
@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {
  name = 59627; // 2101444 59627
  leagueData: ILeague[];


  constructor(
    private riotService: RiotService,
  ) { }

  ngOnInit() {
    this.riotService.playerLeague(this.name).then(response => {
      // (59627, 42)
      this.leagueData = response;
      console.log(response);
    });
  }

}
