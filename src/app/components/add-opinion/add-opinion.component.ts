import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { FormService } from '../../services/form/form.service';

@Component({
  selector: 'opn-add-opinion',
  templateUrl: './add-opinion.component.html',
  styleUrls: ['./add-opinion.component.scss']
})
export class AddOpinionComponent implements OnInit {

  @Input('service') ser!: FormService;
  @Output('close') close = new EventEmitter<boolean>();

  constructor() {}

  // ser: FormService

  ngOnInit(): void {}

  sendOpinion(): void{
    this.ser.addOpinion(this.ser.opinionForm.value.opinionContent);
    this.ser.clear();
    this.closeDialog();
  }

  closeDialog(): void{
    this.close.emit(true);
  }
}
