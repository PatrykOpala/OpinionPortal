import { Component, Input, OnInit} from '@angular/core';
import { FormService } from 'src/shared/utils/ts/services/form.service';

@Component({
  selector: 'opn-choose-company',
  templateUrl: './choose-company.component.html',
  styleUrls: ['./choose-company.component.scss'],
})
export class ChooseCompanyComponent implements OnInit {

  @Input('choose-value') chooseValue: string = "";

  inputID = Math.floor(Math.random() * 100);

  constructor(public formService: FormService) { }

  ngOnInit(): void { }

}
