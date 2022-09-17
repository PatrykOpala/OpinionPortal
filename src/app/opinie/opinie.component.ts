import { Component, inject, OnInit } from '@angular/core';
import { OpinieChooseCategoryComponent } from '../shared/components/opinie-choose-category/opinie-choose-category.component';
import { OpinieChooseCategoryItemComponent } from '../shared/components/opinie-choose-category/opinie-choose-category-item/opinie-choose-category-item.component';
import { PaneContainerComponent } from '../shared/components/pane-container/pane-container.component';
import { OpinieContainerComponent } from '../shared/components/opinie-container/opinie-container.component';
import { OpinionsService } from '../core/services/opinions/opinions.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'opn-opinie',
  templateUrl: './opinie.component.html',
  styleUrls: ['./opinie.component.scss'],
  standalone: true,
  imports: [
    OpinieChooseCategoryComponent,
    OpinieChooseCategoryItemComponent,
    PaneContainerComponent,
    OpinieContainerComponent,
    CommonModule
  ]
})
export class OpinieComponent implements OnInit {

  private opinionsService = inject(OpinionsService);
  protected allOpinions: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.opinionsService.GetOpinionFromDatabase().then(op => {
      if(op !== null && op !== undefined){
        this.allOpinions = op;
        console.log(op)
      }
    });
  }

}
