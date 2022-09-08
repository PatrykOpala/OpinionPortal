import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'opn-opinie-header',
  template: `<h1><ng-content></ng-content></h1>`,
  styles: [`h1{margin-top: 4vh;font-size: 2.5em;}`],
  standalone: true
})
export class OpinieHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
