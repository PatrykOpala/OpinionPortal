import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IOpinionState } from "../../types/interfaces";

export const selectorState = createFeatureSelector<IOpinionState>("opinions");
export const opinionSelector = createSelector(selectorState, (state) => state.opinion);
export const stateSelector = createSelector(selectorState, (state)=> state);