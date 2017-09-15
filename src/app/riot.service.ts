import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IPlayer } from './types';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class RiotService {
  public currentPlayer: IPlayer;
  public championsMap: any = {};
  public championsInfo: any = {};
  public storedRunes: any = {};
  public storedMasteries: any = {};
  constructor(private http: Http) { }

  // La diferencia entre Subject y BehaviorSubject es que BehaviorSubject
  // almacena el valor del ultimo ".next(VALOR)" utilizado. Y cuando alguien
  // se subscribe, recibirá el valor almacenado.

  // Por otro lado, Subject solo se encarga de distribuir nuevos eventos,
  // sin almacenar el valor previo y sin actualizar a los componentes recien subscritos
  private searchSubject: BehaviorSubject<IPlayer> = new BehaviorSubject(this.currentPlayer);
  private storedPlayerMatches: any = {};
  private storedPlayerId: any = {};
  private storedPlayerMasteries: any = {};
  private storedPlayerRunes: any = {};
  private storedChampm: any = {};

  searchSubscription(): Observable<IPlayer> {
    return this.searchSubject.asObservable();
  }

  public onSearch(player: IPlayer) {
    this.currentPlayer = player;
    console.log('Player', player);
    this.searchSubject.next(player); // Aqui distribuye a los subscriptores
    /*
       return this.http
      .get(`http://localhost:3000/api/playerid/${playerName}`)
      .map(response => response.json())
      .toPromise();
      */
  }
  // -----------PLAYER ID---------
  playerId(playerName: string) {
    return this.http
      .get(`http://localhost:3000/api/playerid/${playerName}`)
      .map(response => response.json())
      .toPromise();
  }
  // -----------PLAYER RUNES---------
  playerRunes(playerId: number) {
    return this.http
      .get(`http://localhost:3000/api/runes/${playerId}`)
      .map(response => response.json());
  }

  // -----------PLAYER MASTERIES---------
  playerMasteries(playerId: number) {

    if (!this.storedPlayerMasteries[playerId]) {
      this.loadPlayerMasteries(playerId);
    }

    return this.storedPlayerMasteries[playerId].asObservable();
  }

  private loadPlayerMasteries(playerId: number) {

    this.storedPlayerMasteries[playerId] = new BehaviorSubject<IPlayer>(null);

    this.http
      .get(`http://localhost:3000/api/masteries/${playerId}`)
      .map(response => response.json())
      .toPromise()
      .then(masteries => {
        this.storedPlayerMasteries[playerId].next(masteries);
      });
  }
  // -----------CHAMP MASTERIES---------
  champMasterie(playerId: number) {


    if (!this.storedChampm[playerId]) {
      console.log('Hey', this.storedChampm);
      this.loadChampm(playerId);
    }
    console.log('Hey2', this.storedChampm);
    
    return this.storedChampm[playerId].asObservable();
  }

  private loadChampm(playerId: number) {

    this.storedChampm[playerId] = new BehaviorSubject<IPlayer>(null);

    this.http
      .get(`http://localhost:3000/api/champm/${playerId}`)
      .map(response => response.json())
      .toPromise()
      .then(champm => {
        console.log('Bye', this.storedChampm);
        this.storedChampm[playerId].next(champm);
      });
  }
    /*
     return this.http
       .get(`http://localhost:3000/api/champm/${playerId}`)
       .map(response => response.json());
     */
  // -----------PLAYER LEAGUE---------
  playerLeague(playerId: any) {
    return this.http
      .get(`http://localhost:3000/api/league/${playerId}`)
      .map(response => response.json());
  }
  // -----------PLAYER MATCHES---------
  playerMatches(accountId: number) {
    if (!this.storedPlayerMatches[accountId]) {
      this.loadPlayerMatches(accountId);
    }
    return this.storedPlayerMatches[accountId].asObservable();
  }

  private loadPlayerMatches(accountId: number) {
    this.storedPlayerMatches[accountId] = new BehaviorSubject<IPlayer>(null);
    this.http
      .get(`http://localhost:3000/api/matches/${accountId}`)
      .map(response => response.json())
      .toPromise()
      .then(matches => {
        console.log('HEY', this.storedPlayerMatches[accountId]);
        this.storedPlayerMatches[accountId].next(matches);
      });
  }
  /* return this.http
  .get(`http://localhost:3000/api/matches/${accountId}`)
  .map(response => response.json());
*/

  champions() {
    return this.http
      .get(`assets/champions.json`)
      .map(response => response.json())
      .toPromise()
      .then((c: any) => {
        Object.keys(c.data).forEach(key => {
          this.championsMap[c.data[key].id] = key;
        });
        console.log('Champion List: ', this.championsMap);
        return c;
      });
  }

  runes(): Promise<any> {

    if (this.storedRunes.runes) {
      console.log('Theres data', this.storedRunes.runes);
      return this.storedRunes.runes;
    }

    console.log('Theres no data', this.storedRunes.runes);
    this.storedRunes.runes = this.http
      .get(`assets/runes.json`)
      .map(response => response.json())
      .toPromise();
    return this.storedRunes.runes;
  }

  masteries(): Promise<any> {

    if (this.storedMasteries.masteries) {
      console.log('There are masteries: ', this.storedMasteries.masteries);
      return this.storedMasteries.masteries;
    }

    console.log('There are no masteries: ', this.storedMasteries.masteries);
    this.storedMasteries.masteries = this.http
      .get(`assets/masteries.json`)
      .map(response => response.json())
      .toPromise();
    return this.storedMasteries.masteries;
  }

  championsData() {
    return this.http
      .get(`assets/championsData.json`)
      .map(response => response.json())
      .toPromise();
  }

  championInfo(champion: string): Promise<any> {
    if (this.championInfo[champion]) {
      return this.championInfo[champion];
    }

    this.championInfo[champion] = this.http
      .get(`http://ddragon.leagueoflegends.com/cdn/7.17.2/data/en_US/champion/${champion}.json`)
      .map(response => response.json())
      .toPromise();
    return this.championInfo[champion];
  }
}

