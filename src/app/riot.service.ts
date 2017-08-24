import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IPlayer } from './types';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';

@Injectable()
export class RiotService {
  public currentPlayer: IPlayer;

  constructor(private http: Http) { }

  private searchSubject: Subject<string> = new Subject();

  searchSubscription(): Observable<string> {
    return this.searchSubject.asObservable();
  }

  public onSearch(searchString: string) {
    console.log('sarchString', searchString);
    this.searchSubject.next(searchString);
    return;
  }
  /*
 playerId(playerName: string): Observable<any> {
    return this.http
      .get(`http://localhost:3000/api/playerid/${playerName}`)
      .map(response => response.json());
      // .do(data => console.log('All: ' + JSON.stringify(data)))
      // .catch(this.handleError);
    }
    */

  playerId(playerName: any) { // DONE
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
  /* playerLeague(playerId: number) { // DONE
     return this.http
       .get(`http://localhost:3000/api/league/${playerId}`)
       .map(response => response.json())
       .toPromise();
   } */

  /* playerMatches(accountId: number) { // DONE
    return this.http
      .get(`http://localhost:3000/api/matches/${accountId}`)
      .map(response => response.json())
      .toPromise();
  }*/
  champions() {
    return this.http
      .get(`assets/champions.json`)
      .map(response => response.json())
      .toPromise();
  }

  playerLeague(playerId: string): Observable<any> {
    return this.http
      .get(`http://localhost:3000/api/league/${playerId}`)
      .map(response => response.json());
      // .do(data => console.log('All: ' + JSON.stringify(data)))
      // .catch(this.handleError);
    }

    playerMatches(accountId: number): Observable<any> { // DONE
      return this.http
        .get(`http://localhost:3000/api/matches/${accountId}`)
        .map(response => response.json());
    }

    /* private handleError(err: Error) {
      console.log(err.message);
      return Observable.throw(err.message);
    } */
}
