import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'opn-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.scss']
})
export class LogowanieComponent implements OnInit {

  @ViewChild("uEmail") EmailField!: ElementRef;
  @ViewChild("uPassword") PasswordField!: ElementRef;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  signIn(): void{
    let email = this.EmailField.nativeElement.value;
    let password = this.PasswordField.nativeElement.value;

    this.route.navigate(["/loginned"]);
  }
}
