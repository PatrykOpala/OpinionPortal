import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService2 } from 'src/app/services/auth/auth.service-2';
import { PaneContainerComponent } from 'src/app/shared/components/pane-container/pane-container.component';
import { MenuBarComponent } from '../../shared/components/menu-bar/menu-bar.component';

@Component({
  selector: 'opn-business-login',
  templateUrl: './business-login.component.html',
  styleUrls: ['./business-login.component.scss'],
  standalone: true,
  imports: [PaneContainerComponent, NgIf, MenuBarComponent, ReactiveFormsModule]
})
export class BusinessLoginComponent {
  protected loginForm !: FormGroup;
  private loginFormBuilder = inject(FormBuilder);
  protected authService = inject(AuthService2);
  public progress: boolean = false;
  public disabled: boolean = false;

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
