import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'opn-form-registers',
  templateUrl: './form-registers.component.html',
  styleUrls: ['./form-registers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormRegistersComponent implements OnInit {

  @Input() type: string = "";

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.type);
  }

}
