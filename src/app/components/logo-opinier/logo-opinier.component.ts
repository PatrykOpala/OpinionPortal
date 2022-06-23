import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'opn-logo-opinier',
  templateUrl: './logo-opinier.component.html',
  styleUrls: ['./logo-opinier.component.scss']
})
export class LogoOpinierComponent implements OnInit {

  @Input("beta-mode") betaMode: boolean = false;
  @Input("motto") mott: string = "";

  lg_MarginLeft: string = "0";

  constructor() { }

  ngOnInit(): void {
    if(this.mott === ""){
      this.lg_MarginLeft = "40%";
    }else{
      this.lg_MarginLeft = "0";
    }
  }

}
