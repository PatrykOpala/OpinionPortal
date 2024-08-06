import { Component, inject, OnDestroy} from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';
import { UserStoreService } from 'src/app/services/user/user-store.service';
import { LOCAL_STORAGE_KEYS } from 'src/app/types/constants';
import { TypeProduct } from 'src/app/types/enums';
import { Product } from 'src/app/types/models/product.model';

@Component({
  selector: 'opn-dialog-add-produkt-and-service',
  templateUrl: './dialog-add-produkt-and-service.component.html',
  styleUrls: ['./dialog-add-produkt-and-service.component.scss'],
  standalone: true,
})
export class DialogAddProduktAndServiceComponent implements OnDestroy {
  private productService = inject(ProductService);
  private userService = inject(UserStoreService);
  name: string = "";
  description: string = "";
  radioControl = new FormControl('');
  userSubscription: Subscription | undefined;
  
  confirmAddProduct(){
    this.userSubscription = this.userService.getUserFromStore()
    .pipe(map((u) => u.user_uuid))
    .subscribe((ur) => {
      let h = "";
      if(ur !== undefined){
        h = ur;
      }else{
        h = JSON.parse(window.localStorage
          .getItem(LOCAL_STORAGE_KEYS.nsdjlnsf) as string).user.user_uuid;
      }
      const checkProduct = this.radioControl.value === "produkt" ? 
      TypeProduct.PRODUCT : TypeProduct.SERVICE;
      this.productService.sendProductToDatabase({name: this.name, type_product: checkProduct, description: this.description, user_id: h});
    })
    }
    ngOnDestroy(): void {
      if(this.userSubscription !== undefined){
        this.userSubscription.unsubscribe();
      }
    }
  }
  