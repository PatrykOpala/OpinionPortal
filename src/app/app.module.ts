import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { environment } from 'src/environments/environment';
import { opinionReducer } from './core/store/reducers/opinion.reducer';
import { MenuBarComponent } from '../app/core/shared/components/menu-bar/menu-bar.component';
import { SharedModule } from '../app/core/shared/shared/shared.module';
import { CommonModule } from '@angular/common';
import { TeleportOutletDirective } from './core/portals/teleports-directive/teleport-outlet.directive';


const AppRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'opinie', loadChildren: () => import('./opinie/opinie.module').then(m => m.OpinieModule)},
  {path: 'logowanie', loadChildren: () => import('./logowanie/logowanie.module').then(m => m.LogowanieModule)},
  {path: 'rejestracja', loadChildren: () => import('./rejestracja/rejestracja.module').then(m => m.RejestracjaModule)},
  {path: 'zalogowano', loadChildren: () => import('./loginned/loginned.module').then(m => m.LoginnedModule)},
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
	  MenuBarComponent,
    TeleportOutletDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    RouterModule.forRoot(AppRoutes),
    StoreModule.forRoot({posts: opinionReducer}),
    StoreDevtoolsModule.instrument({maxAge: 5, logOnly: environment.production,}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
