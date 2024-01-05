import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { AuthService2 } from 'src/app/core/services/auth/auth.service-2';
import { FormService } from 'src/app/core/services/form/form.service';
import { PaneContainerComponent } from 'src/app/core/shared/components/pane-container/pane-container.component';
import { MIN_LENGHT } from 'src/app/core/types/constants';
import { FormRegistersComponent } from '../form-registers/form-registers.component';
import { RejestracjaStepComponent } from '../../components/rejestracja-step/rejestracja-step.component';

@Component({
  selector: 'opn-account-company',
  templateUrl: './account-company.component.html',
  styleUrls: ['./account-company.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [PaneContainerComponent, FormRegistersComponent, ReactiveFormsModule, RejestracjaStepComponent]
})
export class AccountCompanyComponent implements OnInit {
  protected accountCompanyService = inject(AuthService2);
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
