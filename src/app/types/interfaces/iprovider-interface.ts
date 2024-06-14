import { SupabaseQueryes } from "../classes/database-queryes-class";
import { SupabaseQueryesV2 } from "../classes/database-queryes-class-v2";

export interface IProvider{
    initProvider(): SupabaseQueryesV2;
}

export type SupabaseCredentials = {
    supabaseUrl: string;
    supabaseKey: string;
}