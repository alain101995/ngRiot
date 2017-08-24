import { Component } from '@angular/core';
import { RiotService } from './riot.service';
import { IChampmData } from './types';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  errorMessage: string;
  // playerRequest = 'caberalex';
  constructor(private riotService: RiotService) { }


  redirect(summonerName: string) {
    this.riotService.onSearch(summonerName);
    this.riotService.playerId(summonerName);
    // Hacer llamada a this.riotService.currentPlayer
    /*
    this.riotService.playerId(summonerName).then(response => {
      this.riotService.currentPlayer = response;
      console.log(response);
      // window.location.reload();
    });
    */
  }
  /*
    this.riotService.playerId(summonerName)
      .subscribe(
      currentPlayer => this.riotService.currentPlayer = currentPlayer,
      error => this.errorMessage = <any>error);

  }
  */
}
