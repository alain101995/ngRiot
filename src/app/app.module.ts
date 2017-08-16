import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.router';

import { HeaderComponent } from './header/header.component';
import { RiotService } from './riot.service';
import { LeagueComponent } from './league/league.component';
import { RunesComponent } from './runes/runes.component';
import { ChampmComponent } from './champm/champm.component';
import { MasteriesComponent } from './masteries/masteries.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { MatchhistoryComponent } from './matchhistory/matchhistory.component';
import { SpellsComponent } from './spells/spells.component';
import { ChampionsComponent } from './champions/champions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeagueComponent,
    RunesComponent,
    ChampmComponent,
    MasteriesComponent,
    MainComponent,
    ProfileComponent,
    MatchhistoryComponent,
    SpellsComponent,
    ChampionsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,
    routes
  ],
  providers: [RiotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
