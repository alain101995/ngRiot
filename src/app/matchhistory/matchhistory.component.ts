import { Component, OnInit } from '@angular/core';

import { RiotService } from '../riot.service';
import { IMatches, IPlayerMatches } from '../types';

@Component({
  selector: 'app-matchhistory',
  templateUrl: './matchhistory.component.html',
  styleUrls: ['./matchhistory.component.css']
})
export class MatchhistoryComponent implements OnInit {
  name = 200038705; // 201033295 Kairozs 200038705 Alainlegend
  matchesData: any;
  constructor(
    private riotService: RiotService
  ) { }
  ngOnInit() {
    this.riotService.playerMatches(this.name).then(response => {
      this.matchesData = response;
      console.log(response);
    });
  }
}
