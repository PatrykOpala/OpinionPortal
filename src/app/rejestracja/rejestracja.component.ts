import { Component, inject, OnInit, } from '@angular/core';
import { FormService } from '../core/services/form/form.service';

@Component({
  selector: 'opn-rejestracja',
  templateUrl: './rejestracja.component.html',
  styleUrls: ['./rejestracja.component.scss'],
})
export class RejestracjaComponent implements OnInit {
  private formService = inject(FormService);
  constructor() {}

  ngOnInit(): void {
  }

  handler(event: string){
    this.formService.setTypeAccount(event);
    console.log(event);
    if(event === "Zwykłe konto"){
      this.formService.formRouter.navigateByUrl("register/default-account");
    }
    if(event === "Marka osobista"){
      this.formService.formRouter.navigateByUrl("register/account-personal-brand");
    }
    if(event === "Firma"){
      this.formService.formRouter.navigateByUrl("register/account-company");
    }
  }
}
