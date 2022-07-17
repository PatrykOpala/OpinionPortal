import { Component, OnInit, } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormService } from 'src/shared/utils/ts/services/form.service';
import { ChooseCompanyComponent } from '../choose-company/choose-company.component';

@Component({
  selector: 'opn-add-opinion',
  templateUrl: './add-opinion.component.html',
  styleUrls: ['./add-opinion.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ChooseCompanyComponent
  ]
})
export class AddOpinionComponent implements OnInit {

  constructor(public formService: FormService) {}

  ngOnInit(): void {}

  sendOpinion(): void{
    console.log(this.formService.opinionForm.value)
    this.formService.addOpinion(this.formService.opinionForm.value.opinionContent);
  }
}
