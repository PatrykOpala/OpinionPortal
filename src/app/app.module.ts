import { NgModule } from '@angular/core';
import { NgIf, NgPlural } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';
import { MenuBarComponent } from '../app/core/shared/components/menu-bar/menu-bar.component';
import { AppRoutesModule } from './routes/app-routes.module';
import { opinionReducer } from './core/store/reducers/opinion.reducer';
import { userReducer } from './core/store/reducers/user.reducer';
import { productReducer } from './core/store/reducers/product.reducer';
import { UloginnedComponent } from './pages/uloginned/uloginned.component';

@NgModule({
  declarations: [
    AppComponent,
	  MenuBarComponent,
    UloginnedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutesModule,
    ReactiveFormsModule,
    NgPlural,
    NgIf,
    StoreModule.forRoot({opinions: opinionReducer, users: userReducer, products: productReducer}),
    StoreDevtoolsModule.instrument({maxAge: 5, logOnly: environment.production}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
