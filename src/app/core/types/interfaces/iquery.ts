import { SupabaseClient } from "@supabase/supabase-js";

export interface IQuery{
    pushQuery(provider: SupabaseClient):Promise<unknown>
}