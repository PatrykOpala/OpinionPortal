import { Store } from "@ngrx/store";
import {SupabaseClient } from "@supabase/supabase-js";
import { changeOpinion } from "../../store/actions/opinion.actions";
import { Opinions, OpinionStateInterface } from "../interfaces";

export interface QueriesResult{
    data: any;
    success: string;
    error: string;
}

export class SupabaseQueryes{
    private rProvider: SupabaseClient;

    constructor(supabaseClient: SupabaseClient){
        this.rProvider = supabaseClient;
    }
    async pushToDatabase(databaseColumn: string, pushData: any){
      const {data, error} = await this.rProvider.from(databaseColumn).insert(pushData);
      if(!error && data !== null){
        return true;
      }
      return true;
    }
    async getAllFromDatabase<TypeReturnData>(databaseColumn: string): Promise<TypeReturnData[]>{
        let b = [];
        const {data: returnData, error} = await this.rProvider.from(databaseColumn).select('*');
        if(error !== null && returnData === null){
            // return {error: "true"};
        }
        if(returnData !== null){
            b = returnData
        }
        return b;
    }
    changeDataAtDatabase(databaseColumn: string, updateContent: any, changeData: any, state: any, store: Store<OpinionStateInterface>){
        let bd: Opinions[] = [];
        this.rProvider.from(databaseColumn).update(updateContent).match(changeData).select().then(t => {
            if(t.data !== null && t.data !== undefined){
                if(t.data[0] !== null && t.data[0] !== undefined){
                    bd = state.opinion.reduce((accu: Opinions[], nextOpinion: Opinions): Opinions[] =>{
                        if(nextOpinion.id == Number(changeData.id)){
                            let j = {...nextOpinion};
                            j.content = updateContent.content;
                            accu.push(j);
                            return accu;
                        }
                        accu.push(nextOpinion);
                        return accu;
                    },[]);
                }
                console.log(bd);
                if(bd.length != 0){
                  store.dispatch(changeOpinion({opinion: bd}));
                }
            }
        });
    }
    async deleteDataAtDatabase(databaseColumn: string, deleteData:any): Promise<Omit<QueriesResult, "data">>{
        const statusObject: Omit<QueriesResult, "data"> = {success: "", error: ""}
        this.rProvider.from(databaseColumn).delete().eq('id', deleteData.id).then(b => {
            if(b.status === 204){
                statusObject.success = "Deleted data from database";
            }else{
                statusObject.error = "Error deleted data";
            }
        });
        return statusObject;
    }
}