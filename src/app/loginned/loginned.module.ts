import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginnedComponent } from './loginned.component';
import { UserAccountComponent } from '../user-account/user-account.component';
import { SharedModule } from '../shared/shared/shared.module';

const loginnedRoutes: Routes = [{ path: '', component: LoginnedComponent }, {path: 'zalogowano/user-account', component: UserAccountComponent}];

@NgModule({
  declarations: [
    LoginnedComponent,
    UserAccountComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(loginnedRoutes),
    SharedModule
  ],
  exports:[
    LoginnedComponent,
  ]
})
export class LoginnedModule { }
