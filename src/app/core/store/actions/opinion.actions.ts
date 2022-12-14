import { createAction, props } from "@ngrx/store";
import { Opinions } from "../../types/interfaces";

export const addOpinion = createAction('[OpinionsService] add', props<{opinion: Opinions}>());
export const addUser = createAction("[AuthService] addUser", props<{user: string}>());
export const getOpinion = createAction('[OpinionsService] get');
export const deleteOpinion = createAction('[OpinionsService] delete', props<{opinion: Array<Opinions>}>());
export const changeOpinion = createAction('[OpinionService] change', props<{opinion: Array<Opinions>}>());