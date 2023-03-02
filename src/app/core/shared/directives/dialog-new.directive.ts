import { Directive, ViewContainerRef } from '@angular/core';
import { DialogServiceService } from 'src/app/loginned/components/dialogs/dialog-new-opinion/dialog-service.service';

@Directive({
  selector: '[opnDialogNew]'
})
export class DialogNewDirective {

  constructor(public viewContainerRef: ViewContainerRef, private dialogNewService: DialogServiceService) { 
    this.dialogNewService.dialogNewOpinionRef = viewContainerRef;
  }


}
