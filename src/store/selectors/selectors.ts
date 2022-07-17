import { createSelector } from "@ngrx/store";
import { OpinionStateInterface } from "src/shared/utils/ts/interfaces/opinion-state.interface";

interface StateInterface{
    posts: OpinionStateInterface;
}

export const selectorState = (state: StateInterface) => state.posts;

export const postSelector = createSelector(
    selectorState,
    (state) => state.opinion
);