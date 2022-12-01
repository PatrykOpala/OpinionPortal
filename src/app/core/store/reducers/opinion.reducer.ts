import { createReducer, on } from "@ngrx/store";
import { OpinionStateInterface } from "../../types/interfaces";
import { addOpinion, getOpinion } from "../actions/opinion.actions";

export const OpinionState: OpinionStateInterface = {
    user: "",
    opinion: [],
};

export const opinionReducer = createReducer(
    OpinionState,
    on(getOpinion, (state) => ({...state, user: "TestUser"})),
    on(addOpinion, (state, action) => ({...state, user: "TestUser", opinion: [...state.opinion, action.opinion]}))
);