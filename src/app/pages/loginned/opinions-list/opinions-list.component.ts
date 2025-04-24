import { Component, inject } from '@angular/core';
import { DialogServiceService } from '../components/dialogs/dialog-new-opinion/dialog-service.service';
import { Router } from '@angular/router';
import { UserStoreAbstract } from 'src/app/types/classes/user-store-abstract.class';
import { PaneContainerComponent } from 'src/app/shared/components/pane-container/pane-container.component';
import { OpinionAddPlaceholderComponent } from '../components/opinion-add-placeholder/opinion-add-placeholder.component';
import { OpinionsService } from 'src/app/services/opinions/opinions.service';

@Component({
    selector: 'opn-opinions-list',
    imports: [PaneContainerComponent, OpinionAddPlaceholderComponent],
    templateUrl: './opinions-list.component.html',
    styleUrl: './opinions-list.component.scss'
})
export class OpinionsListComponent extends UserStoreAbstract{
  protected opinionsService = inject(OpinionsService);
  protected dialogNew = inject(DialogServiceService);
  protected loginnedRouter = inject(Router);
  constructor() {
    super()
    // this.opinionsService.GetOpinionFromDatabase();
  }
  ngOnInit(): void {}
  navigateToAddOpinion(){
    this.loginnedRouter.navigateByUrl("/loginned/add-opinion");
  }
}
