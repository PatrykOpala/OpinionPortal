import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { addProducts } from '../../store/actions/product.actions';
import { productSelector } from '../../store/selectors/product.selector';
import { ProductState } from '../../types/types';
import { Product, returnProductArray } from '../../types/models/product.model'
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends AuthService {

  private productStore = inject(Store<ProductState>);
  private _product$: BehaviorSubject<Product[]> = new BehaviorSubject([] as Product[]);
  // private _product: Product[] = [];

  constructor() { 
    super();
    this.productStore.select(productSelector).subscribe(p => {
      if(p !== undefined){
        // this._product = [...p];
        this._product$.next([...p]);
      }
    });
  }

  sendProductToDatabase(product: Product){
    this.databaseQuery.pushProductToDatabase('products', product)
    .then(sendProductResolve => {
      let product: Product = {id: sendProductResolve.id, name: sendProductResolve.name, type_product: sendProductResolve.type_product,
        description: sendProductResolve.description, user_id: sendProductResolve.user_id};
      // let sendJ = this._product;
      // sendJ.push(returnProduct);
      // this.productStore.dispatch(addProducts({products: sendJ}));
    });
  }

  deleteProductFromDatabase(product: Product){
    this.databaseQuery.deleteProductAtDatabase('products', product)
    .then(deleteResolve => {
      // let deleteFilterredProducts = this._product.filter(c => c.id !== deleteResolve);
      // this.productStore.dispatch(addProducts({products: deleteFilterredProducts}));
    });
  }

  getProductsFromDatabase(): Promise<Product[]>{
    return new Promise((resolve, reject)=>{
      this.databaseQuery.getAllProductsFromDatabase('products').then(getResolve => {
        let j = returnProductArray(getResolve);
        this.productStore.dispatch(addProducts({products: j}));
        return resolve(j);
      });
    });
  }

  get product(): Observable<Product[]>{
    return this._product$.asObservable();
  }
}
