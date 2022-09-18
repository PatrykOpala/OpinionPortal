import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LogowanieComponent } from './logowanie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared/shared.module';

const loginRoutes: Routes = [{ path: '', component: LogowanieComponent }];

@NgModule({
  declarations: [
    LogowanieComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(loginRoutes),
	  SharedModule
  ]
})
export class LogowanieModule { }
