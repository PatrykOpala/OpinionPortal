import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'opn-opinie-container',
  templateUrl: './opinie-container.component.html',
  styleUrls: ['./opinie-container.component.scss']
})
export class OpinieContainerComponent implements OnInit {

  constructor() { }

  @Input("header") header: string = "";
  @Input("content") content: string = "";

  ngOnInit(): void {
  }

}