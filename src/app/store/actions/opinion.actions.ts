import { createAction, props } from "@ngrx/store";
import { Opinions } from "src/shared/utils/ts/interfaces/opinion.interface";

export const addOpinion = createAction('[FormService] add', props<{opinion: Opinions}>());
export const getOpinion = createAction('[FormService] get');
export const deleteOpinion = createAction('[FormService] delete');