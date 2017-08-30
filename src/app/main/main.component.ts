import { Component, OnInit } from '@angular/core';
import { RiotService } from '../riot.service';
import { IChampmData } from '../types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {
  constructor(private riotService: RiotService) { }

  search(summonerName: string) {
    this.riotService.playerId(summonerName).then(response => {
      this.riotService.onSearch(response);
      console.log(response);
    });
}
}
