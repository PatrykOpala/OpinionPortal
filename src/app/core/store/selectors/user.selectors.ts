import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUserStore } from "../../types/interfaces/user-store.interface";

const userSelectorState = createFeatureSelector<IUserStore>("users");

export const userSelector = createSelector(userSelectorState, (state)=> state.user);