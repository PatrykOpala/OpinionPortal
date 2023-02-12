import {SupabaseClient } from "@supabase/supabase-js";

export interface QueriesResult{
    data: string;
    success: string;
    error: string;
}

export class SupabaseQueryes{
    private rProvider: SupabaseClient;
    private IsError: boolean = false;
    private IsSuccess: boolean = false;

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
    async deleteDataAtDatabase(databaseColumn: string, deleteData: any): Promise<Omit<QueriesResult, "data">>{
        const statusObject: Omit<QueriesResult, "data"> = {success: "", error: ""}
        const {data: deletedData, error} = await this.rProvider.from(databaseColumn).delete().match(deleteData);
        if(deletedData !== undefined && deletedData !== null && error === null){
            statusObject.success = "Deleted data from database";
            this.IsSuccess = true;
            this.IsError = false;
        }else{
            statusObject.error = "Error deleted data";
            this.IsError = true;
            this.IsSuccess = false;
        }
        return statusObject;
    }
    async changeDataAtDatabase(databaseColumn: string, changeData: any): Promise<Omit<QueriesResult, "data">>{
        const statusObject: Omit<QueriesResult, "data"> = {success: "", error: ""}
        const {data: changedData, error} = await this.rProvider.from(databaseColumn).delete().match(changeData);
        if(changedData !== undefined && changedData !== null && error === null){
            statusObject.success = "Changed data at database.";
            this.IsSuccess = true;
            this.IsError = false;
        }else{
            statusObject.error = "Error changed data.";
            this.IsError = true;
            this.IsSuccess = false;
        }
        return statusObject;
    }
}