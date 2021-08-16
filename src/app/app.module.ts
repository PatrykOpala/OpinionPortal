import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddOpinionService } from './addopinion.service';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DialogModalComponent } from './components/dialog-modal/dialog-modal.component';
import { OpinieComponent } from './components/opinie/opinie.component';
import { LoginnedComponent } from './components/loginned/loginned.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DialogModalComponent,
    OpinieComponent,
    LoginnedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBsDMt5lx9FPtlUJyejguVyaytn8W7ebq4",
      authDomain: "mytest-project-4e4d6.firebaseapp.com",
      databaseURL: "https://mytest-project-4e4d6-default-rtdb.firebaseio.com",
      projectId: "mytest-project-4e4d6",
      storageBucket: "mytest-project-4e4d6.appspot.com",
      messagingSenderId: "1012981396027",
      appId: "1:1012981396027:web:9d545700ff0f80230ee21e"
    })
  ],
  providers: [AddOpinionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
