import { Component, importProvidersFrom, Input, OnInit } from '@angular/core';
import {Category} from '../../../shared/utils/ts/classes/Category';
import { OpinieChooseCategoryComponent } from 'src/app/components/opinie-choose-category/opinie-choose-category.component';
import { OpinieChooseCategoryItemComponent } from 'src/app/components/opinie-choose-category/opinie-choose-category-item/opinie-choose-category-item.component';

@Component({
  standalone: true,
  imports: [
    OpinieChooseCategoryComponent,
    OpinieChooseCategoryItemComponent,
  ],
  selector: 'opn-app-opinie',
  templateUrl: './opinie.component.html',
  styleUrls: ['./opinie.component.scss']
})
export class OpinieComponent implements OnInit {

  jdufnv: Category[]= []

  constructor() {
  }

  ngOnInit(): void {
  }

}
