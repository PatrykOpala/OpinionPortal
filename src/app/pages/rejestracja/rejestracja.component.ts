import { Component, inject, OnInit, } from '@angular/core';
import { FormService } from '../../core/services/form/form.service';
import { PaneContainerComponent } from 'src/app/core/shared/components/pane-container/pane-container.component';
import { RejestracjaStepComponent } from './components/rejestracja-step/rejestracja-step.component';
import { ChooseComponent } from 'src/app/core/shared/components/choose/choose.componnet';

@Component({
  selector: 'opn-rejestracja',
  templateUrl: './rejestracja.component.html',
  styleUrls: ['./rejestracja.component.scss'],
  standalone: true,
  imports: [PaneContainerComponent, RejestracjaStepComponent, ChooseComponent],
})
export class RejestracjaComponent implements OnInit {
  private formService = inject(FormService);
  constructor() {}

  ngOnInit(): void {
  }

  handler(event: string){
    this.formService.setTypeAccount(event);
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
