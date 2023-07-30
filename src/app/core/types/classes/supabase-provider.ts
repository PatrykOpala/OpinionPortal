import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { IProvider, SupabaseCredentials } from "../interfaces/iprovider-interface";
import { SupabaseQueryes } from "./database-queryes-class";
import { SupabaseQueryesV2 } from "./database-queryes-class-v2";

export class SupabaseProvider implements IProvider{
    public sClient: SupabaseClient;
    constructor(credentials: SupabaseCredentials){
        this.sClient = createClient(credentials.supabaseUrl, credentials.supabaseKey);
    }
    initProvider(): SupabaseQueryesV2{
        return new SupabaseQueryesV2(this.sClient);
    }
}