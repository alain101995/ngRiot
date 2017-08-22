import { Component, OnInit } from '@angular/core';

import { RiotService } from '../riot.service';
import { IMatches, IChampions } from '../types';

@Component({
  selector: 'app-matchhistory',
  templateUrl: './matchhistory.component.html',
  styleUrls: ['./matchhistory.component.css']
})
export class MatchhistoryComponent implements OnInit {
  name = 200211530; // 201033295 Kairozs 200038705 Alainlegend
  matchesData: IMatches[];
  champions: IChampions[];
  constructor(
    private riotService: RiotService
  ) { }
  ngOnInit() {
    // this.riotService.currentPlayer.accountId
    this.riotService.playerMatches(200038705).then(response => {
      this.matchesData = response;
      console.log(response);
    });
    this.riotService.champions().then(response => {
      this.champions = response;
      console.log(response);
    });
  }

}
