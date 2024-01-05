import { NgModule } from '@angular/core';
import { NgForOf } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OpinieComponent } from './opinie.component';

const opinionRoutes: Routes = [{ path: '', component: OpinieComponent }];

@NgModule({
  declarations: [
    
  ],
  imports: [
    NgForOf,
    RouterModule.forChild(opinionRoutes),
  ]
})
export class OpinieModule { }
