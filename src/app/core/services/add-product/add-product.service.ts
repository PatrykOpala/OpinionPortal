import { Injectable } from '@angular/core';
import { Product } from '../../types/models/product.model'
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AddProductService extends AuthService {

  constructor() { super() }

  sendProductToDatabase(product: Product){
    this.databaseQuery.pushToDatabase('products', product).then(resolve => {});
  }

  deleteProductFromDatabase(product: Product){
    this.databaseQuery.deleteDataAtDatabase('produts', product).then(deleteResolve => {});
  }

  getProductsFromDatabase(): Product[]{
    let n: Product[] = [];
    this.databaseQuery.getAllFromDatabase<Product>('products').then(getResolve => {
      n = getResolve;
    });
    return n;
  }
}
