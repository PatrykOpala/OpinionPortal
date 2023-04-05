import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { FormService } from 'src/app/core/services/form/form.service';
import { MIN_LENGHT } from 'src/app/core/types/constants';

@Component({
  selector: 'opn-account-company',
  templateUrl: './account-company.component.html',
  styleUrls: ['./account-company.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountCompanyComponent implements OnInit {
  protected accountCompanyService = inject(AuthService);
  protected accountFormService = inject(FormService);
  protected companyForm: FormGroup

  constructor(private registerFormBuilder: FormBuilder) { 
    this.companyForm = this.registerFormBuilder.group({
      name: new FormControl(''),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.minLength(MIN_LENGHT))
    })
  }

  ngOnInit(): void {}

  signUpCompany(event: Event): void{
    event.preventDefault();
    this.accountCompanyService.register(this.companyForm.value, "company");
  }
}