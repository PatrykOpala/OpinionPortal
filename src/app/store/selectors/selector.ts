import { createFeatureSelector, createSelector } from "@ngrx/store";
import { OpinionState } from "../../types/types";

export const selectorState = createFeatureSelector<OpinionState>("opinions");
export const opinionSelector = createSelector(selectorState, (state) => state.opinion);
export const stateSelector = createSelector(selectorState, (state)=> state);