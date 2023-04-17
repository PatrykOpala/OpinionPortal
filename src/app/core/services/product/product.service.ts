import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addProduct } from '../../store/actions/product.actions';
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
    this.productStore.select(productSelector).subscribe(p => this._product = p);
  }

  sendProductToDatabase(product: Product){
    this.databaseQuery.pushToDatabase('products', product).then(resolve => {});
  }

  deleteProductFromDatabase(product: Product){
    this.databaseQuery.deleteProductAtDatabase('products', product).then(deleteResolve => {
      let deleteFilterredProducts = this.product.filter(c => c.id !== deleteResolve);
      this.productStore.dispatch(addProduct({product: deleteFilterredProducts}));
    });
  }

  getProductsFromDatabase(): void{
    this.databaseQuery.getAllFromDatabase<Product>('products').then(getResolve => {
      this.productStore.dispatch(addProduct({product: getResolve}));
    });
  }

  get product(): Product[]{
    return this._product;
  }
}
