import { NgModule } from '@angular/core';
import { NgPlural } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { opinionReducer } from './store/reducers/opinion.reducer';
import { userReducer } from './store/reducers/user.reducer';
import { productReducer } from './store/reducers/product.reducer';
import { UloginnedComponent } from './pages/uloginned/uloginned.component';

@NgModule({
  declarations: [
    UloginnedComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgPlural,
    StoreModule.forRoot({opinions: opinionReducer, users: userReducer, products: productReducer}),
    StoreDevtoolsModule.instrument({maxAge: 5, logOnly: environment.production}),
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
