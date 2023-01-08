import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'opn-dialog-add-produkt-and-service',
  templateUrl: './dialog-add-produkt-and-service.component.html',
  styleUrls: ['./dialog-add-produkt-and-service.component.scss']
})
export class DialogAddProduktAndServiceComponent {

  name: string = "";
  description: string = "";
  radioControl = new FormControl('Produkt');

}
