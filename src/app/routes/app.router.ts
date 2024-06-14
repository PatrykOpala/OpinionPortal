import { Routes } from '@angular/router';
import { MainGuard } from '../guards/main.guard';
import { OPINION_URL, LOGIN_URL, REGISTER_URL, LOGINNED_URL, ULOGINNED_URL } from '../types/constants';
import { BusinessDashboardComponent } from '../pages/business-dashboard/business-dashboard.component';
import { BusinessLoginComponent } from '../pages/business-login/business-login.component';
import { BusinessRegisterComponent } from '../pages/business-register/business-register.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { SettingsAccountComponent } from '../pages/settings-account/settings-account.component';
import { UloginnedComponent } from '../pages/uloginned/uloginned.component';
import { RejestracjaComponent } from '../pages/rejestracja/rejestracja.component';
import { OpinieComponent } from '../pages/opinie/opinie.component';
import { LogowanieComponent } from '../pages/logowanie/logowanie.component';
import { AddOpinionComponent } from '../pages/loginned/add-opinion/add-opinion.component';
import { OpinionsListComponent } from '../pages/loginned/opinions-list/opinions-list.component';

export const AppRoutes: Routes = [
  {path: '', canActivate: [MainGuard], component: DashboardComponent, pathMatch: 'full'},
  {path: OPINION_URL, component: OpinieComponent},
  {path: LOGIN_URL, component: LogowanieComponent},

  {path: 'business', children:[{path: '', redirectTo: 'login', pathMatch: 'full'}, {path: 'login', component: BusinessLoginComponent},
  {path: 'register', component: BusinessRegisterComponent}, {path: 'dashboard', component: BusinessDashboardComponent}]},

  {path: REGISTER_URL, children: [{path: '', component: RejestracjaComponent}, {path: ':register_step', component: RejestracjaComponent}]},

  {path: LOGINNED_URL, loadComponent: () => import('../pages/loginned/loginned.component').then(m => m.LoginnedComponent),
   children:[{path: 'settings-account', component: SettingsAccountComponent}, {path: 'add-opinion', component: AddOpinionComponent},
   {path: 'opinions-list', component: OpinionsListComponent}]},
  {path: ULOGINNED_URL, component: UloginnedComponent}
];

// canActivate: [LoginnedGuard]