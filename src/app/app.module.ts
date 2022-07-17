import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DialogOpinionComponent } from './components/dialog-opinion/dialog-opinion.component';
import { DialogOpinionContentComponent } from './components/dialog-opinion/dialog-opinion-content/dialog-opinion-content.component';
import { ChooseCompanyComponent } from './components/choose-company/choose-company.component';
import { OpinieEditorComponent } from './components/opinie-editor/opinie-editor.component';
import { PaneContainerComponent } from './components/pane-container/pane-container.component';
import { LogoOpinierComponent } from './components/logo-opinier/logo-opinier.component';
import { OpinieContainerComponent } from './components/opinie-container/opinie-container.component';
import { AddOpinionService } from './addopinion.service';
import { DialogDirective } from './../shared/utils/ts/directives/dialog.directive';
import { DialogContainerDirective } from './../shared/utils/ts/directives/dialog-container.directive';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { opinionReducer } from 'src/store/reducers/opinion.reducer';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginnedComponent } from './views/loginned/loginned.component';
import { AddOpinionComponent } from './components/add-opinion/add-opinion.component';

@NgModule({
  declarations: [
    DialogOpinionComponent,
    DialogOpinionContentComponent,
    // ChooseCompanyComponent,
    // AddOpinionComponent,
    OpinieEditorComponent,

    // DashboardComponent,
    // LoginnedComponent,
    // PaneContainerComponent,
    // LogoOpinierComponent,
    // OpinieContainerComponent,
    DialogDirective,
    DialogContainerDirective,
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(AppRoutes),
    // RouterModule,
    // ReactiveFormsModule,
    // StoreModule.forRoot({posts: opinionReducer}),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25, // Retains last 25 states
    //   logOnly: environment.production, // Restrict extension to log-only mode
    //   autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    // }),
  ],
  providers: [AddOpinionService],
  bootstrap: []
})
export class AppModule { }
