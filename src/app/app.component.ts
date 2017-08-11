import { Component } from '@angular/core';
import { RiotService } from './riot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: any = "59627";
  response:any;
  constructor(private riotService: RiotService) {
    this.riotService.runes(this.name).then(response => {
      // (59627, 42)
      // Hacer algo con la respuesta
      JSON.stringify(response)
      this.response = response;
      console.log(response);
    });
  }
}
