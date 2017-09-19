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
  public storedChampions: any = {};
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
  private storedPlayerLeague: any = {};
  private storedChampionsData: any = {};
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
    if (!this.storedPlayerRunes[playerId]) {
      this.loadPlayerRunes(playerId);
    }
    return this.storedPlayerRunes[playerId].asObservable();
  }

  private loadPlayerRunes(playerId: number) {
    this.storedPlayerRunes[playerId] = new BehaviorSubject<any>({ pages: [] });
    this.http
      .get(`http://localhost:3000/api/runes/${playerId}`)
      .map(response => response.json())
      .toPromise()
      .then(runes => {
        console.log('STORED PLAYER RUNES', this.storedPlayerRunes[playerId]);
        this.storedPlayerRunes[playerId].next(runes);
      });
  }
  // -----------PLAYER MASTERIES---------
  playerMasteries(playerId: number) {
    if (!this.storedPlayerMasteries[playerId]) {
      this.loadPlayerMasteries(playerId);
    }
    return this.storedPlayerMasteries[playerId].asObservable();
  }
  private loadPlayerMasteries(playerId: number) {
    this.storedPlayerMasteries[playerId] = new BehaviorSubject<any>({ masteries: [] });
    this.http
      .get(`http://localhost:3000/api/masteries/${playerId}`)
      .map(response => response.json())
      .toPromise()
      .then(masteries => {
        this.storedPlayerMasteries[playerId].next(masteries);
      });
  }

  // -----------CHAMP MASTERIES-----------
  champMasterie(playerId: number) {
    if (!this.storedChampm[playerId]) {
      this.loadChampm(playerId);
    }
    return this.storedChampm[playerId].asObservable();
  }
  private loadChampm(playerId) {
    this.storedChampm[playerId] = new BehaviorSubject<any>({ champm: [] });
    this.http
      .get(`http://localhost:3000/api/champm/${playerId}`)
      .map(response => response.json())
      .toPromise()
      .then(champm => {
        this.storedChampm[playerId].next(champm);
        console.log('CHampm (Serivce)', champm, 'playerId', playerId);

      })
  }

  // -----------PLAYER LEAGUE---------
  playerLeague(playerId: number) {
    if (!this.storedPlayerLeague[playerId]) {
      this.loadPlayerLeague(playerId);
    }
    return this.storedPlayerLeague[playerId].asObservable();
  }

  private loadPlayerLeague(playerId: number) {
    this.storedPlayerLeague[playerId] = new BehaviorSubject<any>({ league: [] });
    this.http
      .get(`http://localhost:3000/api/league/${playerId}`)
      .map(response => response.json())
      .toPromise()
      .then(league => {
        console.log('STORED PLAYER LEAGUE', this.storedPlayerLeague[playerId]);
        this.storedPlayerLeague[playerId].next(league);
      });
  }
  // -----------PLAYER MATCHES---------
  playerMatches(accountId: number) {
    if (!this.storedPlayerMatches[accountId]) {
      this.loadPlayerMatches(accountId);
    }
    return this.storedPlayerMatches[accountId].asObservable();
  }

  private loadPlayerMatches(accountId: number) {
    this.storedPlayerMatches[accountId] = new BehaviorSubject<any>({ matches: [] });
    this.http
      .get(`http://localhost:3000/api/matches/${accountId}`)
      .map(response => response.json())
      .toPromise()
      .then(matches => {
        console.log('STORED PLAYER MATCHES', this.storedPlayerMatches[accountId]);
        this.storedPlayerMatches[accountId].next(matches);
      });
  }
  /* return this.http
  .get(`http://localhost:3000/api/matches/${accountId}`)
  .map(response => response.json());
  */

  champions(): Promise<any> {
    return this.http
    .get(`assets/champions.json`)
    .map(response => response.json())
    .toPromise()
    .then((c: any) => {
      Object.keys(c.data).forEach(key => {
        this.championsMap[c.data[key].id] = key;
      });
      console.log('Champion List: ', this.championsMap);
      return this.championsMap;
    });
  }
  /*  
  this.storedChampions = this.http
      .get(`assets/champions.json`)
      .map(response => response.json())
      .toPromise()
    return this.storedChampions;
*/
  /*
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
    */
  // -----------RUNES-----------
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
  // -----------MASTERIES -----------
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
  // -----------CHAMPIONS DATA -----------
  championsData(): Promise<any> {

    return this.http
      .get(`assets/championsData.json`)
      .map(response => response.json())
      .toPromise();
    /*
      if (this.storedChampionsData) {
    console.log('There are championsData ', this.storedChampionsData);
    return this.storedChampionsData;
  }
  console.log('There are no championsData ', this.storedChampionsData);
 return this.storedChampionsData = this.http
    .get(`assets/championsData.json`)
    .map(response => response.json())
    .toPromise();
    */
  }
  // -----------CHAMPION INFO -----------
  championInfo(champion: string): Promise<any> {
    console.log(champion);
    if (champion === 'Fiddlesticks') {
      champion = 'FiddleSticks';
    }
    if (this.championInfo[champion]) {
      return this.championInfo[champion];
    }

    this.championInfo[champion] = this.http
      .get(`http://ddragon.leagueoflegends.com/cdn/7.18.1/data/en_US/champion/${champion}.json`)
      .map(response => response.json())
      .toPromise();
    return this.championInfo[champion];
  }
}

