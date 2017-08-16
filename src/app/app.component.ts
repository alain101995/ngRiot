import { Component } from '@angular/core';
import { RiotService } from './riot.service';
import { IChampmData } from './types';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name =  59627;  // 200038705 accountId 59627 playerId

  champmData: IChampmData[];
  // champmData: IChampmData[];
  constructor(private riotService: RiotService) {
    this.riotService.champmasterie(this.name).then(response => {
      this.champmData = response;
      console.log(response);
    });
  }
  /*swtich(value){
    case(value):
    break
  }*/
}
