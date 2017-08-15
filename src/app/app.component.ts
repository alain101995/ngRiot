import { Component } from '@angular/core';
import { RiotService } from './riot.service';
import { IRunePages, ISlot, ILeague } from './types';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: number = 59627;
  runePages: IRunePages[];
  leagueData: ILeague[];
  //champmData: IChampmData[];
  constructor(private riotService: RiotService) {
    this.riotService.playerLeague(this.name).then(response => {
      // (59627, 42)
      this.leagueData = response;
      console.log(response);
    });
  }

}
