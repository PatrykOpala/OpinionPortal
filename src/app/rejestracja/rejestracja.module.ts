import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RejestracjaComponent } from './rejestracja.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../core/shared/modules/shared.module';
import { RejestracjaStepComponent } from './view_child/rejestracja-step/rejestracja-step.component';

import { FormRegistersComponent } from './view_child/form-registers/form-registers.component';

import { DefaultAccountComponent } from './view_child/default-account/default-account.component';
import { AccountPersonalBrandComponent } from './view_child/account-personal-brand/account-personal-brand.component';
import { AccountCompanyComponent } from './view_child/account-company/account-company.component';

const RejesrationRoutes: Routes = [{ path: '', component: RejestracjaComponent}, {path: 'default-account', component: DefaultAccountComponent}, 
{path: 'account-personal-brand', component: AccountPersonalBrandComponent}, {path: 'account-company', component: AccountCompanyComponent}];

@NgModule({
  declarations: [
    RejestracjaComponent,
    RejestracjaStepComponent,
    FormRegistersComponent,
    DefaultAccountComponent,
    AccountPersonalBrandComponent,
    AccountCompanyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(RejesrationRoutes),
    ReactiveFormsModule,
    SharedModule
  ]
})
export class RejestracjaModule { }
