import { createFeatureSelector, createSelector } from "@ngrx/store/src/selector";
import { OpinionState } from "../../types/types";

const opinionSelectorState = createFeatureSelector<OpinionState>("opinions");
export const opinionSelector = createSelector(opinionSelectorState, (state) => state.opinion);
export const stateSelector = createSelector(opinionSelectorState, (state)=> state);