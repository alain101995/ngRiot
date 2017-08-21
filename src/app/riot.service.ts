import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IPlayer } from './types';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class RiotService {
  public currentPlayer: IPlayer;

  constructor(private http: Http) { }

  playerId(playerName: string) { // DONE
    return this.http
      .get(`http://localhost:3000/api/playerid/${playerName}`)
      .map(response => response.json())
      .toPromise();
  }
  playerRunes(playerId: number) { // DONE
    return this.http
      .get(`http://localhost:3000/api/runes/${playerId}`)
      .map(response => response.json())
      .toPromise();
  }
  playerMasteries(playerId: number) { // DONE
    return this.http
      .get(`http://localhost:3000/api/masteries/${playerId}`)
      .map(response => response.json())
      .toPromise();
  }
  champmasterie(playerId: number) { // DONE
    return this.http
      .get(`http://localhost:3000/api/champm/${playerId}`)
      .map(response => response.json())
      .toPromise();
  }
  playerLeague(playerId: number) { // DONE
    return this.http
      .get(`http://localhost:3000/api/league/${playerId}`)
      .map(response => response.json())
      .toPromise();
  }
  playerMatches(accountId: number) { // DONE
    return this.http
      .get(`http://localhost:3000/api/matches/${accountId}`)
      .map(response => response.json())
      .toPromise();
  }
  champions() {
    return this.http
      .get(`assets/champions.json`)
      .map(response => response.json())
      .toPromise();
  }

}
