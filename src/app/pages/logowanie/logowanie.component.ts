import { Component, inject, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService2 } from 'src/app/services/auth/auth.service-2';
import { PaneContainerComponent } from 'src/app/shared/components/pane-container/pane-container.component';
import { FormRegistersComponent } from '../../shared/components/form-registers/form-registers.component';
import { FormInputComponent } from 'src/app/shared/components/form-input/form-input.component';
import { MenuBarComponent } from '../../shared/components/menu-bar/menu-bar.component';

@Component({
    selector: 'opn-logowanie',
    templateUrl: './logowanie.component.html',
    styles: [`input.ng-untouched{border-bottom: 1px solid #cccccc;}`],
    imports: [PaneContainerComponent, MenuBarComponent, FormRegistersComponent, FormInputComponent, ReactiveFormsModule, FormsModule]
})
export class LogowanieComponent implements OnInit{

  protected loginForm !: FormGroup;
  public progress: boolean = false;
  public disabled: boolean = false;

  private loginFormBuilder = inject(FormBuilder);
  private authService = inject(AuthService2);

  constructor() {
    this.loginForm = this.loginFormBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {}

  onSubmit(): void{
    this.loginForm.disable();
    this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password);
  }
}
