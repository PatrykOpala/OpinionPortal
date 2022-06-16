import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'opn-opinie-editor',
  templateUrl: './opinie-editor.component.html',
  styleUrls: ['./opinie-editor.component.scss']
})
export class OpinieEditorComponent implements OnInit {

  @Input() eHeader: string = "";

  constructor() { }

  ngOnInit(): void {}

}
