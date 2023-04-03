import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OpinieComponent } from './opinie.component';

import { OpinieChooseCategoryComponent } from '../../core/shared/components/opinie-choose-category/opinie-choose-category.component';
import { OpinieChooseCategoryItemComponent } from '../../core/shared/components/opinie-choose-category/opinie-choose-category-item/opinie-choose-category-item.component';
import { SharedModule } from '../../core/shared/modules/shared.module';

const opinionRoutes: Routes = [{ path: '', component: OpinieComponent }];

@NgModule({
  declarations: [
    OpinieComponent,
    OpinieChooseCategoryComponent,
    OpinieChooseCategoryItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(opinionRoutes),
    SharedModule
  ]
})
export class OpinieModule { }
