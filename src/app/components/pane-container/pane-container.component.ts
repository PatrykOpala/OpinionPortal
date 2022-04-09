import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'opn-pane-container',
  templateUrl: './pane-container.component.html',
  styleUrls: ['./pane-container.component.scss']
})
export class PaneContainerComponent implements OnInit {

  @Input("background-color") backgroundColor: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
