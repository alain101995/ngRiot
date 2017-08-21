import { Component } from '@angular/core';
import { RiotService } from './riot.service';
import { IChampmData } from './types';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //playerRequest = 'caberalex';
  constructor(private riotService: RiotService)
  { }


  redirect(summonerName: string) {
    this.riotService.playerId(summonerName).then(response => {
      this.riotService.currentPlayer = response;
      console.log(response);
    });
  }
}
