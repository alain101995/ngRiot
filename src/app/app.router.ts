import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LeagueComponent } from "./league/league.component";
import { RunesComponent } from "./runes/runes.component";

export const router: Routes = [
    { path: 'league', component: LeagueComponent },
    { path: 'runes', component: RunesComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
