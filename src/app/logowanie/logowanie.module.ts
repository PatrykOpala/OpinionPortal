import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LogowanieComponent } from './logowanie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../core/shared/modules/shared.module';

import { DialogNewOpinionComponent } from '../loginned/components/dialogs/dialog-new-opinion/dialog-new-opinion.component';

const loginRoutes: Routes = [{ path: '', component: LogowanieComponent }, {path: 'test-new-dialog', component: DialogNewOpinionComponent}];

@NgModule({
  declarations: [
    LogowanieComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(loginRoutes),
	  SharedModule,
  ]
})
export class LogowanieModule { }
