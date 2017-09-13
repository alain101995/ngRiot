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
  championData = {};
  championInfo: any;
  championLore: string;
  championSpells = [];
  constructor(
    private riotService: RiotService,
  ) { }

  ngOnInit() {
    this.riotService.championsData().then(response => {
      this.champions = response;
      console.log(response);
    });
  }

  getClickedId(championId: string, championName: string, championTitle: string) {
    this.championData['id'] = championId;
    this.championData['name'] = championName;
    this.championData['title'] = championTitle;
    console.log('Hovered Champion', this.championData);
  }

  getChampInfo(champion: string) {
    this.riotService.championInfo(champion).then(response => {
      // this.championInfo = response;
      this.championSpells = [];
      for (const spells of response.data[champion].spells) {
        this.championSpells.push(
          spells.image.full
        );
      }
      console.log('Champion Spells', this.championSpells);
      // this.championLore = response.data[champion].spells[0].image.full;
      // console.log('Champion Lore', this.championLore);
    });
  }
}
