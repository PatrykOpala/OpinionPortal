import { Component, inject, OnInit } from '@angular/core';
import { OpinieChooseCategoryComponent } from '../shared/components/opinie-choose-category/opinie-choose-category.component';
import { OpinieChooseCategoryItemComponent } from '../shared/components/opinie-choose-category/opinie-choose-category-item/opinie-choose-category-item.component';
import { PaneContainerComponent } from '../shared/components/pane-container/pane-container.component';
import { OpinieContainerComponent } from '../shared/components/opinie-container/opinie-container.component';
import { OpinieHeaderComponent } from '../shared/components/opinie-container/opinie-header/opinie-header.component';
import { OpinieContentComponent } from '../shared/components/opinie-container/opinie-content/opinie-content.component';
import { OpinionsService } from '../core/services/opinions/opinions.service';

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
    OpinieHeaderComponent,
    OpinieContentComponent
  ]
})
export class OpinieComponent implements OnInit {

  private opinionsService = inject(OpinionsService);

  constructor() {
  }

  ngOnInit(): void {
    this.opinionsService.GetOpinionFromDatabase().then(op => console.log(op));
  }

}
