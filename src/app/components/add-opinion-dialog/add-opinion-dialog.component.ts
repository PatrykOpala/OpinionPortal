import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {DialogContainerDirective} from '../../../utils/directives/dialog-container.directive';
import {DialogChoosePnStepComponent} from '../dialog-choose-pn-step/dialog-choose-pn-step.component';

@Component({
  selector: 'opn-add-opinion-dialog',
  templateUrl: './add-opinion-dialog.component.html',
  styleUrls: ['./add-opinion-dialog.component.scss']
})
export class AddOpinionDialogComponent implements OnInit {

  @ViewChild(DialogContainerDirective) dialogContainerDirective!: DialogContainerDirective;
  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.opnLoadDialogContent("start");
  }

  opnLoadDialogContent(start: string){
    if(start === "start"){
      let dContainerRef = this.dialogContainerDirective.dialogViewContainerRef;
      dContainerRef.clear();

      let dialogComponentRef = dContainerRef.createComponent(DialogChoosePnStepComponent)
    }
  }

  closeDialog(){
    this.close.emit();
  }

}
