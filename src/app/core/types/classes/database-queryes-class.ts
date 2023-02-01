import { PostgrestError, SupabaseClient } from "@supabase/supabase-js";

export class DatabaseQueryes<TypeProvider>{
    private rProvider: TypeProvider extends SupabaseClient ? any : any;
    private IsError: boolean = false;
    private IsSuccess: boolean = false;

    constructor(resultProvider: TypeProvider){
        this.rProvider = resultProvider;
    }
    pushToDatabase<TypePushData>(databaseColumn: string, pushData: TypePushData): boolean{
      this.rProvider.from(databaseColumn).insert(pushData).then((returnData: any) => returnData ? this.IsSuccess = true : this.IsSuccess = false)
      .catch((error: PostgrestError) => error ? this.IsError = true : this.IsError = false);
      if(this.IsError && this.IsSuccess === false){
        return false;
      }
      return true;
    }
    getAllFromDatabase<TypeReturnData>(databaseColumn: string): Array<TypeReturnData> | {error: string}{
        let datas: Array<TypeReturnData> = [];
        this.rProvider.from(databaseColumn).select('*').then((returnData: any) => {if(returnData) {datas = returnData} else{this.IsSuccess = false; this.IsError = true;}})
        .catch((error: PostgrestError) => error ? this.IsError = true : this.IsError = false);
        // this.OpinionStore.dispatch(initOpinions({opinion: data as any}));
        if(this.IsError && this.IsSuccess === false){
            return {error: "true"};
        }
        return datas;
    }
    getDataFromDatabase<TypeReturnData>(databaseColumn: string, selectData: string): Array<TypeReturnData> | {error: string}{
        let datas: Array<TypeReturnData> = [];
        this.rProvider.from(databaseColumn).select(selectData).then((returnData: any) => {if(returnData) {datas = returnData} else{this.IsSuccess = false; this.IsError = true;}})
        .catch((error: PostgrestError) => error ? this.IsError = true : this.IsError = false);
        if(this.IsError && this.IsSuccess === false){
            return {error: "true"};
        }
        return datas;
    }
    deleteDataAtDatabase<TypeDeleteData>(databaseColumn: string, deleteData: TypeDeleteData): {success: string, error: string}{
        const statusObject = {success: "", error: ""}
        this.rProvider.from(databaseColumn).delete().match(deleteData).then((deletedData: any) => {
            if(deletedData) {
                statusObject.success = "Deleted data from database";
                this.IsSuccess = true;
            }
        }).catch((error: PostgrestError) =>{
            if(error){
                statusObject.error = "Error deleted data";
                this.IsError = true;
            }
        });
        return statusObject;
        // this.DeleteOpinionFromState(Number(changeData.id));
    }
    changeDataAtDatabase<TypeChangeData>(databaseColumn: string, changeData: TypeChangeData): {success: string, error: string} {
        const statusObject = {success: "", error: ""}
        this.rProvider.from(databaseColumn).delete().match(changeData).then((changedData: any) => {
            if(changedData) {
                statusObject.success = "Deleted data from database";
                this.IsSuccess = true;
            }
        }).catch((error: PostgrestError) =>{
            if(error){
                statusObject.error = "Error deleted data";
                this.IsError = true;
            }
        });
        return statusObject;
    }
}