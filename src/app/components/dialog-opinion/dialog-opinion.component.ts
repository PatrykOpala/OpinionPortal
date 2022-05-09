import { Component, Input, OnInit } from '@angular/core';
import { ViewPN } from 'src/utils/ts/enums/ViewPN';

@Component({
  selector: 'opn-dialog-opinion',
  templateUrl: './dialog-opinion.component.html',
  styleUrls: ['./dialog-opinion.component.scss']
})
export class DialogOpinionComponent implements OnInit {

  @Input() pn!: ViewPN

  constructor() { }

  ngOnInit(): void {
    console.log(this.pn);
  }

}
