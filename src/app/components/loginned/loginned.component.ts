import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'opn-app-loginned',
  templateUrl: './loginned.component.html',
  styleUrls: ['./loginned.component.scss']
})
export class LoginnedComponent implements OnInit {

  //titemmObs: Observable<any[]>;

  constructor() { 
    //this.titemmObs = fdb.collection('opinion').valueChanges()
  }

  @ViewChild('opinionTopic') opTopic!: ElementRef
  @ViewChild('opinionContent') opContent!: ElementRef
  
  ngOnInit(): void {
    // if(!localStorage.getItem("user")){
    //   window.location.href = "/"
    // }
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
    // }).catch(e=>{console.log(e)})
  }

}
