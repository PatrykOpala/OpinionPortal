import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LogowanieComponent } from './logowanie.component';
import { FormsModule } from '@angular/forms';

const loginRoutes: Routes = [{ path: '', component: LogowanieComponent }];

@NgModule({
  declarations: [
    LogowanieComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(loginRoutes)
  ]
})
export class LogowanieModule { }
