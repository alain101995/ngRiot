import { Component, OnInit } from '@angular/core';
import { RiotService } from '../riot.service';
import { IRunePages, ISlot } from '../types';
@Component({
  selector: 'app-runes',
  templateUrl: './runes.component.html',
  styleUrls: ['./runes.component.css']
})
export class RunesComponent implements OnInit {
  runePages: IRunePages[];
  constructor(private riotService: RiotService) {

  }

  ngOnInit() {
    this.riotService.playerRunes(this.riotService.currentPlayer.id).then(response => {
      this.runePages = response;
      console.log(response);
    });
  }

}
