import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from 'src/app/core/services/product/product.service';
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
  protected productService = inject(ProductService);

  constructor(public matDialog: MatDialog){
    super()
  }
  ngOnInit(): void {
    this.productService.getProductsFromDatabase();
  }

  openProduktServiceDialog(){
    this.matDialog.open(DialogAddProduktAndServiceComponent);
  }

  deleteProductFromDatabasee(getId: number){
    this.productService.deleteProductFromDatabase(this.productService.
      product.filter(x => x.id === getId)[0]);
  }
}
