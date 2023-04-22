import { createReducer, on } from "@ngrx/store";
import { deleteProduct, addProducts } from "../actions/product.actions";
import { ProductStore } from "../stores/product.store";

export const productReducer = createReducer(
    ProductStore,
    on(addProducts, (state, action) => ({...state, products: action.products})),
    on(deleteProduct, (state, action) => ({...state, opinion: action.opinion})),
);