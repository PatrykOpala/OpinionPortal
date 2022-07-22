import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'opn-opinie-content',
  template: `<p><ng-content></ng-content></p>`,
  styles: [`p{margin-top: 10px;font-size: 1.9em;}`]
})
export class OpinieContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
