import { createFeatureSelector, createSelector } from "@ngrx/store";
import { OpinionStateInterface } from "../../types/interfaces";

export const selectorState = createFeatureSelector<OpinionStateInterface>("posts");
export const opinionSelector = createSelector(selectorState, (state) => state.opinion);