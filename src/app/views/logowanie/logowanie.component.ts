import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AddOpinionService } from 'src/app/addopinion.service';

@Component({
  selector: 'opn-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.scss']
})
export class LogowanieComponent implements OnInit {

  @ViewChild("uEmail") EmailField!: ElementRef;
  @ViewChild("uPassword") PasswordField!: ElementRef;

  protected emailL = "";
  protected passL = "";

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.route.navigate(["/loginned"]);
  }

  // signIn(): void{
  //   let email = this.EmailField.nativeElement.value;
  //   let password = this.PasswordField.nativeElement.value;
  //   console.log(this.ads.login(email, password));
  //   this.route.navigate(["/loginned"]);
  // }
}
