import { NgModule } from '@angular/core';
import { NgIf, NgPlural } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { environment } from 'src/environments/environment';
import { MenuBarComponent } from '../app/core/shared/components/menu-bar/menu-bar.component';
import { SharedModule } from './core/shared/modules/shared.module';
import { AppRoutesModule } from './routes/app-routes.module';
import { opinionReducer } from './core/store/reducers/opinion.reducer';
import { userReducer } from './core/store/reducers/user.reducer';
import { productReducer } from './core/store/reducers/product.reducer';
import { UloginnedComponent } from './pages/uloginned/uloginned.component';
import { BusinessLoginComponent } from './pages/business-login/business-login.component';
import { BusinessRegisterComponent } from './pages/business-register/business-register.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
	  MenuBarComponent,
    UloginnedComponent,
    BusinessLoginComponent,
    BusinessRegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutesModule,
    ReactiveFormsModule,
    SharedModule,
    NgPlural,
    NgIf,
    StoreModule.forRoot({opinions: opinionReducer, users: userReducer, products: productReducer}),
    StoreDevtoolsModule.instrument({maxAge: 5, logOnly: environment.production}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
