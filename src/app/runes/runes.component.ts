import { Component, OnInit } from '@angular/core';
import { RiotService } from '../riot.service';
import { IRunePages, ISlot, IPages } from '../types';

@Component({
  selector: 'app-runes',
  templateUrl: './runes.component.html',
  styleUrls: ['./runes.component.css']
})
export class RunesComponent implements OnInit {
  name =  59627;
  runePages: IRunePages[];
  constructor(private riotService: RiotService) {
    this.riotService.playerRunes(this.name).then(response => {
      this.runePages = response;
      console.log(response);
    });
  }

  ngOnInit() {
  }

}
