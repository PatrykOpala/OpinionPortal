import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AddProductService } from 'src/app/core/services/add-product/add-product.service';
import { UserStoreService } from 'src/app/core/services/user/user-store.service';
import { TypeProduct } from 'src/app/core/types/enums';
import { Product } from 'src/app/core/types/models/product.model';

@Component({
  selector: 'opn-dialog-add-produkt-and-service',
  templateUrl: './dialog-add-produkt-and-service.component.html',
  styleUrls: ['./dialog-add-produkt-and-service.component.scss']
})
export class DialogAddProduktAndServiceComponent {

  //TODO: Wrócić tutaj.

  private addProductService = inject(AddProductService);
  private userService = inject(UserStoreService);

  name: string = "";
  description: string = "";
  radioControl = new FormControl('produkt');

  confirmAddProduct(){
    const checkProduct = this.radioControl.value === "produkt" ? TypeProduct.PRODUCT : TypeProduct.SERVICE;
    this.addProductService.SendProductToDatabase(new Product(this.name, checkProduct, this.description, this.userService.getUserFromStore().user.user_uuid));
  }

}
