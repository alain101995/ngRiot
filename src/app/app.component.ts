import { Component } from '@angular/core';
import { RiotService } from './riot.service';
import { IChampmData } from './types';
import { NavbarService } from './navbar.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  errorMessage: string;
  constructor(private riotService: RiotService, public nav: NavbarService) { }

  search(summonerName: string) {
    this.riotService.playerId(summonerName).subscribe(response => {
      this.riotService.onSearch(response);
      // console.log(response);
    });
  }
}
