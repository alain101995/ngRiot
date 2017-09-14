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

  setChampionImage(championId: string, championName: string, championTitle: string) {

    this.championData['id'] = championId;
    this.championData['name'] = championName;
    this.championData['title'] = championTitle;
    this.setChampionSkills(championId);
    console.log('championData', this.championData);

  }

  setChampionSkills(champion: string) {
    this.riotService.championInfo(champion).then(response => {
      this.championSpells = [];

      for (const spells of response.data[champion].spells) {
        this.championSpells.push(
          {
            image: spells.image.full,
            name: spells.name
          }
        );
      }

    });
  }

}
