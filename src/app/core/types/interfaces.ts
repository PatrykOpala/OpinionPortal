import { User, Session } from "@supabase/supabase-js"
import { Product } from "./models/product.model"

export interface changeEvent{
    id: string 
    header: string
    content: string
}

export interface LogOutUser{
    signOut(): void
}

export interface ChangeState{
    formArm: string,
    headOpinion: string,
}

export interface Opinions {
    user_uuid: string,
    user_name: string,
    id?: number,
    created_at?: string,
    header: string,
    content: string
}

export interface IOpinionState{
    opinion: Opinions[];
}

export interface IProductState{
    product: Product[];
}

export interface Category{
    CategoryID: number;
    CategoryName: string;
}

export interface SupabaseUser{
    user: User,
    session: Session
}
