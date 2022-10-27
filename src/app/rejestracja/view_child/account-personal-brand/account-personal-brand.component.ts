import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/core/services/form/form.service';

@Component({
  selector: 'opn-account-personal-brand',
  templateUrl: './account-personal-brand.component.html',
  styleUrls: ['./account-personal-brand.component.scss']
})
export class AccountPersonalBrandComponent implements OnInit {
  protected accountPersonalBrandService = inject(FormService);
  protected personalBrandForm: FormGroup;
  
  constructor(private registerFormBuilder: FormBuilder) { 
    this.personalBrandForm = this.registerFormBuilder.group({
      personalBrandName: new FormControl(''),
      personalBrandEmail: new FormControl('', [Validators.email, Validators.required]),
      personalBrandPassword: new FormControl('', Validators.minLength(16))
    })
  }

  ngOnInit(): void {}

  signUpPersonalBrand(event: Event): void{
    event.preventDefault();
    console.log(`PersonalBrandFormData: Email: ${this.personalBrandForm.value.personalBrandEmail} Password: ${this.personalBrandForm.value.personalBrandPassword}`);
    // this.authService.register(this.personalBrandForm.value.email, this.personalBrandForm.value.password, "personalBrand");
  }
}
