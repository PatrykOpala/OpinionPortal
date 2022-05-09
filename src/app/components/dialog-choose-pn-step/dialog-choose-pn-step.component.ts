import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ViewPN } from 'src/utils/ts/enums/ViewPN';

@Component({
  selector: 'opn-dialog-choose-pn-step',
  templateUrl: './dialog-choose-pn-step.component.html',
  styleUrls: ['./dialog-choose-pn-step.component.scss']
})
export class DialogChoosePnStepComponent implements OnInit {

  @Output() changeView = new EventEmitter<ViewPN>();

  constructor() { }

  ngOnInit(): void {
  }

  setPositiveAndNegativeLayout(ev: Event, view?: ViewPN): void{
    if((ev.target as HTMLButtonElement).getAttribute("id") === "positiveE"){
      this.changeView.emit(ViewPN.POSITIVE);
    }
    if((ev.target as HTMLButtonElement).getAttribute("id") === "negativeE"){
      this.changeView.emit(ViewPN.NEGATIVE);
    }
  }

}
