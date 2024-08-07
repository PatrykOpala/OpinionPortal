import { createAction, props } from "@ngrx/store";
import { Opinions } from "../../types/models/opinion.model";

export const initOpinions = createAction('[OpinionsService] init', 
props<{opinion: Array<Opinions> | Array<any>}>());
export const addOpinion = createAction('[OpinionsService] add',
 props<{opinion: Opinions}>());
export const getOpinion = createAction('[OpinionsService] get');
export const deleteOpinion = createAction('[OpinionsService] delete',
 props<{opinion: Array<Opinions>}>());
export const changeOpinion = createAction('[OpinionService] change',
props<{opinion: Array<Opinions>}>());