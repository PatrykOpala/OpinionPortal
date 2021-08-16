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
    if(this.loginElement.nativeElement.parentNode.childNodes[0].checked){
      this.LRConLElement.nativeElement.style.display = "flex";
    }
    this.loginElement.nativeElement.addEventListener("click", ()=>{
      if(this.loginElement.nativeElement.parentNode.childNodes[0].checked){
        this.LRConLElement.nativeElement.style.display = "flex";
      }

      this.loginElement.nativeElement.style.fontSize = "1.4em";
      this.loginElement.nativeElement.style.color = "red";

      this.LRConRegisterElement.nativeElement.style.display = "none";
      this.LRConRegisterElement.nativeElement.classList.remove("LRConReg")

      this.LRConLElement.nativeElement.style.display = "flex";
      this.LRConLElement.nativeElement.classList.add("LRCon")

      this.registerElement.nativeElement.style.fontSize = "1.2em";
      this.registerElement.nativeElement.style.color = "white";
      
    })

    this.registerElement.nativeElement.addEventListener("click", ()=>{
      if(this.registerElement.nativeElement.parentNode.childNodes[0].checked){
        this.LRConRegisterElement.nativeElement.style.display = "flex";
      }

      this.registerElement.nativeElement.style.fontSize = "1.4em";
      this.registerElement.nativeElement.style.color = "red";

      this.LRConLElement.nativeElement.style.display = "none";
      this.LRConLElement.nativeElement.classList.remove("LRCon")

      this.LRConRegisterElement.nativeElement.style.display = "flex";
      this.LRConRegisterElement.nativeElement.classList.add("LRConReg")

      this.loginElement.nativeElement.style.fontSize = "1.2em";
      this.loginElement.nativeElement.style.color = "white";

    })
  }
}
