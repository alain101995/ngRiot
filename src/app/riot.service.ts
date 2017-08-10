import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class RiotService {
  constructor(private http: Http) { }
  // runes(id: number, champid: number)
  runes(playerId: number) {
    return this.http
      .get(`http://localhost:3000/api/runes/${playerId}`)
      .toPromise();
  }
  masteries(playerId: number) {
    return this.http
    .get(`http://localhost:3000/api/masteries/${playerId}`)
    .toPromise();
  }
  champmasterie(playerId: number) {
    return this.http
    .get(`https://localhost:3000/api/masteries/${playerId}`)
    .toPromise();
  }

}
