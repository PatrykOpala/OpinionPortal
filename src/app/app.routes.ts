import { Routes } from '@angular/router';
import { AddOpinionComponent } from './components/add-opinion/add-opinion.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginnedComponent } from './views/loginned/loginned.component';

export const AppRoutes: Routes = [
    {path: '', component: DashboardComponent, pathMatch: 'full'},
    {path: 'opinie', loadComponent: () => import('./views/opinie/opinie.component').then(m => m.OpinieComponent)},
    {path: 'logowanie', loadComponent: () => import('./views/logowanie/logowanie.component').then(m => m.LogowanieComponent)},
    {path: 'rejestracja', loadComponent: () => import('./views/rejestracja/rejestracja.component').then(m => m.RejestracjaComponent)},
    {path: 'loginned', component: LoginnedComponent},
    {path: 'add', component: AddOpinionComponent},
];