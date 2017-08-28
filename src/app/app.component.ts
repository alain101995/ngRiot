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
  constructor(private riotService: RiotService) { }

  search(summonerName: string) {
    this.riotService.playerId(summonerName).then(response => {
      this.riotService.onSearch(response);
      console.log(response);
    });
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
