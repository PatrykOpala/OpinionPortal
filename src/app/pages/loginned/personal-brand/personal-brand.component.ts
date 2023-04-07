import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductService } from 'src/app/core/services/add-product/add-product.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DialogProduktService } from 'src/app/core/services/dialog/dialog-produkt/dialog-produkt.service';
import { UserStoreAbstract } from 'src/app/core/types/classes/user-store-abstract.class';
import { DialogAddProduktAndServiceComponent } from '../components/dialogs/dialog-add-produkt-and-service/dialog-add-produkt-and-service.component';

@Component({
  selector: 'opn-personal-brand',
  templateUrl: './personal-brand.component.html',
  styleUrls: ['./personal-brand.component.scss']
})
export class PersonalBrandComponent extends UserStoreAbstract implements OnInit {

  protected dialogProduktService = inject(DialogProduktService);
  protected authService = inject(AuthService);
  protected addProductService = inject(AddProductService);

  constructor(public matDialog: MatDialog){
    super()
    this.addProductService.getProductsFromDatabase();
  }
  ngOnInit(): void {
    
  }

  openProduktServiceDialog(){
    this.matDialog.open(DialogAddProduktAndServiceComponent);
  }
}
