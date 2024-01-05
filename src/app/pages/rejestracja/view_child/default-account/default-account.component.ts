import { Component, ElementRef, inject, OnInit, ViewChild,} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService2 } from 'src/app/core/services/auth/auth.service-2';
import { FormService } from 'src/app/core/services/form/form.service';
import { PaneContainerComponent } from 'src/app/core/shared/components/pane-container/pane-container.component';
import { MIN_LENGHT } from 'src/app/core/types/constants';
import { FormRegistersComponent } from '../form-registers/form-registers.component';
import { RejestracjaStepComponent } from '../../components/rejestracja-step/rejestracja-step.component';

@Component({
  selector: 'opn-default-account',
  templateUrl: './default-account.component.html',
  styleUrls: ['./default-account.component.scss'],
  standalone: true,
  imports: [PaneContainerComponent, FormRegistersComponent, ReactiveFormsModule, RejestracjaStepComponent]
})
export class DefaultAccountComponent implements OnInit {

  @ViewChild("summitpropt") summitElement!: ElementRef;

  protected defaultAccountService = inject(FormService);
  public userForm: FormGroup;
  private dafaultAuthService = inject(AuthService2);

  constructor(private registerFormBuilder: FormBuilder) { 
    this.userForm = this.registerFormBuilder.group({
      name: new FormControl(''),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.minLength(MIN_LENGHT))
    });
  }
  
  ngOnInit(): void {}

  signUpUser(): void{
    if(this.userForm.value.email === "" && this.userForm.value.password === ""){
      this.userForm.enable();
      return;
    }
    this.dafaultAuthService.registerUser(this.userForm.value.name, this.userForm.value.email, this.userForm.value.password);
  }
}
