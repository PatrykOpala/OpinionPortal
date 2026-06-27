import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginnedComponent } from './loginned.component';
import { SettingsAccountComponent } from '../settings-account/settings-account.component';
import { AddOpinionComponent } from './components/add-opinion/add-opinion.component';
import { ChooseCompanyComponent } from './components/choose-company/choose-company.component';
import { PersonalBrandComponent } from './personal-brand/personal-brand.component';
import { CompanyComponent } from './company/company.component';
import { DialogAddProduktAndServiceComponent } from './components/dialogs/dialog-add-produkt-and-service/dialog-add-produkt-and-service.component';
import { DialogChangeOpinionComponent } from './components/dialogs/dialog-change-opinion/dialog-change-opinion.component';

const loginnedRoutes: Routes = [{ path: '', component: LoginnedComponent }, {path: 'settings-account', component: SettingsAccountComponent}, 
{path: 'personal-brand', component: PersonalBrandComponent}, {path: 'company', component: CompanyComponent}];

@NgModule({
  declarations: [
    AddOpinionComponent,
    ChooseCompanyComponent,
    DialogAddProduktAndServiceComponent,
    DialogChangeOpinionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(loginnedRoutes),
  ]
})
export class LoginnedModule { }
