import { Component, OnInit, } from '@angular/core';
import { FormService } from 'src/shared/utils/ts/services/form.service';

@Component({
  selector: 'opn-add-opinion',
  templateUrl: './add-opinion.component.html',
  styleUrls: ['./add-opinion.component.scss']
})
export class AddOpinionComponent implements OnInit {

  constructor(public formService: FormService) { }

  ngOnInit(): void {}

  sendOpinion(): void{
    console.log(this.formService.opinionForm.value)
  }
}
