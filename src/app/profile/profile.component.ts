import { Component, OnInit } from '@angular/core';
import { RiotService } from '../riot.service';
import { IChampmData, IChampions } from '../types';
import { KeysPipe } from '../object-keys.pipe';
import { ForRangePipe } from '../for-range.pipe';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name = 59627;  // 200038705 accountId 59627 playerId
  champmData: IChampmData[];
  champions: IChampions[];
  constructor(
    private riotService: RiotService,
  ) { }
// this.riotService.currentPlayer.id
  ngOnInit() {
    this.riotService.champmasterie(59627).then(response => {
      this.champmData = response;
      console.log(response);
    });

    this.riotService.champions().then(response => {
      this.champions = response;
      console.log(response);
    });
  }
  }
