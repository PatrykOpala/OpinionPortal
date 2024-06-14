import { NgModule } from '@angular/core';
import { NgIf, NgPlural } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'src/environments/environment';
import { opinionReducer } from './core/store/reducers/opinion.reducer';
import { userReducer } from './core/store/reducers/user.reducer';
import { productReducer } from './core/store/reducers/product.reducer';
import { UloginnedComponent } from './pages/uloginned/uloginned.component';

@NgModule({
  declarations: [
    UloginnedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgPlural,
    NgIf,
    StoreModule.forRoot({opinions: opinionReducer, users: userReducer, products: productReducer}),
    StoreDevtoolsModule.instrument({maxAge: 5, logOnly: environment.production}),
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
