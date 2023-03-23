import { createFeatureSelector, createSelector } from "@ngrx/store/src/selector";
import { IOpinionState } from "../../types/interfaces";

const opinionSelectorState = createFeatureSelector<IOpinionState>("opinions");
export const opinionSelector = createSelector(opinionSelectorState, (state) => state.opinion);
export const stateSelector = createSelector(opinionSelectorState, (state)=> state);