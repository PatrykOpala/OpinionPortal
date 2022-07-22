import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'opn-opinie-header',
  template: `<h2><ng-content></ng-content></h2>`,
  styles: [`h2{margin-top: 4vh;font-size: 2.5em;}`]
})
export class OpinieHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
