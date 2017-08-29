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
  champions: IChampions[];
  championId: string;
  constructor(
    private riotService: RiotService,
  ) { }

  ngOnInit() {
    this.riotService.champions().then(response => {
      this.champions = response;
      console.log(response);
    });
  }

  getClickedId(clickedChampion: string) {
    console.log('Clicked Champion', clickedChampion);
    this.championId = clickedChampion;
    console.log('Champion ID', this.championId);
  }

}

