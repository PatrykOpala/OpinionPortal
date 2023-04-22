import { Store } from "@ngrx/store";
import {SupabaseClient } from "@supabase/supabase-js";
import { changeOpinion } from "../../store/actions/opinion.actions";
import { Opinions, IOpinionState } from "../interfaces";
import { Product } from "../models/product.model";

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
      const {data, error} = await this.rProvider.from(databaseColumn)
      .insert(pushData).select();
      if(!error && data !== null){
        return data[0];
      }
      return false;
    }
    pushProductToDatabase(databaseColumn: string, pushData: any): Promise<any>{
        return new Promise(async (resolve, reject)=>{
            const {data, status, error} = await this.rProvider.from(databaseColumn)
            .insert(pushData).select();
            if(status === 201){
                if(data !== null){
                    return resolve(data[0]);
                }
            }
            if(error){
                return reject(
                    "Dodawanie Produktu / Usługi do bazy danych nie powiodło się."
                );
            }
        });
    }
    async getAllFromDatabase<TypeReturnData>(databaseColumn: string): 
        Promise<TypeReturnData[]>{
        let b = [];
        const {data: returnData} = await this.rProvider.from(databaseColumn).select('*');
        if(returnData !== null){
            b = returnData
        }
        return b;
    }
    getAllProductsFromDatabase(databaseColumn: string): 
        Promise<Product[]>{
            return new Promise(async (resolve, reject)=>{
                let b = [];
                const {data: returnData, status, error} = await this.rProvider
                .from(databaseColumn)
                .select('*');
                if(status === 200){
                    if(returnData !== null){
                        b = returnData
                    }
                    return resolve(b);
                }
                if(error){
                    return reject("Pobieraie Produktów / Usług nie powiodło się.");
                }
            });
        
    }
    changeDataAtDatabase(databaseColumn: string, updateContent: any, changeData: any, 
        state: any, store: Store<IOpinionState>){
        let bd: Opinions[] = [];
        this.rProvider.from(databaseColumn).update(updateContent).match(changeData)
        .select().then(t => {
            if(t.data !== null && t.data !== undefined){
                if(t.data[0] !== null && t.data[0] !== undefined){
                    bd = state.opinion.reduce((accu: Opinions[], nextOpinion: Opinions):
                     Opinions[] =>{
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
                if(bd.length != 0){
                  store.dispatch(changeOpinion({opinion: bd}));
                }
            }
        });
    }
    deleteDataAtDatabase(databaseColumn: string, deleteData:any): 
    Promise<Omit<QueriesResult, "data">>{
        return new Promise((resolve, reject)=>{
            const lo: Omit<QueriesResult, "data"> = {success: "", error: ""};
            this.rProvider.from(databaseColumn).delete().eq('id', deleteData.id)
            .select().then(nbzb => {
                if(nbzb.status === 200){
                    lo.success = "Usuwanie zakończyło się.";
                    resolve(lo);
                }
                if(nbzb.error){
                    lo.error = "Usuwanie niepowiodło się.";
                    reject(lo);
                }
            });
        });
    }

    deleteProductAtDatabase(databaseColumn: string, deleteData:any): Promise<number>{
        return new Promise(async (resolve, reject)=>{
          const {data, status, error} = await this.rProvider.from(databaseColumn)
          .delete().eq('id', deleteData.id).select();
            if(status === 200){
                if(data !== null){
                    resolve(data[0].id);
                }
            }
            if(error){
                reject("Usuwanie niepowiodło się.");
            }
        });
    }
}