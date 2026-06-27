import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { DialogProduktService } from '../../services/dialog/dialog-produkt/dialog-produkt.service';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../types/models/product.model';
//import { DialogAddProduktAndServiceComponent } from '../loginned/components/dialogs/dialog-add-produkt-and-service/dialog-add-produkt-and-service.component';
import { UserStoreAbstract } from '../../types/classes/user-store-abstract.class';
import { ProductListCardComponent } from '../loginned/personal-brand/components/product-list-card/product-list-card.component';
import { TypeProduct } from '../../types/enums';
//import { RouterLink } from '@angular/router';

@Component({
    selector: 'opn-business-dashboard',
    templateUrl: './business-dashboard.component.html',
    styles: `.link{width: 5.7em; padding-top: 1em; margin: 0.5rem; text-align: center; font-size: 0.875rem; cursor: pointer; border-radius: 0.5rem;}
    .link:hover{background-color: rgba(13, 175, 13, 0.45);}`,
    imports: [
        /*RouterLink,*/
        ProductListCardComponent
    ]
})
export class BusinessDashboardComponent extends UserStoreAbstract implements OnInit{
  protected dialogProduktService = inject(DialogProduktService);
  protected authService = inject(AuthService);
  protected productService = inject(ProductService);
  protected filteredProduct: Product[] = [
    {
      id: 2,
      name: "dupa1",
      type_product: TypeProduct.PRODUCT,
      description: "opis 1",
      user_id: "xxxx-xxxxx-xxxx-xxxx"
    }, {
      id: 4,
      name: "dupa2",
      type_product: TypeProduct.PRODUCT,
      description: "opis 2",
      user_id: "xxxx-xxxxx-xxxx-xxxx"
    },
  ];

  constructor(){
    super()
  }
  ngOnInit(): void {
    // this.productService.getProductsFromDatabase();
    // this.productService.product.subscribe((products)=>{
    //   if(products.length > 0){
    //     this.filteredProduct = products.filter((product) => {
    //       return product.user_id === JSON.parse(localStorage.getItem("nsdjlnsf") as string).user.user_uuid
    //     });    
    //   }
    // });
  }

  openProduktServiceDialog(){
    // this.matDialog.open(DialogAddProduktAndServiceComponent);
  }

  deleteProductFromDatabasee(getId: number){
    this.productService.deleteProductFromDatabase(this.filteredProduct.filter(x => x.id === getId)[0]);
  }
}
