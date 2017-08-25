import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IPlayer } from './types';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class RiotService {
  public currentPlayer: IPlayer;

  constructor(private http: Http) { }

  // La diferencia entre Subject y BehaviorSubject es que BehaviorSubject
  // almacena el valor del ultimo ".next(VALOR)" utilizado. Y cuando alguien
  // se subscribe, recibirá el valor almacenado.

  // Por otro lado, Subject solo se encarga de distribuir nuevos eventos,
  // sin almacenar el valor previo y sin actualizar a los componentes recien subscritos
  private searchSubject: BehaviorSubject<IPlayer> = new BehaviorSubject(this.currentPlayer);

  searchSubscription(): Observable<IPlayer> {
    return this.searchSubject.asObservable();
  }

  public onSearch(player: IPlayer) {
    this.currentPlayer = player;
    console.log('Player', player);
    this.searchSubject.next(player); // Aqui distribuye a los subscriptores
  }

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
  playerLeague(playerId: any) { // DONE
    return this.http
      .get(`http://localhost:3000/api/league/${playerId}`)
      .map(response => response.json());
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
  /*
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
 */
  /* private handleError(err: Error) {
    console.log(err.message);
    return Observable.throw(err.message);
  } */
}
