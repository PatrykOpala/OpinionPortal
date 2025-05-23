import { Component, inject, OnInit } from '@angular/core';
import { OpinionsService } from '../../services/opinions/opinions.service';
import { Opinions } from '../../types/models/opinion.model';
import { NgForOf, NgIf } from '@angular/common';
import { OpinieChooseCategoryItemComponent } from 'src/app/shared/components/opinie-choose-category/opinie-choose-category-item/opinie-choose-category-item.component';
import { OpinieChooseCategoryComponent } from 'src/app/shared/components/opinie-choose-category/opinie-choose-category.component';
import { PaneContainerComponent } from 'src/app/shared/components/pane-container/pane-container.component';
import { OpinieContainerComponent } from 'src/app/shared/components/opinie-container/opinie-container.component';
import { MenuBarComponent } from '../../shared/components/menu-bar/menu-bar.component';

@Component({
    selector: 'opn-opinie',
    templateUrl: './opinie.component.html',
    styleUrls: ['./opinie.component.scss'],
    imports: [
        OpinieChooseCategoryComponent,
        OpinieChooseCategoryItemComponent,
        PaneContainerComponent,
        OpinieContainerComponent,
        MenuBarComponent,
        NgForOf,
        NgIf
    ]
})
export class OpinieComponent implements OnInit {

  private opinionsService = inject(OpinionsService);
  protected allOpinions: Opinions[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.opinionsService.databaseQuery.getAllFromDatabase<Opinions>('opinions').then(op => this.allOpinions = op);
  }
}
