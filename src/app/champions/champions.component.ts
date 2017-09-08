import { Component, OnInit } from '@angular/core';
import { RiotService } from '../riot.service';
import { KeysPipe } from '../object-keys.pipe';
import { IChampions } from '../types';
@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})

export class ChampionsComponent implements OnInit {
  champions: any;
  championId: string;
  constructor(
    private riotService: RiotService,
  ) { }

  ngOnInit() {
    this.riotService.championsData().then(response => {
      this.champions = response;
      console.log(response);
    });
  }

  getClickedId(hoveredChampion: string) {
    console.log('Clicked Champion', hoveredChampion);
    this.championId = hoveredChampion;
  }

}

