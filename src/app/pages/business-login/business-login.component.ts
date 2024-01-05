import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService2 } from 'src/app/core/services/auth/auth.service-2';
import { PaneContainerComponent } from 'src/app/core/shared/components/pane-container/pane-container.component';

@Component({
  selector: 'opn-business-login',
  templateUrl: './business-login.component.html',
  styleUrls: ['./business-login.component.scss'],
  standalone: true,
  imports: [PaneContainerComponent, NgIf, ReactiveFormsModule]
})
export class BusinessLoginComponent {
  protected loginForm !: FormGroup;
  private loginFormBuilder = inject(FormBuilder);
  protected authService = inject(AuthService2);

  constructor() {
    this.loginForm = this.loginFormBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('')
    })
  }

  onSubmit(): void{
    this.loginForm.disable();
    this.authService.loginBusiness(this.loginForm.value.email, this.loginForm.value.password);
    this.loginForm.enable();
  }
}
