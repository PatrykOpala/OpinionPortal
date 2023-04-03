import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginnedGuard } from '../core/guards/loginned.guard';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { MainGuard } from '../core/guards/main.guard';
import { LOGINNED_URL, LOGIN_URL, OPINION_URL, REGISTER_URL } from '../core/types/constants';

export const AppRoutes: Routes = [
  {path: '', canActivate: [MainGuard] ,component: DashboardComponent},
  {path: OPINION_URL, loadChildren: () => import('../pages/opinie/opinie.module').then(m => m.OpinieModule)},
  {path: LOGIN_URL, loadChildren: () => import('../pages/logowanie/logowanie.module').then(m => m.LogowanieModule)},
  {path: REGISTER_URL, loadChildren: () => import('../pages/rejestracja/rejestracja.module').then(m => m.RejestracjaModule)},
  {path: LOGINNED_URL, canActivate: [LoginnedGuard] , loadChildren: () => import('../pages/loginned/loginned.module').then(m => m.LoginnedModule)},
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
