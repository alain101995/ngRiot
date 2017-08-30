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
  public championsMap: any = {};
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

  playerId(playerName: string) {
    return this.http
      .get(`http://localhost:3000/api/playerid/${playerName}`)
      .map(response => response.json())
      .toPromise();
  }

  playerRunes(playerId: number) {
    return this.http
      .get(`http://localhost:3000/api/runes/${playerId}`)
      .map(response => response.json());
  }

  playerMasteries(playerId: number) {
    return this.http
      .get(`http://localhost:3000/api/masteries/${playerId}`)
      .map(response => response.json());
  }

  champMasterie(playerId: number) {
    return this.http
      .get(`http://localhost:3000/api/champm/${playerId}`)
      .map(response => response.json());
  }

  playerLeague(playerId: any) {
    return this.http
      .get(`http://localhost:3000/api/league/${playerId}`)
      .map(response => response.json());
  }

  playerMatches(accountId: number) {
    return this.http
      .get(`http://localhost:3000/api/matches/${accountId}`)
      .map(response => response.json());
  }

  champions() {
    return this.http
      .get(`assets/champions.json`)
      .map(response => response.json())
      .toPromise()
      .then((c: any) => {
        Object.keys(c.data).forEach(key => {
          this.championsMap[c.data[key].id] = key;
        });
        console.log('champs', this.championsMap);
        return c;
      });

  }
}
