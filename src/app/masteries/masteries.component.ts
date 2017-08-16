import { Component, OnInit } from '@angular/core';

import { RiotService } from '../riot.service';
// import { IMasteries } from '../types';

@Component({
  selector: 'app-masteries',
  templateUrl: './masteries.component.html',
  styleUrls: ['./masteries.component.css']
})
export class MasteriesComponent implements OnInit {
  name =  59627;
  // masteriesData: IMasteries[];
  constructor(private riotService: RiotService) {
    this.riotService.playerLeague(this.name).then(response => {
      // this.leagueData = response;
      console.log(response);
    });
  }

  ngOnInit() {
  }

}
