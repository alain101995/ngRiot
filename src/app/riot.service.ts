import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class RiotService {
  constructor(private http: Http) { }
  // runes(id: number, champid: number)
  runes(playerId: number) {
    return this.http
      .get(`http://localhost:3000/api/runes/${playerId}`)
      .map(response => response.json())
      .toPromise();
  }
  masteries(playerId: number) {
    return this.http
    .get(`http://localhost:3000/api/masteries/${playerId}`)
    .map(response => response.json())
    .toPromise();
  }
  champmasterie(playerId: number) {
    return this.http
    .get(`http://localhost:3000/api/champm/${playerId}`)
    .map(response => response.json())
    .toPromise();
  }
  playerLeague(playerId: number) {
    return this.http
    .get(`http://localhost:3000/api/league/${playerId}`)
    .map(response => response.json())
    .toPromise();
  }
}
