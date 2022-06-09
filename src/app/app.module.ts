import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginnedComponent } from './views/loginned/loginned.component';
import { ViewsModuleModule } from './views/views-module/views-module.module';

import { AddOpinionService } from './addopinion.service';
import { DialogChoosePnStepComponent } from './components/dialog-choose-pn-step/dialog-choose-pn-step.component';
import { DialogOpinionComponent } from './components/dialog-opinion/dialog-opinion.component';
import { DialogOpinionContentComponent } from './components/dialog-opinion/dialog-opinion-content/dialog-opinion-content.component';

const AppRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'opinie', loadChildren: () => import('./views/opinie/opinie.module').then(m => m.OpinieModule)},
  {path: 'logowanie', loadChildren: () => import('./views/logowanie/logowanie.module').then(m => m.LogowanieModule)},
  {path: 'rejestracja', loadChildren: () => import('./views/rejestracja/rejestracja.module').then(m => m.RejestracjaModule)},
  {path: 'loginned', component: LoginnedComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DialogChoosePnStepComponent,
    DialogOpinionComponent,
    DialogOpinionContentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    ViewsModuleModule,
  ],
  providers: [AddOpinionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
