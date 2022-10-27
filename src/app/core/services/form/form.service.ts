import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private typeAccount: string = "";
  public formRouter = inject(Router);

  protected authService = inject(AuthService);

  constructor(){
    if(this.getTypeAccount() === ""){
      this.formRouter.navigateByUrl('/register');
    }
  }
  setTypeAccount(type: string): void {
    this.typeAccount = type;
  }

  getTypeAccount(): string{
    return this.typeAccount;
  }
}
