import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from 'src/app/core/services/form/form.service';

@Component({
  selector: 'opn-default-account',
  templateUrl: './default-account.component.html',
  styleUrls: ['./default-account.component.scss']
})
export class DefaultAccountComponent implements OnInit {

  protected defaultAccountService = inject(FormService);
  protected userForm: FormGroup;

  constructor(private registerFormBuilder: FormBuilder) { 
    this.userForm = this.registerFormBuilder.group({
      userName: new FormControl(''),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.minLength(16))
    })
  }

  ngOnInit(): void {}

  signUpUser(event: Event): void{
    event.preventDefault();
    console.log(`UserFormData: Email: ${this.userForm.value.email} Password: ${this.userForm.value.password}`);
    // this.authService.register(this.userForm.value.email, this.userForm.value.password, "user");
  }
}
