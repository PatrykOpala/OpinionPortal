import { createAction, props } from "@ngrx/store";
import { Product } from "../../types/models/product.model";

export const addProduct = createAction('[ProductService] add', 
props<{product: Omit<Product, 'setId'>}>());
export const addProducts = createAction('[ProductService] add',
 props<{products: Product[]}>())
export const getProduct = createAction('[ProductService] get');
export const deleteProduct = createAction('[ProductService] delete',
 props<{opinion: Array<Product>}>());