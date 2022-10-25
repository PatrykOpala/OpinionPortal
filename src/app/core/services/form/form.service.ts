import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  typeAccount: string = "";

  setTypeAccount(type: string): void {
    this.typeAccount = type;
    console.log(this.typeAccount);
  }

}
