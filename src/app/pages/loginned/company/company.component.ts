import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DialogProduktService } from 'src/app/core/services/dialog/dialog-produkt/dialog-produkt.service';
import { ProductService } from 'src/app/core/services/product/product.service';
import { UserStoreAbstract } from 'src/app/core/types/classes/user-store-abstract.class';
import { DialogAddProduktAndServiceComponent } from '../components/dialogs/dialog-add-produkt-and-service/dialog-add-produkt-and-service.component';
import { Product } from 'src/app/core/types/models/product.model';
import { ProductListCardComponent } from '../personal-brand/components/product-list-card/product-list-card.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'opn-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss'],
    imports: [
        ProductListCardComponent,
        NgFor,
    ]
})
export class CompanyComponent extends UserStoreAbstract implements OnInit{
  protected dialogProduktService = inject(DialogProduktService);
  protected authService = inject(AuthService);
  protected productService = inject(ProductService);
  protected filteredProduct: Product[] = [];

  constructor(public matDialog: MatDialog){
    super()
  }
  ngOnInit(): void {
    this.productService.getProductsFromDatabase();
    this.productService.product.subscribe((products)=>{
      if(products.length > 0){
        this.filteredProduct = products.filter((product) => {
          return product.user_id === JSON.parse(localStorage.getItem("nsdjlnsf") as string).user.user_uuid
        });    
      }
    });
  }

  openProduktServiceDialog(){
    this.matDialog.open(DialogAddProduktAndServiceComponent);
  }

  deleteProductFromDatabasee(getId: number){
    this.productService.deleteProductFromDatabase(this.filteredProduct.filter(x => x.id === getId)[0]);
  }
}
