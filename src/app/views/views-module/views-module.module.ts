import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../views/dashboard/dashboard.component';
import { LoginnedComponent } from '../../views/loginned/loginned.component';

import { PaneContainerComponent } from '../../components/pane-container/pane-container.component';
import { LogoOpinierComponent } from '../../components/logo-opinier/logo-opinier.component';
import { OpinieContainerComponent } from '../../components/opinie-container/opinie-container.component';
import { AddOpinionDialogComponent } from '../../components/add-opinion-dialog/add-opinion-dialog.component';

import { DialogDirective } from '../../../shared/utils/ts/directives/dialog.directive';
import { DialogContainerDirective } from '../../../shared/utils/ts/directives/dialog-container.directive';

@NgModule({
  declarations: [
    DashboardComponent,
    LoginnedComponent,
    PaneContainerComponent,
    LogoOpinierComponent,
    OpinieContainerComponent,
    AddOpinionDialogComponent,
    DialogDirective,
    DialogContainerDirective
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
    AddOpinionDialogComponent,
    DialogDirective,
    DialogContainerDirective
  ]
})
export class ViewsModuleModule { }
