import { createReducer, on } from "@ngrx/store";
import { addOpinion, changeOpinion, deleteOpinion, getOpinion, initOpinions } from "../actions/opinion.actions";
import { OpinionState } from "../stores/opinion.store";

export const opinionReducer = createReducer(
    OpinionState,
    on(initOpinions, (state, action) => ({...state, opinion: action.opinion})),
    on(addOpinion, (state, action) => ({...state, opinion: [...state.opinion, action.opinion]})),
    on(getOpinion, (state) => ({...state})),
    on(deleteOpinion, (state, action) => ({...state, opinion: action.opinion})),
    on(changeOpinion, (state, action) => ({...state, opinion: action.opinion})),
);