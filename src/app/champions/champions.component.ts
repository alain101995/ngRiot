import { Component, OnInit } from '@angular/core';
import { RiotService } from '../riot.service';
import { KeysPipe } from '../mypipes.pipe';
import { IChampions } from '../types';
@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})

export class ChampionsComponent implements OnInit {
  champions: IChampions[];
  public arrayOfKeys;
  constructor(
    private riotService: RiotService,
  ) { }

  ngOnInit() {
    this.riotService.champions().then(response => {

      this.champions = response;
      console.log(response);
    });
  }

}

