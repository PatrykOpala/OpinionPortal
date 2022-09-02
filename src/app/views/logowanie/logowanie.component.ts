import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'opn-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.scss']
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
    let loginUser = this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
    loginUser.then(({error}) => {
      if(!error && error === null){
        this.route.navigateByUrl("/zalogowano");
      }
    })
  }
}
