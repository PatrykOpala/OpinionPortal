import { OpinieComponent } from './views/opinie/opinie.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginnedComponent } from './views/loginned/loginned.component';
import { LogowanieComponent } from './views/logowanie/logowanie.component';
import { RejestracjaComponent } from './views/rejestracja/rejestracja.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'opinie', component: OpinieComponent},
  {path: 'logowanie', component: LogowanieComponent},
  {path: 'rejestracja', component: RejestracjaComponent},
  {path: 'loginned', component: LoginnedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
