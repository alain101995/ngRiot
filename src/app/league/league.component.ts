import { Component, OnInit } from '@angular/core';
import { RiotService } from '../riot.service';
import { ILeague } from '../types';
@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {
  name: 943515;
  leagueData: ILeague[];
  constructor(
    private riotService: RiotService,
  ) { }

  ngOnInit() {
    this.riotService.playerLeague(this.name).then(response => {
      this.leagueData = response;
      console.log(response);
    });
  }

}
