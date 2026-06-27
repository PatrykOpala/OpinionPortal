import { Component, inject, } from '@angular/core';
import { UserStoreAbstract } from '../../types/classes/user-store-abstract.class';
import { DialogServiceService } from './components/dialogs/dialog-new-opinion/dialog-service.service';
import { PaneContainerComponent } from '../../shared/components/pane-container/pane-container.component';
//import { OpinieContainerComponent } from '../../shared/components/opinie-container/opinie-container.component';

import { Router, RouterOutlet} from '@angular/router';

@Component({
    selector: 'opn-loginned',
    templateUrl: './loginned.component.html',
    styleUrls: ['./loginned.component.scss'],
    imports: [PaneContainerComponent, /*OpinieContainerComponent,*/ RouterOutlet]
})
export class LoginnedComponent extends UserStoreAbstract{
  protected dialogNew = inject(DialogServiceService);
  protected loginnedRouter = inject(Router);
  constructor() {
    super()
    this.loginnedRouter.navigateByUrl("/loginned/opinions-list");
  }
  navigateToAddOpinion(){
    this.loginnedRouter.navigateByUrl("/loginned/add-opinion");
  }
}