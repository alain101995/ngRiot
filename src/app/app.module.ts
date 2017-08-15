import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { RiotService } from './riot.service';
import { LeagueComponent } from './components/league/league.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'league', component: LeagueComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeagueComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule
  ],
  providers: [RiotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
