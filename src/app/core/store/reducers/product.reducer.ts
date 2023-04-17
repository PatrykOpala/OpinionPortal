import { createReducer, on } from "@ngrx/store";
import { addProduct, getProduct, deleteProduct } from "../actions/product.actions";
import { ProductStore } from "../stores/product.store";

export const productReducer = createReducer(
    ProductStore,
    on(addProduct, (state, action) => ({...state, product: action.product})),
    on(deleteProduct, (state, action) => ({...state, opinion: action.opinion})),
);