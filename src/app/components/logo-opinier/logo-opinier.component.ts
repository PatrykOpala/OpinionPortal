import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'opn-logo-opinier',
  templateUrl: './logo-opinier.component.html',
  styleUrls: ['./logo-opinier.component.scss']
})
export class LogoOpinierComponent implements OnInit {

  @Input("beta-mode") betaMode : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
