import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Company } from 'src/shared/utils/ts/interfaces/company';

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

  consoleNameCompany(event: Company){
    console.log(event);
  }

}
