import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LeagueComponent } from './league/league.component';
import { RunesComponent } from './runes/runes.component';
import { MasteriesComponent } from './masteries/masteries.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { MatchhistoryComponent } from './matchhistory/matchhistory.component';
import { ChampionsComponent } from './champions/champions.component';

export const router: Routes = [
    { path: '', component: MainComponent },
    { path: 'profile', component: ProfileComponent }, // DONE
    { path: 'league', component: LeagueComponent }, // DONE
    { path: 'matchhistory', component: MatchhistoryComponent }, // DONE
    { path: 'champions', component: ChampionsComponent }, // DONE
    { path: 'runes', component: RunesComponent }, // DONE
    { path: 'masteries', component: MasteriesComponent } // DONE
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

