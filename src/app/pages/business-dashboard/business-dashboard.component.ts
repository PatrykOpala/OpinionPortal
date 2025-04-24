import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DialogProduktService } from 'src/app/services/dialog/dialog-produkt/dialog-produkt.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/types/models/product.model';
import { DialogAddProduktAndServiceComponent } from '../loginned/components/dialogs/dialog-add-produkt-and-service/dialog-add-produkt-and-service.component';
import { UserStoreAbstract } from 'src/app/types/classes/user-store-abstract.class';
import { ProductListCardComponent } from '../loginned/personal-brand/components/product-list-card/product-list-card.component';
import { TypeProduct } from 'src/app/types/enums';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'opn-business-dashboard',
    templateUrl: './business-dashboard.component.html',
    styleUrls: ['./business-dashboard.component.scss'],
    imports: [
        RouterLink,
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
