import { Component, OnInit } from '@angular/core';
import { RiotService } from '../riot.service';
import { IChampmData } from '../types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  { // implements OnInit
  // playerRequest = 'caberalex';
  constructor(private riotService: RiotService) { }

  redirect(summonerName: string) {
    /*
    this.riotService.playerId(summonerName).then(response => {
      this.riotService.currentPlayer = response;
      console.log(response);
      console.log('Greetings ' + response.name);
    });
    */
  }
}
