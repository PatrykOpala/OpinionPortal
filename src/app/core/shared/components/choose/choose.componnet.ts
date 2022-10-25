import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'opn-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent implements OnInit {

  @Input("name") name: string = "";
  @Output("typeAction") action = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitTypeAction(e: Event){
    this.action.emit((e.target as HTMLInputElement).value);
  }
}
