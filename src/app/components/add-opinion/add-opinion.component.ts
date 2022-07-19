import { Component, Input, OnInit, } from '@angular/core';
import { FormService } from 'src/shared/utils/ts/services/form.service';

@Component({
  selector: 'opn-add-opinion',
  templateUrl: './add-opinion.component.html',
  styleUrls: ['./add-opinion.component.scss']
})
export class AddOpinionComponent implements OnInit {

  @Input('service') ser!: FormService;

  constructor() {}

  ngOnInit(): void {}

  sendOpinion(): void{
    console.log(this.ser.opinionForm.value)
    this.ser.addOpinion(this.ser.opinionForm.value.opinionContent);
  }
}
