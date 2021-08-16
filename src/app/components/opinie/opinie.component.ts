import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'opn-app-opinie',
  template: `<div class="tiles" *ngFor="let nui of titemm | async">
    <p class="opinion_header">{{nui.opTopic}}</p>
    <p class="opinion_content">{{nui.opContent}}</p>
  </div>`,
  styleUrls: ['./opinie.component.scss']
})
export class OpinieComponent implements OnInit {

  titemm: Observable<any[]>;

  constructor(public fdb: AngularFirestore) { 
    this.titemm = fdb.collection('opinion').valueChanges()
  }

  ngOnInit(): void {
  }

}
