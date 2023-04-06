import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DialogProduktService } from 'src/app/core/services/dialog/dialog-produkt/dialog-produkt.service';
import { DialogAddProduktAndServiceComponent } from '../components/dialogs/dialog-add-produkt-and-service/dialog-add-produkt-and-service.component';

@Component({
  selector: 'opn-personal-brand',
  templateUrl: './personal-brand.component.html',
  styleUrls: ['./personal-brand.component.scss']
})
export class PersonalBrandComponent {

  protected dialogProduktService = inject(DialogProduktService);
  protected authService = inject(AuthService);

  constructor(public matDialog: MatDialog){}

  openProduktServiceDialog(){
    this.matDialog.open(DialogAddProduktAndServiceComponent);
  }
}
