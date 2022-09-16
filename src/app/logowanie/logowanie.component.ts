import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaneContainerComponent } from 'src/app/shared/components/pane-container/pane-container.component';
import { AuthService } from '../core/services/auth/auth.service';

@Component({
  selector: 'opn-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PaneContainerComponent
  ]
})
export class LogowanieComponent implements OnInit {

  protected loginForm !: FormGroup;

  constructor(private route: Router, private loginFormBuilder: FormBuilder, private authService: AuthService) { 
    this.loginForm = this.loginFormBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('')
    })
  }

  ngOnInit(): void {}

  onSubmit(): void{
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }
}
