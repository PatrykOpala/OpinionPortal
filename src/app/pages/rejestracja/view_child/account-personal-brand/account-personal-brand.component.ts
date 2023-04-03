import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { FormService } from 'src/app/core/services/form/form.service';
import { MIN_LENGHT } from 'src/app/core/types/constants';

@Component({
  selector: 'opn-account-personal-brand',
  templateUrl: './account-personal-brand.component.html',
  styleUrls: ['./account-personal-brand.component.scss']
})
export class AccountPersonalBrandComponent implements OnInit {
  protected accountPersonalBrandService = inject(AuthService);
  protected accountPersonalBrandFormService = inject(FormService);
  protected personalBrandForm: FormGroup;
  
  constructor(private registerFormBuilder: FormBuilder) { 
    this.personalBrandForm = this.registerFormBuilder.group({
      name: new FormControl(''),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.minLength(MIN_LENGHT))
    })
  }

  ngOnInit(): void {}

  signUpPersonalBrand(event: Event): void{
    event.preventDefault();
    this.accountPersonalBrandService.register(this.personalBrandForm.value, "personalBrand");
  }
}
