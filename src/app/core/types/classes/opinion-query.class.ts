import { SupabaseClient } from "@supabase/supabase-js";
import { IQuery } from "../interfaces/iquery";

export class OpinionQuery implements IQuery{

    private dbColumn: string = "";
    private pshData: any = null;

    constructor(databaseColumn: string, pushData: any){
        this.dbColumn = databaseColumn;
        this.pshData = pushData;
    }

    pushQuery(provider: SupabaseClient): Promise<unknown> {
        return new Promise(async (resolve, reject)=>{
            if(this.dbColumn === "") return reject([]);
            if(this.pshData === null) return reject([]);
            const {data, status, error} = await provider.from(this.dbColumn)
            .insert(this.pshData);
            console.log(status);
            if(status === 201){
                if(data !== null){
                    return resolve(data[0]);
                }
            }
            if(error){
                return reject("Problem z dodaniem opinii.")
            }
            return reject([]);
        });
    }
}