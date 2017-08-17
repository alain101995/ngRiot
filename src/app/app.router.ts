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
    { path: 'profile', component: ProfileComponent },
    { path: 'league', component: LeagueComponent }, // DONE
    { path: 'matchhistory', component: MatchhistoryComponent },
    { path: 'champions', component: ChampionsComponent },
    { path: 'runes', component: RunesComponent }, // DONE
    { path: 'masteries', component: MasteriesComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
// What's ModuleWithProviders for?
