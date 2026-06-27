import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpinieComponent } from './opinie.component';

const opinionRoutes: Routes = [{ path: '', component: OpinieComponent }];

@NgModule({
  declarations: [
    
  ],
  imports: [
    RouterModule.forChild(opinionRoutes),
  ]
})
export class OpinieModule { }
