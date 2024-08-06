import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserStore } from "../../types/types";

const userSelectorState = createFeatureSelector<UserStore>("users");

export const userSelector = createSelector(userSelectorState, 
    (state)=> state.user);