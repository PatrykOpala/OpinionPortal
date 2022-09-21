import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'opn-opinie-container',
  templateUrl: './opinie-container.component.html',
  styleUrls: ['./opinie-container.component.scss'],
})
export class OpinieContainerComponent implements OnInit {

  @Input("loginP") login: boolean = false;
  @Input("opinie-header") header: string = "";
  @Input("opinie-content") content: string = "";

  @Input("user_name") user_name = "";

  constructor(){}

  ngOnInit(): void {}
}
