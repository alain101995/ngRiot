import { Component, OnInit } from '@angular/core';
import { RiotService } from '../riot.service';
import { IMatches, IChampions } from '../types';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-matchhistory',
  templateUrl: './matchhistory.component.html',
  styleUrls: ['./matchhistory.component.css']
})
export class MatchhistoryComponent implements OnInit {
  errorMessage: string;

  matchesData: IMatches[];
  champions: IChampions[];

  private subscriptions: Subscription[] = [];

  constructor(
    private riotService: RiotService
  ) { }
  ngOnInit() {
    // this.riotService.currentPlayer.accountId 200038705
    this.riotService.searchSubscription().subscribe(player => {
      if (!player) {
        return;
      }
      this.getMatchesData(player.accountId);
      console.log('Data', player.accountId);
    });

    console.log('Current Player: ', this.riotService.currentPlayer);
    if (!this.riotService.currentPlayer) {
      return;
    }

  }
  getMatchesData(accountId: number): void {
    this.subscriptions.push(
      this.riotService.playerMatches(accountId).subscribe(matchesData => {
        console.log('League Data: ', matchesData);
        this.matchesData = matchesData;
      }, error => this.errorMessage = <any>error)
    );
  }
}

    /*
        this.riotService.champions().then(response => {
          this.champions = response;
          console.log(response);
        });
        this.riotService.playerMatches(this.riotService.currentPlayer.id)
        .subscribe(
        leagueData => this.matchesData = leagueData,
        error => this.errorMessage = <any>error);
         */

// Utilizar ngOnDestroy para hacer .unbsubscribe de todos los observables utilizados
