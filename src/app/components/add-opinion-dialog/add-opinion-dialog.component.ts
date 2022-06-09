import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ViewPN } from '../../../shared/utils/ts/enums/ViewPN';
import {DialogContainerDirective} from '../../../shared/utils/ts/directives/dialog-container.directive';
import {DialogChoosePnStepComponent} from '../../components/dialog-choose-pn-step/dialog-choose-pn-step.component';
import { DialogOpinionComponent } from '../../components/dialog-opinion/dialog-opinion.component';

@Component({
  selector: 'opn-add-opinion-dialog',
  templateUrl: './add-opinion-dialog.component.html',
  styleUrls: ['./add-opinion-dialog.component.scss']
})
export class AddOpinionDialogComponent implements OnInit {

  @ViewChild(DialogContainerDirective) dialogContainerDirective!: DialogContainerDirective;
  @Output() close = new EventEmitter<void>();

  choosePNStepsSub!: Subscription;

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.opnLoadDialogContent("start");
  }

  opnLoadDialogContent(start: string){
    if(start === ViewPN.START){
      let dContainerRef = this.dialogContainerDirective.dialogViewContainerRef;
      dContainerRef.clear();

      let dialogComponentRef = dContainerRef.createComponent(DialogChoosePnStepComponent);
      this.choosePNStepsSub = dialogComponentRef.instance.changeView.subscribe((viewPN)=>{
        this.choosePNStepsSub.unsubscribe();
        this.opnLoadDialogContent(viewPN);
      })
    }

    if(start === ViewPN.POSITIVE){
      let dContainerRef = this.dialogContainerDirective.dialogViewContainerRef;
      dContainerRef.clear();
      let dialogComponentRef = dContainerRef.createComponent(DialogOpinionComponent);
      dialogComponentRef.instance.pn = ViewPN.POSITIVE;
    }

    if(start === ViewPN.NEGATIVE){
      let dContainerRef = this.dialogContainerDirective.dialogViewContainerRef;
      dContainerRef.clear();
      let dialogComponentRef = dContainerRef.createComponent(DialogOpinionComponent);
      dialogComponentRef.instance.pn = ViewPN.NEGATIVE;
    }
  }

  closeDialog(){
    this.close.emit();
  }

}
