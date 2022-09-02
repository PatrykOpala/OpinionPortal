import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LogowanieComponent } from './logowanie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const loginRoutes: Routes = [{ path: '', component: LogowanieComponent }];

@NgModule({
  declarations: [
    LogowanieComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(loginRoutes)
  ]
})
export class LogowanieModule { }
