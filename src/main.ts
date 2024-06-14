import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AppRoutes } from './app/routes/app.router';
import { provideStore } from '@ngrx/store';
import { opinionReducer } from './app/store/reducers/opinion.reducer';
import { productReducer } from './app/store/reducers/product.reducer';
import { userReducer } from './app/store/reducers/user.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
  provideRouter(AppRoutes, withComponentInputBinding()),
  provideStore({opinions: opinionReducer, users: userReducer, products: productReducer}),
  provideStoreDevtools({maxAge: 5, logOnly: environment.production})
]
}).catch((err) => console.error(err));
