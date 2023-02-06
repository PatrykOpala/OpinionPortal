import { IProvider } from "../interfaces/iprovider-interface";

export class DatabaseConnection{
    constructor(typeDatabase: string){
        if(typeDatabase === "supabase"){
            return{
                supabaseConnect: (provider: IProvider)=>{
                    return provider.initProvider();
                }
            };
        }
    }
}