import { Component, ElementRef, OnInit, OnChanges, ViewChild, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'opn-rejestracja',
  templateUrl: './rejestracja.component.html',
  styleUrls: ['./rejestracja.component.scss']
})
export class RejestracjaComponent implements OnInit, OnChanges {

  protected registerForm !: FormGroup;

  constructor(private route: Router, private registerFormBuilder: FormBuilder, protected authService: AuthService) { 
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
    this.authService.register(this.registerForm.value.email, this.registerForm.value.password);
    // this.route.navigateByUrl("/zalogowano");
  }

}
