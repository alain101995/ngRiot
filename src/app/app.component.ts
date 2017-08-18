import { Component } from '@angular/core';
import { RiotService } from './riot.service';
import { IChampmData } from './types';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  playerRequest: 'alainlegend';
  constructor(private riotService: RiotService) {
    this.riotService.playerId(this.playerRequest).then(response => {
      this.riotService.currentPlayer = response;
      console.log(response);
    });
  }

  redirect(summonerName: string) {
    // this.playerRequest = summonerName;
    console.log('Greetings ' + summonerName);
  }

}
