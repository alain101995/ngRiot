import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IPlayer } from './types';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class RiotService {
  public currentPlayer: IPlayer;
  constructor(private http: Http) { }

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
  playerMatches(playerId: number) {
    return this.http
    .get(`http://localhost:3000/api/matches/${playerId}`)
    .map(response => response.json())
    .toPromise();
  }
  champions() {
    return this.http
    .get(`http://localhost:3000/api/champions`)
    .map(response => response.json())
    .toPromise();
  }
}
