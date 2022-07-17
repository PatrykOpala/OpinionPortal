import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OpinieComponent } from './opinie.component';

import { OpinieChooseCategoryComponent } from '../../components/opinie-choose-category/opinie-choose-category.component';
import { OpinieChooseCategoryItemComponent } from '../../components/opinie-choose-category/opinie-choose-category-item/opinie-choose-category-item.component';



@NgModule({
  declarations: [
    OpinieChooseCategoryComponent,
    OpinieChooseCategoryItemComponent,
  ],
  imports: [
    CommonModule,
    // RouterModule.forChild(opinionRoutes)
  ]
})
export class OpinieModule { }