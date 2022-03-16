import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddOpinionService } from './addopinion.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DialogModalComponent } from './components/dialog-modal/dialog-modal.component';
import { OpinieComponent } from './components/opinie/opinie.component';
import { LoginnedComponent } from './components/loginned/loginned.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DialogModalComponent,
    OpinieComponent,
    LoginnedComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [AddOpinionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
