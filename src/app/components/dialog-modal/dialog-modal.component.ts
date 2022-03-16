import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'opn-app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss']
})
export class DialogModalComponent implements OnInit {

  @Output()
  visib = new EventEmitter<string>();

  public d: string = "dis";

  //titemmObs: Observable<any[]>;

  constructor() { 
    //this.titemmObs = fdb.collection('opinion').valueChanges()
  }

  @ViewChild('opinionTopic') opTopic!: ElementRef;
  @ViewChild('opinionContent') opContent!: ElementRef;
  
  ngOnInit(): void {
  }

  mddone(){
    let fhy = {
      opContent: this.opContent.nativeElement.value,
      opTopic: this.opTopic.nativeElement.value
    }
    // this.fdb.collection('opinion').add(fhy).then(g =>{
    //   // console.log("udało się")
    //   this.opTopic.nativeElement.value = "";
    //   this.opContent.nativeElement.value = "";
    //   console.log(g.id)
    //   this.visib.emit(this.d);
    // }).catch(e=>{console.log(e)})
  }

  mdclose(){
    this.visib.emit(this.d);
  }

}
