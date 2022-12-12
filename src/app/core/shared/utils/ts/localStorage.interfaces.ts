import { Opinions } from "src/app/core/types/interfaces";

export interface ILocalStorage{
    GetOpinionFromLocalStorage(localFrom: boolean): Array<Opinions> | null;
    FilterOpinionDataFromLocalStorage(id: number): void;
    AddOpinionsToLocalStorage<TypeData>(key: string, data: TypeData): void;
}