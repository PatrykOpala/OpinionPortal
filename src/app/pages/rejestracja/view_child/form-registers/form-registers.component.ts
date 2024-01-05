import { Component, Input, OnInit} from '@angular/core';
import { FormService } from 'src/app/core/services/form/form.service';

@Component({
  selector: 'opn-form-registers',
  templateUrl: './form-registers.component.html',
  styleUrls: ['./form-registers.component.scss'],
  standalone: true
})
export class FormRegistersComponent implements OnInit {
  @Input() defaultAccountService?: FormService;
  constructor() {}
  ngOnInit(): void {}
}
