import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';

import { LoginnedComponent } from './loginned.component';
import { UserAccountComponent } from '../user-account/user-account.component';
import { SharedModule } from '../../core/shared/modules/shared.module';
import { AddOpinionComponent } from './components/add-opinion/add-opinion.component';
import { ChooseCompanyComponent } from './components/choose-company/choose-company.component';
import { PersonalBrandComponent } from './personal-brand/personal-brand.component';
import { CompanyComponent } from './company/company.component';
import { DialogAddProduktAndServiceComponent } from './components/dialogs/dialog-add-produkt-and-service/dialog-add-produkt-and-service.component';
import { DialogNewOpinionComponent } from './components/dialogs/dialog-new-opinion/dialog-new-opinion.component';
import { DialogChangeOpinionComponent } from './components/dialogs/dialog-change-opinion/dialog-change-opinion.component';
import { DialogChangeDirective } from '../../core/shared/directives/dialog-change.directive';
import { DialogNewDirective } from '../../core/shared/directives/dialog-new.directive';

const loginnedRoutes: Routes = [{ path: '', component: LoginnedComponent }, {path: 'user-account', component: UserAccountComponent}, 
{path: 'personal-brand', component: PersonalBrandComponent}, {path: 'company', component: CompanyComponent}];

@NgModule({
  declarations: [
    LoginnedComponent,
    UserAccountComponent,
    AddOpinionComponent,
    ChooseCompanyComponent,
    PersonalBrandComponent,
    CompanyComponent,
    DialogAddProduktAndServiceComponent,
    DialogNewOpinionComponent,
    DialogChangeOpinionComponent,
    DialogChangeDirective,
    DialogNewDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(loginnedRoutes),
    SharedModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatListModule
  ],
  exports:[
    LoginnedComponent,
  ]
})
export class LoginnedModule { }
