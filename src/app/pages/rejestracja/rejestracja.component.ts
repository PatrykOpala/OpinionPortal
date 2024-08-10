import { Component, inject, OnInit} from '@angular/core';
import { PaneContainerComponent } from 'src/app/shared/components/pane-container/pane-container.component';
import { RejestracjaStepComponent } from './components/rejestracja-step/rejestracja-step.component';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService2 } from 'src/app/services/auth/auth.service-2';
import { MIN_LENGHT } from 'src/app/types/constants';
import { FormRegistersComponent } from '../../shared/components/form-registers/form-registers.component';
import { FormInputComponent } from 'src/app/shared/components/form-input/form-input.component';
import { MenuBarComponent } from '../../shared/components/menu-bar/menu-bar.component';

@Component({
  selector: 'opn-rejestracja',
  templateUrl: './rejestracja.component.html',
  styleUrls: ['./rejestracja.component.css'],
  standalone: true,
  imports: [PaneContainerComponent, MenuBarComponent, FormRegistersComponent, ReactiveFormsModule, RejestracjaStepComponent, FormInputComponent]
})
export class RejestracjaComponent implements OnInit {
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
      return;
    }
    this.dafaultAuthService.registerUser(this.userForm.value.name, this.userForm.value.email, this.userForm.value.password);
  }
}