import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaneContainerComponent } from 'src/app/shared/components/pane-container/pane-container.component';
import { AuthService } from '../core/services/auth/auth.service';

@Component({
  selector: 'opn-rejestracja',
  templateUrl: './rejestracja.component.html',
  styleUrls: ['./rejestracja.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PaneContainerComponent
  ]
})
export class RejestracjaComponent implements OnInit {

  protected registerForm !: FormGroup;
  private registerFormBuilder = inject(FormBuilder); 
  protected authService = inject(AuthService);

  constructor() {
    this.registerForm = this.registerFormBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.minLength(16))
    })
  }

  ngOnInit(): void {
  }

  signUp(): void{
    let registeredError = this.authService.register(this.registerForm.value.email, this.registerForm.value.password);
    registeredError.then(er => {
      if(!er && er === null){
        this.authService.logOutRouter.navigateByUrl("/zalogowano");
      }
    })
  }

}
