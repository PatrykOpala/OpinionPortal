import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RejestracjaComponent } from './rejestracja.component';
import { ReactiveFormsModule } from '@angular/forms';

const RejesrationRoutes: Routes = [{ path: '', component: RejestracjaComponent }];

@NgModule({
  declarations: [
    RejestracjaComponent 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(RejesrationRoutes),
    ReactiveFormsModule
  ]
})
export class RejestracjaModule { }