import { createReducer, on } from "@ngrx/store";
import { OpinionStateInterface } from "../../types/interfaces";
import { addOpinion, addUser, changeOpinion, deleteOpinion, getOpinion, initOpinions } from "../actions/opinion.actions";

export const OpinionState: OpinionStateInterface = {
    user_id: "",
    user: "",
    opinion: [],
};

export const opinionReducer = createReducer(
    OpinionState,
    on(initOpinions, (state, action) => ({...state, opinion: action.opinion})),
    on(getOpinion, (state) => ({...state})),
    on(addOpinion, (state, action) => ({...state, opinion: [...state.opinion, action.opinion]})),
    on(changeOpinion, (state, action) => ({...state, opinion: action.opinion})),
    on(deleteOpinion, (state, action) => ({...state, opinion: action.opinion})),
    on(addUser, (state, action) =>({...state, user: action.user, user_id: action.user_id})),
);