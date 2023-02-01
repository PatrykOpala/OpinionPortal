import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { environment } from "src/environments/environment";
import { IProvider } from "../interfaces/iprovider-interface";
import { DatabaseQueryes } from "./database-queryes-class";

export class SupabaseProvider implements IProvider<SupabaseClient>{
    initProvider(): DatabaseQueryes<SupabaseClient> {
        const supabaseCient = createClient(environment.supabaseUrl, environment.supabaseKey);
        return new DatabaseQueryes<SupabaseClient>(supabaseCient);
    }
}