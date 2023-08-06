import { SupabaseClient } from "@supabase/supabase-js";
import { QueryResult } from "../enums";

export interface IQuery{
    pushQuery(provider: SupabaseClient):Promise<QueryResult>
}