import { Directive, ViewContainerRef } from '@angular/core';
import { DialogServiceService } from '../../../pages/loginned/components/dialogs/dialog-new-opinion/dialog-service.service';

@Directive({
  selector: '[opnDialogChange]'
})
export class DialogChangeDirective {

  constructor(public viewContainerRef: ViewContainerRef, private dialogService: DialogServiceService) { 
    this.dialogService.dialogChangeOpinionViewRef = viewContainerRef;
  }

}
