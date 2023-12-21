import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService2 } from 'src/app/core/services/auth/auth.service-2';

@Component({
  selector: 'opn-business-register',
  templateUrl: './business-register.component.html',
  styleUrls: ['./business-register.component.scss']
})
export class BusinessRegisterComponent {
  protected loginForm !: FormGroup;
  private loginFormBuilder = inject(FormBuilder);
  protected authService = inject(AuthService2);

  constructor() {
    this.loginForm = this.loginFormBuilder.group({
      name: new FormControl(''),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('')
    })
  }

  onSubmit(): void{
    this.loginForm.disable();
    this.authService.login(this.loginForm);
  }
}
