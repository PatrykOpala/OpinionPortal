import { createAction, props } from "@ngrx/store";
import { DatabaseUser } from "../../types/types";

export const addUser = createAction('[AuthService] addUser', 
props<{user: DatabaseUser}>());