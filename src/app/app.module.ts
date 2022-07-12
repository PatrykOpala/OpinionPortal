import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

import { DialogOpinionComponent } from './components/dialog-opinion/dialog-opinion.component';
import { DialogOpinionContentComponent } from './components/dialog-opinion/dialog-opinion-content/dialog-opinion-content.component';
import { ChooseCompanyComponent } from './components/choose-company/choose-company.component';
import { LoginnedComponent } from './views/loginned/loginned.component';

import { AddOpinionComponent } from './components/add-opinion/add-opinion.component';
import { OpinieEditorComponent } from './components/opinie-editor/opinie-editor.component';

import { PaneContainerComponent } from './components/pane-container/pane-container.component';
import { LogoOpinierComponent } from './components/logo-opinier/logo-opinier.component';
import { OpinieContainerComponent } from './components/opinie-container/opinie-container.component';

import { AddOpinionService } from './addopinion.service';
import { DialogDirective } from './../shared/utils/ts/directives/dialog.directive';
import { DialogContainerDirective } from './../shared/utils/ts/directives/dialog-container.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

const AppRoutes: Routes = [
  {path: '', component: DashboardComponent, pathMatch: 'full'},
  {path: 'opinie', loadChildren: () => import('./views/opinie/opinie.module').then(m => m.OpinieModule)},
  {path: 'logowanie', loadChildren: () => import('./views/logowanie/logowanie.module').then(m => m.LogowanieModule)},
  {path: 'rejestracja', loadChildren: () => import('./views/rejestracja/rejestracja.module').then(m => m.RejestracjaModule)},
  {path: 'loginned', component: LoginnedComponent},
  {path: 'add', component: AddOpinionComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DialogOpinionComponent,
    DialogOpinionContentComponent,
    ChooseCompanyComponent,
    AddOpinionComponent,
    OpinieEditorComponent,

    DashboardComponent,
    LoginnedComponent,
    PaneContainerComponent,
    LogoOpinierComponent,
    OpinieContainerComponent,
    DialogDirective,
    DialogContainerDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    RouterModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [AddOpinionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
