import { Component } from '@angular/core';
import { RiotService } from '../../riot.service';
import { ILeague } from '../../types';
@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent {
  name = 59627;
  leagueData: ILeague[];
  constructor(private riotService: RiotService) {
    this.riotService.playerLeague(this.name).then(response => {
      this.leagueData = response;
      console.log(response);
    });
  }

}
