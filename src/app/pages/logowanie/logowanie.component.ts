import { Component, inject, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { AuthService2 } from 'src/app/core/services/auth/auth.service-2';

@Component({
  selector: 'opn-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.scss'],
})
export class LogowanieComponent implements OnInit{

  protected loginForm !: FormGroup;

  private loginFormBuilder = inject(FormBuilder);
  protected authService = inject(AuthService2);

  constructor() {
    this.loginForm = this.loginFormBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('')
    })
  }

  ngOnInit(): void {}

  onSubmit(): void{
    this.loginForm.disable();
    this.authService.login(this.loginForm);
  }
}
