import { OpinieComponent } from './components/opinie/opinie.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginnedComponent } from './components/loginned/loginned.component';

const routes: Routes = [
  {path: 'loginned', component: LoginnedComponent},
  {path: 'opinie', component: OpinieComponent},
  {path: '', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
