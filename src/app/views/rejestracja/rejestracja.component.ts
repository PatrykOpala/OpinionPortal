import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'opn-rejestracja',
  templateUrl: './rejestracja.component.html',
  styleUrls: ['./rejestracja.component.scss']
})
export class RejestracjaComponent implements OnInit {

  protected registerForm !: FormGroup;

  constructor(private route: Router, private registerFormBuilder: FormBuilder, protected authService: AuthService) { 
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
        this.route.navigateByUrl("/zalogowano");
      }
    })
  }

}
