import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../../core/types/typesOpinier';

@Component({
  selector: 'opn-opinie-choose-category',
  templateUrl: './opinie-choose-category.component.html',
  styleUrls: ['./opinie-choose-category.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class OpinieChooseCategoryComponent implements OnInit {

  @Input("chooseItem") chooseItem: Category[] | undefined;

  choose: Category[] | undefined = [];

  constructor() { 
    
  }

  ngOnInit(): void {
    this.choose = this.chooseItem
  }

}
