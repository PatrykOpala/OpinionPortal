import { Component, Input, OnInit} from '@angular/core';
import { FormService } from 'src/app/services/form/form.service';

@Component({
  selector: 'opn-form-registers',
  template: `<form class="formContainer">
              <ng-content></ng-content>
            </form>`,
  styleUrls: ['./form-registers.component.scss'],
  standalone: true
})
export class FormRegistersComponent implements OnInit {
  @Input() defaultAccountService?: FormService;
  constructor() {}
  ngOnInit(): void {}
}
