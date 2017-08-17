import { Component, OnInit } from '@angular/core';

import { RiotService } from '../riot.service';
import { IMasteries } from '../types';

@Component({
  selector: 'app-masteries',
  templateUrl: './masteries.component.html',
  styleUrls: ['./masteries.component.css']
})
export class MasteriesComponent implements OnInit {
  name =  59627;
  masteriesData: IMasteries[];
  constructor(
    private riotService: RiotService
  ) { }

  ngOnInit() {
    this.riotService.playerMasteries(this.name).then(response => {
      this.masteriesData = response;
      console.log(response);
    });
  }

}
