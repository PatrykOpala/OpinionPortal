import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddOpinionService } from './addopinion.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewsModuleModule } from './views/views-module/views-module.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewsModuleModule
  ],
  providers: [AddOpinionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
