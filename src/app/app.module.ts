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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeagueComponent,
    RunesComponent
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
