import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AddOpinionComponent } from './components/add-opinion/add-opinion.component';
import { OpinieEditorComponent } from './components/opinie-editor/opinie-editor.component';
import { DialogOpinionComponent } from './components/dialog-opinion/dialog-opinion.component';
import { ChooseCompanyComponent } from './components/choose-company/choose-company.component';
import { PaneContainerComponent } from './components/pane-container/pane-container.component';
import { DialogOpinionContentComponent } from './components/dialog-opinion/dialog-opinion-content/dialog-opinion-content.component';


import { AddOpinionService } from './addopinion.service';
import { FormService } from './services/form/form.service';
import { DialogDirective } from './../shared/utils/ts/directives/dialog.directive';
import { environment } from 'src/environments/environment';
import { opinionReducer } from './store/reducers/opinion.reducer';
import { LoginnedModule } from './views/loginned/loginned.module';

const AppRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'opinie', loadChildren: () => import('./views/opinie/opinie.module').then(m => m.OpinieModule)},
  {path: 'logowanie', loadChildren: () => import('./views/logowanie/logowanie.module').then(m => m.LogowanieModule)},
  {path: 'rejestracja', loadChildren: () => import('./views/rejestracja/rejestracja.module').then(m => m.RejestracjaModule)},
  {path: 'zalogowano', loadChildren: () => import('./views/loginned/loginned.module').then(m => m.LoginnedModule)},
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddOpinionComponent,
    OpinieEditorComponent,
    DialogOpinionComponent,
    ChooseCompanyComponent,
    PaneContainerComponent,
    DialogOpinionContentComponent,
    DialogDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    LoginnedModule,
    RouterModule.forRoot(AppRoutes),
    StoreModule.forRoot({posts: opinionReducer}),
    StoreDevtoolsModule.instrument({maxAge: 5, logOnly: environment.production,}),
  ],
  providers: [AddOpinionService, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
