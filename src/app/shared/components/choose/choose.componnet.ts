import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'opn-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent implements OnInit {

  @Input("name") name: string = "";
  @Input("typeChecked") typeChecked: boolean = false;
  @Output("typeAction") action = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitTypeAction(e: Event){
    console.log((e.target as HTMLInputElement).value);
  }
}
