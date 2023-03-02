import { Directive, ViewContainerRef } from '@angular/core';
import { DialogServiceService } from 'src/app/loginned/components/dialogs/dialog-new-opinion/dialog-service.service';

@Directive({
  selector: '[opnDialogChange]'
})
export class DialogChangeDirective {

  constructor(public viewContainerRef: ViewContainerRef, private dialogService: DialogServiceService) { 
    this.dialogService.dialogChangeOpinionViewRef = viewContainerRef;
  }

}
