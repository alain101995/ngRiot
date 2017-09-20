import { Component, OnInit, OnDestroy } from '@angular/core';
import { RiotService } from '../riot.service';
import { IChampmData } from '../types';
import { NavbarService } from '../navbar.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  constructor(private riotService: RiotService, public nav: NavbarService) { }

  ngOnInit() {
    setTimeout(() => {
      // Timeout fixes the Error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked.
      // Previous value: 'false'. Current value: 'true'.
      this.nav.hide();
    }, 1);
  }
  ngOnDestroy() {
    this.nav.show();
  }

  search(summonerName: string) {
    this.riotService.playerId(summonerName).subscribe(response => {
      this.riotService.onSearch(response);
      console.log(response);
    });
  }
}
