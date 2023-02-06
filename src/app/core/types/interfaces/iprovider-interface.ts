import { SupabaseQueryes } from "../classes/database-queryes-class";

export interface IProvider{
    initProvider(): SupabaseQueryes;
}

export interface SupabaseCredentials{
    supabaseUrl: string;
    supabaseKey: string;
}