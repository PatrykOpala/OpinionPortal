import { Component, ElementRef, OnInit, OnChanges, ViewChild, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'opn-rejestracja',
  templateUrl: './rejestracja.component.html',
  styleUrls: ['./rejestracja.component.scss']
})
export class RejestracjaComponent implements OnInit, OnChanges {

  protected registerForm !: FormGroup;

  constructor(private route: Router, private registerFormBuilder: FormBuilder) { 
    this.registerForm = this.registerFormBuilder.group({
      // email: ['', Validators.email],
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.minLength(16))
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

  signUp(): void{
    // let email = this.EmailField.nativeElement.value;
    // let password = this.PasswordField.nativeElement.value;
    //console.log(this.ads.register(email, password));
    // this.route.navigate(["/loginned"]);
    console.log(this.registerForm.controls['email']);
  }

}
