import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RejestracjaComponent } from './rejestracja.component';

const RejesrationRoutes: Routes = [{ path: '', component: RejestracjaComponent }];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(RejesrationRoutes)
  ]
})
export class RejestracjaModule { }