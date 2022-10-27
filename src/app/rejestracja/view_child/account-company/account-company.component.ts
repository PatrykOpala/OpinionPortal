import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from 'src/app/core/services/form/form.service';

@Component({
  selector: 'opn-account-company',
  templateUrl: './account-company.component.html',
  styleUrls: ['./account-company.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountCompanyComponent implements OnInit {
  protected accountCompanyService = inject(FormService);
  protected companyForm: FormGroup

  constructor(private registerFormBuilder: FormBuilder) { 
    this.companyForm = this.registerFormBuilder.group({
      companyName: new FormControl(''),
      companyEmail: new FormControl('', [Validators.email, Validators.required]),
      companyPassword: new FormControl('', Validators.minLength(16))
    })
  }

  ngOnInit(): void {}

  signUpCompany(event: Event): void{
    event.preventDefault();
    console.log(`CompanyFormData: Email: ${this.companyForm.value.companyEmail} Password: ${this.companyForm.value.companyPassword}`);
    // this.authService.register(this.companyForm.value.email, this.companyForm.value.password, "company");
  }
}
