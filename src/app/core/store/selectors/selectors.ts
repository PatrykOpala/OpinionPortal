import { createSelector } from "@ngrx/store";
import { OpinionStateInterface } from "../../types/typesOpinier";

interface StateInterface{
    posts: OpinionStateInterface;
}

export const selectorState = (state: StateInterface) => state.posts;

export const postSelector = createSelector(
    selectorState,
    (state) => state.opinion
);