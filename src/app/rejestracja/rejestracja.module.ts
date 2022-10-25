import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RejestracjaComponent } from './rejestracja.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../core/shared/shared/shared.module';
import { RejestracjaStepComponent } from './view_child/rejestracja-step/rejestracja-step.component';
import { FormRegistersComponent } from './view_child/form-registers/form-registers.component';
const RejesrationRoutes: Routes = [{ path: '', component: RejestracjaComponent}, {path: 'ch', component: FormRegistersComponent}];

@NgModule({
  declarations: [
    RejestracjaComponent,
    RejestracjaStepComponent,
    FormRegistersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(RejesrationRoutes),
    ReactiveFormsModule,
    SharedModule
  ]
})
export class RejestracjaModule { }
