import { createReducer, on } from "@ngrx/store";
import { addOpinion, getOpinion } from "../actions/opinion.actions";
import { OpinionStateInterface } from "src/shared/utils/ts/interfaces/opinion-state.interface";

export const OpinionState: OpinionStateInterface = {
    user: "",
    opinion: [],
};

export const opinionReducer = createReducer(
    OpinionState,
    on(getOpinion, (state) => ({...state, user: "TestUser"})),
    on(addOpinion, (state, action) => ({...state, user: "TestUser", opinion: [...state.opinion, action.opinion]}))
);