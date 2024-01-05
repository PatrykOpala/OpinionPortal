import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RejestracjaComponent } from './rejestracja.component';

import { DefaultAccountComponent } from './view_child/default-account/default-account.component';
import { AccountPersonalBrandComponent } from './view_child/account-personal-brand/account-personal-brand.component';
import { AccountCompanyComponent } from './view_child/account-company/account-company.component';

const RejesrationRoutes: Routes = [{ path: '', component: RejestracjaComponent}, {path: 'default-account', component: DefaultAccountComponent}, 
{path: 'account-personal-brand', component: AccountPersonalBrandComponent}, {path: 'account-company', component: AccountCompanyComponent}];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(RejesrationRoutes),
  ]
})
export class RejestracjaModule { }
