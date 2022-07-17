import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AddOpinionService } from 'src/app/addopinion.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'opn-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LogowanieComponent implements OnInit {

  @ViewChild("uEmail") EmailField!: ElementRef;
  @ViewChild("uPassword") PasswordField!: ElementRef;

  public emailL = "";
  private route = inject(Router);

  constructor() { }

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
