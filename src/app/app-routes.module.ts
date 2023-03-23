import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginnedGuard } from './loginned.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainGuard } from './main.guard';
import { LOGINNED_URL, LOGIN_URL, OPINION_URL, REGISTER_URL } from './core/types/constants';

export const AppRoutes: Routes = [
  {path: '', canActivate: [MainGuard] ,component: DashboardComponent},
  {path: OPINION_URL, loadChildren: () => import('./opinie/opinie.module').then(m => m.OpinieModule)},
  {path: LOGIN_URL, loadChildren: () => import('./logowanie/logowanie.module').then(m => m.LogowanieModule)},
  {path: REGISTER_URL, loadChildren: () => import('./rejestracja/rejestracja.module').then(m => m.RejestracjaModule)},
  {path: LOGINNED_URL, canActivate: [LoginnedGuard] , loadChildren: () => import('./loginned/loginned.module').then(m => m.LoginnedModule)},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(AppRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutesModule { }
