import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { OpinieComponent } from '../opinie/opinie.component';
import { LoginnedComponent } from '../loginned/loginned.component';
import { LogowanieComponent } from '../logowanie/logowanie.component';
import { RejestracjaComponent } from '../rejestracja/rejestracja.component';

import { PaneContainerComponent } from '../../components/pane-container/pane-container.component';
import { LogoOpinierComponent } from '../../components/logo-opinier/logo-opinier.component';
import { OpinieChooseCategoryComponent } from '../../components/opinie-choose-category/opinie-choose-category.component';
import { OpinieChooseCategoryItemComponent } from '../../components/opinie-choose-category/opinie-choose-category-item/opinie-choose-category-item.component';

import { OpinieContainerComponent } from '../../components/opinie-container/opinie-container.component';

@NgModule({
  declarations: [
    DashboardComponent,
    OpinieComponent,
    LogowanieComponent,
    RejestracjaComponent,
    LoginnedComponent,
    PaneContainerComponent,
    LogoOpinierComponent,
    OpinieChooseCategoryComponent,
    OpinieChooseCategoryItemComponent,
    OpinieContainerComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DashboardComponent,
    OpinieComponent,
    LogowanieComponent,
    RejestracjaComponent,
    LoginnedComponent,
    PaneContainerComponent,
    LogoOpinierComponent,
    OpinieChooseCategoryComponent,
    OpinieChooseCategoryItemComponent,
    OpinieContainerComponent
  ]
})
export class ViewsModuleModule { }
