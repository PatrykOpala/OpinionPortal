import { Opinions } from "../interfaces";

export interface IOpinionStoreService{
    addOpinionToStore(v: Opinions): void;
    deleteOpinionFromStore(id: number): void;
}