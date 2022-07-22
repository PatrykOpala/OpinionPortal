import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppComponent } from './app.component';
import { LoginnedComponent } from './views/loginned/loginned.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AddOpinionComponent } from './components/add-opinion/add-opinion.component';
import { LogoOpinierComponent } from './components/logo-opinier/logo-opinier.component';
import { OpinieEditorComponent } from './components/opinie-editor/opinie-editor.component';
import { DialogOpinionComponent } from './components/dialog-opinion/dialog-opinion.component';
import { ChooseCompanyComponent } from './components/choose-company/choose-company.component';
import { PaneContainerComponent } from './components/pane-container/pane-container.component';
import { OpinieContainerComponent } from './components/opinie-container/opinie-container.component';
import { DialogOpinionContentComponent } from './components/dialog-opinion/dialog-opinion-content/dialog-opinion-content.component';


import { AddOpinionService } from './addopinion.service';
import { FormService } from 'src/shared/utils/ts/services/form.service';
import { DialogDirective } from './../shared/utils/ts/directives/dialog.directive';
import { environment } from 'src/environments/environment';
import { opinionReducer } from 'src/store/reducers/opinion.reducer';
import { OpinieHeaderComponent } from './components/opinie-container/opinie-header/opinie-header.component';
import { OpinieContentComponent } from './components/opinie-container/opinie-content/opinie-content.component';
import { LoginnedModule } from './views/loginned/loginned.module';

const AppRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'opinie', loadChildren: () => import('./views/opinie/opinie.module').then(m => m.OpinieModule)},
  {path: 'login', loadChildren: () => import('./views/logowanie/logowanie.module').then(m => m.LogowanieModule)},
  {path: 'register', loadChildren: () => import('./views/rejestracja/rejestracja.module').then(m => m.RejestracjaModule)},
  {path: 'loginned', loadChildren: () => import('./views/loginned/loginned.module').then(m => m.LoginnedModule)},
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
