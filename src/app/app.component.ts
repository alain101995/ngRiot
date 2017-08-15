import { Component } from '@angular/core';
import { RiotService } from './riot.service';
import { IRunePages, ISlot, ILeague, IChampmData } from './types';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name =  59627;  // 200038705 accountId 59627 playerId
  runePages: IRunePages[];
  leagueData: ILeague[];
  champmData: IChampmData[];
  // champmData: IChampmData[];
  constructor(private riotService: RiotService) {
    this.riotService.playerLeague(this.name).then(response => {
      // (59627, 42)
      this.leagueData = response;
      console.log(response);
    });
  }
  /*swtich(value){
    case(value):
    break
  }*/
}
