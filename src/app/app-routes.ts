import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginnedComponent } from './loginned/loginned.component';
import { UserAccountComponent } from './user-account/user-account.component';

export const AppRoutes: Routes = [
    {path: '', pathMatch: 'full', component: DashboardComponent},
    {path: 'opinie', loadComponent: () => import('./opinie/opinie.component').then(m => m.OpinieComponent)},
    {path: 'logowanie', loadComponent: () => import('./logowanie/logowanie.component').then(m => m.LogowanieComponent)},
    {path: 'rejestracja', loadComponent: () => import('./rejestracja/rejestracja.component').then(m => m.RejestracjaComponent)},
    {path: 'zalogowano', children: [{path: '', component: LoginnedComponent}, {path: 'user-account', pathMatch: 'prefix', component: UserAccountComponent}]},
];