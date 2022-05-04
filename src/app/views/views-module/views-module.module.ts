import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginnedComponent } from '../loginned/loginned.component';

import { PaneContainerComponent } from '../../components/pane-container/pane-container.component';
import { LogoOpinierComponent } from '../../components/logo-opinier/logo-opinier.component';
import { OpinieContainerComponent } from '../../components/opinie-container/opinie-container.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LoginnedComponent,
    PaneContainerComponent,
    LogoOpinierComponent,
    OpinieContainerComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DashboardComponent,
    LoginnedComponent,
    PaneContainerComponent,
    LogoOpinierComponent,
    OpinieContainerComponent,
  ]
})
export class ViewsModuleModule { }
