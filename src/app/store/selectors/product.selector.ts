import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "../../types/types";

const opinionSelectorState = createFeatureSelector<ProductState>("products");
export const productSelector = createSelector(opinionSelectorState, (state) => state.products);
export const productStateSelector = createSelector(opinionSelectorState, (state)=> state);