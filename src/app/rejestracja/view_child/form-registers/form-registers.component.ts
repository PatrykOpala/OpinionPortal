import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormService } from 'src/app/core/services/form/form.service';

@Component({
  selector: 'opn-form-registers',
  templateUrl: './form-registers.component.html',
  styleUrls: ['./form-registers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormRegistersComponent implements OnInit {

  protected formService = inject(FormService);

  constructor() {
  }

  ngOnInit(): void {
    
  }

}
