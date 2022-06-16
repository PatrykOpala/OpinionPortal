import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ViewPN } from '../../../shared/utils/ts/enums/ViewPN';

@Component({
  selector: 'opn-dialog-choose-pn-step',
  templateUrl: './dialog-choose-pn-step.component.html',
  styleUrls: ['./dialog-choose-pn-step.component.scss']
})
export class DialogChoosePnStepComponent implements OnInit {

  // @Output() changeView = new EventEmitter<ViewPN>();

  constructor() { }

  ngOnInit(): void {
  }

}
