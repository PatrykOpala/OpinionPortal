import { Component, inject, OnInit, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth/auth.service';

@Component({
  selector: 'opn-rejestracja',
  templateUrl: './rejestracja.component.html',
  styleUrls: ['./rejestracja.component.scss'],
})
export class RejestracjaComponent implements OnInit {

  protected registerForm !: FormGroup;
  private registerFormBuilder = inject(FormBuilder);
  protected authService = inject(AuthService);

  constructor() {
    this.registerForm = this.registerFormBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.minLength(16))
    })
  }

  ngOnInit(): void {
  }

  signUp(): void{
    this.authService.register(this.registerForm.value.email, this.registerForm.value.password, "user");
  }
}
