import { Component } from '@angular/core';
import { RiotService } from './riot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sid: number;
  constructor(private riotService: RiotService) {
    this.sid = 59627;
    this.riotService.runes(this.sid).then(response => {
      // (59627, 42)
      // Hacer algo con la respuesta
      console.log(response);
    });

  }


}
