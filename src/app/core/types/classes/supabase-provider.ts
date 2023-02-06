import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { IProvider, SupabaseCredentials } from "../interfaces/iprovider-interface";
import { SupabaseQueryes } from "./database-queryes-class";

export class SupabaseProvider implements IProvider{
    private sClient: SupabaseClient;
    constructor(credentials: SupabaseCredentials){
        this.sClient = createClient(credentials.supabaseUrl, credentials.supabaseKey);
    }
    initProvider(): SupabaseQueryes{
        return new SupabaseQueryes(this.sClient);
    }
}