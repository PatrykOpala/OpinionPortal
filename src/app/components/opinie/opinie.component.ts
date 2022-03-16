import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'opn-app-opinie',
  template: `<div class="tiles">
    <p class="opinion_header"></p>
    <p class="opinion_content"></p>
  </div>`,
  styleUrls: ['./opinie.component.scss']
})
export class OpinieComponent implements OnInit {

  //titemm: Observable<any[]>;

  constructor() { 
    //this.titemm = fdb.collection('opinion').valueChanges()
  }

  ngOnInit(): void {
  }

}
