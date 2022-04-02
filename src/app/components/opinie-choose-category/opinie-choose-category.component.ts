import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-opinie-choose-category',
  templateUrl: './opinie-choose-category.component.html',
  styleUrls: ['./opinie-choose-category.component.scss']
})
export class OpinieChooseCategoryComponent implements OnInit {

  @Input("chooseItem") chooseItem: any[] | undefined;

  choose: any[] | undefined;

  constructor() { 
    
  }

  

  ngOnInit(): void {
    this.choose = this.chooseItem
  }

}
