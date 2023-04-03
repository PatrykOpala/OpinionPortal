import { Injectable } from '@angular/core';
import { Product } from '../../types/models/product.model'
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AddProductService extends AuthService {

  constructor() { super() }

  SendProductToDatabase(product: Product){
    this.databaseQuery.pushToDatabase('products', product).then(resolve => {
      console.log(resolve);
    });
  }
}
