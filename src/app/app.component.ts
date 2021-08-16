import { Component} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AddOpinionService } from './addopinion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public fsd: string = "dis";

  constructor(public c: AddOpinionService, public fdb: AngularFirestore){}

  logginStat = localStorage.getItem("user")

  cjd(){
    this.fdb.collection('opinion').doc('NUYsSOD4zdE6y46Y3NE1').delete()
  }

  opinionAdd(value: string): void{
    this.fsd = value;
  }

  opinionClose(cdf: string): void{
    this.fsd = cdf;
  }
}
