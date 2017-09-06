import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.router';

import { RiotService } from './riot.service';
import { NavbarService } from './navbar.service';
import { LeagueComponent } from './league/league.component';
import { RunesComponent } from './runes/runes.component';
import { MasteriesComponent } from './masteries/masteries.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { MatchhistoryComponent } from './matchhistory/matchhistory.component';
import { ChampionsComponent } from './champions/champions.component';
import { KeysPipe } from './object-keys.pipe';
import { ForRangePipe } from './for-range.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LeagueComponent,
    RunesComponent,
    MasteriesComponent,
    MainComponent,
    ProfileComponent,
    MatchhistoryComponent,
    ChampionsComponent,
    KeysPipe,
    ForRangePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,
    routes
  ],
  providers: [RiotService, NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
