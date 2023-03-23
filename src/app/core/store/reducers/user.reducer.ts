import { createReducer, on } from "@ngrx/store";
import { addUser } from "../actions/user.actions";
import { userState } from "../stores/user.store";

export const userReducer = createReducer(userState, 
    on(addUser, (state, action) =>({...state, user: action.user})),
)