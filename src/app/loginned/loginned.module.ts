import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginnedComponent } from './loginned.component';
import { UserAccountComponent } from '../user-account/user-account.component';
import { SharedModule } from '../core/shared/shared/shared.module';
import { TeleportToDirective } from '../core/portals/teleports-directive/teleport-to.directive';
import { AddOpinionComponent } from './components/add-opinion/add-opinion.component';
import { ChooseCompanyComponent } from './components/choose-company/choose-company.component';

const loginnedRoutes: Routes = [{ path: '', component: LoginnedComponent }, {path: 'zalogowano/user-account', component: UserAccountComponent}];

@NgModule({
  declarations: [
    LoginnedComponent,
    UserAccountComponent,
    AddOpinionComponent,
    ChooseCompanyComponent,
    TeleportToDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(loginnedRoutes),
    SharedModule
  ],
  exports:[
    LoginnedComponent,
  ]
})
export class LoginnedModule { }
