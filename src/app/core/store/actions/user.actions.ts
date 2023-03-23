import { createAction, props } from "@ngrx/store";
import { IDataBaseUser } from "../../types/interfaces/idatabase-user.interface";

export const addUser = createAction('[AuthService] addUser', props<{user: IDataBaseUser}>());