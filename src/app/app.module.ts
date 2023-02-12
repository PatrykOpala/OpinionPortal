import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { environment } from 'src/environments/environment';
import { opinionReducer } from './core/store/reducers/opinion.reducer';
import { MenuBarComponent } from '../app/core/shared/components/menu-bar/menu-bar.component';
import { SharedModule } from '../app/core/shared/modules/shared.module';
import { CommonModule } from '@angular/common';
import { TeleportOutletDirective } from './core/portals/teleports-directive/teleport-outlet.directive';
import { AppRoutesModule } from './app-routes.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
	  MenuBarComponent,
    TeleportOutletDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutesModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    StoreModule.forRoot({posts: opinionReducer}),
    StoreDevtoolsModule.instrument({maxAge: 5, logOnly: environment.production,}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
