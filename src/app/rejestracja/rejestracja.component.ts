import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PaneContainerComponent } from 'src/app/shared/components/pane-container/pane-container.component';
import { AuthService } from '../core/services/auth/auth.service';
import { ChooseComponent } from '../shared/components/choose/choose.component';

@Component({
  selector: 'opn-rejestracja',
  templateUrl: './rejestracja.component.html',
  styleUrls: ['./rejestracja.component.scss'],
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    PaneContainerComponent, ChooseComponent
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
    this.authService.register(this.registerForm.value.email, this.registerForm.value.password, "user");
  }
}
