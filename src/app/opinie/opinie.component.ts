import { Component, OnInit } from '@angular/core';
import {Category} from '../core/types/typesOpinier';
import { OpinieChooseCategoryComponent } from '../shared/components/opinie-choose-category/opinie-choose-category.component';
import { OpinieChooseCategoryItemComponent } from '../shared/components/opinie-choose-category/opinie-choose-category-item/opinie-choose-category-item.component';

@Component({
  selector: 'opn-app-opinie',
  templateUrl: './opinie.component.html',
  styleUrls: ['./opinie.component.scss'],
  standalone: true,
  imports: [
    OpinieChooseCategoryComponent,
    OpinieChooseCategoryItemComponent,
  ]
})
export class OpinieComponent implements OnInit {

  jdufnv: Category[]= []

  constructor() {
  }

  ngOnInit(): void {
  }

}
