import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/utils/ts/classes/Category';

@Component({
  selector: 'opn-opinie-choose-category',
  templateUrl: './opinie-choose-category.component.html',
  styleUrls: ['./opinie-choose-category.component.scss']
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
