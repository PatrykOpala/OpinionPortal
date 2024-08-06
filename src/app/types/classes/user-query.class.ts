import { SupabaseClient } from "@supabase/supabase-js";
import { IQuery } from "../interfaces/iquery";
import { DatabaseUser } from "../types";
import { QueryResult } from "../enums";

export class UserQuery implements IQuery{

    private dbColumn: string = "";
    private pshData: any = null;

    constructor(databaseColumn: string, pushData: any){
        this.dbColumn = databaseColumn;
        this.pshData = pushData;
    }

    pushQuery(provider: SupabaseClient): Promise<QueryResult>{
        return new Promise(async (resolve, reject)=>{
            if(this.dbColumn === "") return reject([]);
            if(this.pshData === null) return reject([]);
            const {status, error} = await provider.from(this.dbColumn)
            .insert(this.transformer(this.pshData));
            if(status === 201){
                resolve(QueryResult.SUCCESS);
            }
            if(error){
                console.log(error);
                resolve(QueryResult.FAILED);
                // "Problem z dodaniem użytkownika."
            }
        });
    }

    private transformer(objectToTransform: DatabaseUser):unknown{
        let cv = objectToTransform;
        delete cv.isEmpty;
        return cv;
    }
}