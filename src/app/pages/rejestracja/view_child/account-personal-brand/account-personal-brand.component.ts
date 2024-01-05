import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { AuthService2 } from 'src/app/core/services/auth/auth.service-2';
import { FormService } from 'src/app/core/services/form/form.service';
import { PaneContainerComponent } from 'src/app/core/shared/components/pane-container/pane-container.component';
import { MIN_LENGHT } from 'src/app/core/types/constants';
import { FormRegistersComponent } from '../form-registers/form-registers.component';
import { RejestracjaStepComponent } from '../../components/rejestracja-step/rejestracja-step.component';

@Component({
  selector: 'opn-account-personal-brand',
  templateUrl: './account-personal-brand.component.html',
  styleUrls: ['./account-personal-brand.component.scss'],
  standalone: true,
  imports: [PaneContainerComponent, FormRegistersComponent, RejestracjaStepComponent, ReactiveFormsModule]
})
export class AccountPersonalBrandComponent implements OnInit {
  protected accountPersonalBrandService = inject(AuthService2);
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
    //this.accountPersonalBrandService.register(this.personalBrandForm.value, "personalBrand");
  }
}
