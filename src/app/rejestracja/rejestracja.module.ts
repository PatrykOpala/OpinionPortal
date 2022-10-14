import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RejestracjaComponent } from './rejestracja.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../core/shared/shared/shared.module';
import { RejestracjaStepComponent } from './view_child/rejestracja-step/rejestracja-step.component';
const RejesrationRoutes: Routes = [{ path: '', component: RejestracjaComponent }, {path: 'step/:idstep', component: RejestracjaStepComponent}];

@NgModule({
  declarations: [
    RejestracjaComponent,
    RejestracjaStepComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(RejesrationRoutes),
    ReactiveFormsModule,
    SharedModule
  ]
})
export class RejestracjaModule { }
