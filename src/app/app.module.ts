import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddOpinionService } from './addopinion.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { OpinieComponent } from './views/opinie/opinie.component';
import { LoginnedComponent } from './views/loginned/loginned.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { LogowanieComponent } from './views/logowanie/logowanie.component';
import { RejestracjaComponent } from './views/rejestracja/rejestracja.component';
import { OpinieChooseCategoryComponent } from './components/opinie-choose-category/opinie-choose-category.component';
import { OpinieChooseCategoryItemComponent } from './components/opinie-choose-category/opinie-choose-category-item/opinie-choose-category-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OpinieComponent,
    LoginnedComponent,
    MenuBarComponent,
    LogowanieComponent,
    RejestracjaComponent,
    OpinieChooseCategoryComponent,
    OpinieChooseCategoryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [AddOpinionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
