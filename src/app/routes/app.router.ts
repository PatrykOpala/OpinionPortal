import { Routes } from '@angular/router';
import { LoginnedGuard } from '../core/guards/loginned.guard';
import { MainGuard } from '../core/guards/main.guard';
import { OPINION_URL, LOGIN_URL, REGISTER_URL, LOGINNED_URL, ULOGINNED_URL } from '../core/types/constants';
import { BusinessDashboardComponent } from '../pages/business-dashboard/business-dashboard.component';
import { BusinessLoginComponent } from '../pages/business-login/business-login.component';
import { BusinessRegisterComponent } from '../pages/business-register/business-register.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { CompanyComponent } from '../pages/loginned/company/company.component';
import { PersonalBrandComponent } from '../pages/loginned/personal-brand/personal-brand.component';
import { AccountCompanyComponent } from '../pages/rejestracja/view_child/account-company/account-company.component';
import { AccountPersonalBrandComponent } from '../pages/rejestracja/view_child/account-personal-brand/account-personal-brand.component';
import { DefaultAccountComponent } from '../pages/rejestracja/view_child/default-account/default-account.component';
import { SettingsAccountComponent } from '../pages/settings-account/settings-account.component';
import { UloginnedComponent } from '../pages/uloginned/uloginned.component';

export const AppRoutes: Routes = [
  {path: '', canActivate: [MainGuard], component: DashboardComponent, pathMatch: 'full'},
  {path: OPINION_URL, loadComponent: () => import('../pages/opinie/opinie.component').then(m => m.OpinieComponent)},
  {path: LOGIN_URL, loadComponent: () => import('../pages/logowanie/logowanie.component').then(m => m.LogowanieComponent)},

  {path: 'business', children:[{path: '', redirectTo: 'login', pathMatch: 'full'}, {path: 'login', component: BusinessLoginComponent},
  {path: 'register', component: BusinessRegisterComponent}, {path: 'dashboard', component: BusinessDashboardComponent}]},

  {path: REGISTER_URL, loadComponent: () => import('../pages/rejestracja/rejestracja.component').then(m => m.RejestracjaComponent), children: [
    {path: 'default-account', component: DefaultAccountComponent}, {path: 'account-personal-brand', component: AccountPersonalBrandComponent},
    {path: 'account-company', component: AccountCompanyComponent}
  ]},

  {path: LOGINNED_URL, canActivate: [LoginnedGuard] , loadComponent: () => import('../pages/loginned/loginned.component').then(m => m.LoginnedComponent), children:[
    {path: 'settings-account', component: SettingsAccountComponent}, {path: 'personal-brand', component: PersonalBrandComponent}, {path: 'company', component: CompanyComponent}
  ]},
  {path: ULOGINNED_URL, component: UloginnedComponent}
];