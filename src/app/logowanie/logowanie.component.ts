import { Component, inject, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth/auth.service';
import { NativeTelService } from '../core/services/native-tel.service';

@Component({
  selector: 'opn-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.scss'],
})
export class LogowanieComponent implements OnInit{

  protected loginForm !: FormGroup;

  private loginFormBuilder = inject(FormBuilder);
  protected authService = inject(AuthService);

  constructor(protected readonly nativeTel: NativeTelService) {
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
