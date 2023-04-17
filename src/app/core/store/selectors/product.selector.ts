import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IProductState } from "../../types/interfaces";

const opinionSelectorState = createFeatureSelector<IProductState>("products");
export const productSelector = createSelector(opinionSelectorState, (state) => state.product);
export const productStateSelector = createSelector(opinionSelectorState, (state)=> state);