import { Component, OnInit, OnDestroy } from '@angular/core';
import { RiotService } from '../riot.service';
import { IMasteries } from '../types';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-masteries',
  templateUrl: './masteries.component.html',
  styleUrls: ['./masteries.component.css']
})
export class MasteriesComponent implements OnInit, OnDestroy {
  errorMessage = 'Something went wrong';
  masteriesData: IMasteries[];
  masteriesProp: any;
  private subscription: Subscription[] = [];
  constructor(
    private riotService: RiotService
  ) { }

  ngOnInit() {
    this.riotService.masteries().then(response => {
      this.masteriesProp = response;
      console.log('Masteries: ', response);
    });
    this.riotService.searchSubscription().subscribe(player => {
      if (!player) {
        return;
      }
      this.getMasteriesData(player.id);
      console.log(player.id);
    });
  }

  getMasteriesData(playerId: number): void {
    this.subscription.push(
      this.riotService.playerMasteries(playerId).subscribe(masteriesData => {
        console.log('Masteries Data: ', masteriesData);
        this.masteriesData = masteriesData;
      }, error => this.errorMessage = <string>error)
    );
  }

  ngOnDestroy() {
    this.subscription.forEach(subs => {
      // console.log('Destroyed');
      subs.unsubscribe();
    });
  }
}
