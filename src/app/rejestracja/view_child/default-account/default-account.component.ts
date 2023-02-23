import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { FormService } from 'src/app/core/services/form/form.service';
import { MIN_LENGHT } from 'src/app/core/types/constants';

@Component({
  selector: 'opn-default-account',
  templateUrl: './default-account.component.html',
  styleUrls: ['./default-account.component.scss']
})
export class DefaultAccountComponent implements OnInit {

  protected defaultAccountService = inject(FormService);
  public userForm: FormGroup;
  private dafaultAuthService = inject(AuthService);

  constructor(private registerFormBuilder: FormBuilder) { 
    this.userForm = this.registerFormBuilder.group({
      name: new FormControl(''),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.minLength(MIN_LENGHT))
    });
  }
  
  ngOnInit(): void {}

  signUpUser(): void{
    this.dafaultAuthService.register(this.userForm.value, "user");
  }
}
