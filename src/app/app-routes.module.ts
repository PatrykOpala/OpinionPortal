import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginnedGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainGuard } from './main.guard';

export const AppRoutes: Routes = [
  {path: '', canActivate: [MainGuard] ,component: DashboardComponent},
  {path: 'opinie', loadChildren: () => import('./opinie/opinie.module').then(m => m.OpinieModule)},
  {path: 'logowanie', loadChildren: () => import('./logowanie/logowanie.module').then(m => m.LogowanieModule)},
  {path: 'register', loadChildren: () => import('./rejestracja/rejestracja.module').then(m => m.RejestracjaModule)},
  {path: 'zalogowano', canActivate: [LoginnedGuard] , loadChildren: () => import('./loginned/loginned.module').then(m => m.LoginnedModule)},
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
