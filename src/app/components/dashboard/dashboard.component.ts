import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AddOpinionService } from 'src/app/addopinion.service';

@Component({
  selector: 'opn-app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cx: string = "DashBoard"

  constructor(public ads: AddOpinionService) {}

  @ViewChild("log") loginElement!: ElementRef;
  @ViewChild("res") registerElement!: ElementRef;

  @ViewChild("LRConLogin") LRConLElement!: ElementRef;

  @ViewChild("LRConRegister") LRConRegisterElement!: ElementRef;

  @ViewChild("inemail") cn!: ElementRef;
  @ViewChild("inpass") cvvv!: ElementRef;

  @ViewChild("upemail") cnn!: ElementRef;
  @ViewChild("uppass") cvvvccc!: ElementRef;

  sign(em: string, pas: string){
    this.ads.llogin(em, pas);
    this.cn.nativeElement.value = "";
    this.cvvv.nativeElement.value = "";
  }

  signUp(em: string, pas: string){
    this.ads.lregister(em, pas);
    this.cnn.nativeElement.value = "";
    this.cvvvccc.nativeElement.value = "";
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    
  }
}
