import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { addProducts } from '../../store/actions/product.actions';
import { productSelector } from '../../store/selectors/product.selector';
import { IProductState } from '../../types/interfaces';
import { Product } from '../../types/models/product.model'
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends AuthService {

  private productStore = inject(Store<IProductState>);
  private _product: Product[] = [];

  constructor() { 
    super();
    this.productStore.select(productSelector).subscribe(p => {
      if(p !== undefined){
        this._product = [...p];
      }
    });
  }

  sendProductToDatabase(product: Product){
    this.databaseQuery.pushProductToDatabase('products', product)
    .then(sendProductResolve => {
      let returnProduct = Product.returnProduct(sendProductResolve.id,
         sendProductResolve.name, sendProductResolve.type_product, 
         sendProductResolve.description, sendProductResolve.user_id);
         let sendJ = this._product;
         sendJ.push(returnProduct);
      this.productStore.dispatch(addProducts({products: sendJ}));
    });
  }

  deleteProductFromDatabase(product: Product){
    this.databaseQuery.deleteProductAtDatabase('products', product)
    .then(deleteResolve => {
      let deleteFilterredProducts = this._product.filter(c => c.id !== deleteResolve);
      this.productStore.dispatch(addProducts({products: deleteFilterredProducts}));
    });
  }

  getProductsFromDatabase(): Promise<Product[]>{
    return new Promise((resolve, reject)=>{
      this.databaseQuery.getAllProductsFromDatabase('products').then(getResolve => {
        let j = Product.returnProductArray(getResolve);
        this.productStore.dispatch(addProducts({products: j}));
        return resolve(j);
      });
    });
  }

  get product(): Product[]{
    return this._product;
  }
}
