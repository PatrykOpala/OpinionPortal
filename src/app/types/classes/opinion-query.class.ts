import { SupabaseClient } from "@supabase/supabase-js";
import { IQuery } from "../interfaces/iquery";
import { inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { addOpinion } from "../../store/actions/opinion.actions";
import { OpinionState, Opinions } from "../types";
import { QueryResult } from "../enums";

export class OpinionQuery implements IQuery{
    private dbColumn: string = "";
    private pshData: any = null;
    private OpinionStore = inject(Store<OpinionState>);

    constructor(databaseColumn: string, pushData: any){
        this.dbColumn = databaseColumn;
        this.pshData = pushData;
    }

    pushQuery(provider: SupabaseClient): Promise<QueryResult> {
        return new Promise(async (resolve, reject)=>{
            if(this.dbColumn === "") return reject([]);
            if(this.pshData === null) return reject([]);
            const {data, status, error} = await provider.from(this.dbColumn)
            .insert(this.pshData);
            console.log(status);
            if(status === 201){
                if(data !== null){
                    if(data[0] !== undefined){
                        this.OpinionStore.dispatch(addOpinion({opinion: data[0] as Opinions}));
                        resolve(QueryResult.SUCCESS);
                    }
                }
            }
            if(error){
                // "Problem z dodaniem opinii."
                resolve(QueryResult.FAILED);
            }
        });
    }
}