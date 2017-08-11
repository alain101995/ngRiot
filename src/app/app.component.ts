import { Component } from '@angular/core';
import { RiotService } from './riot.service';
import { IRunePages, ISlot } from './types';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: number = 59627;
  runePages: IRunePages[];
  constructor(private riotService: RiotService) {
    this.riotService.runes(this.name).then(response => {
      // (59627, 42)
      // Hacer algo con la respuesta
      this.runePages = response;
      console.log(response);
    });
  }

}
