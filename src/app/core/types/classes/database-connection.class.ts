import { IProvider } from "../interfaces/iprovider-interface";

export class DatabaseConnection{
    constructor(){}

    supabaseConnect(provider: IProvider){
        return provider.initProvider();
    }
}