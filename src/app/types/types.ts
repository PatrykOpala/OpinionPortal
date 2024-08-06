import { User, Session } from "@supabase/supabase-js"
import { Product } from "./models/product.model"
import { Opinions } from "./models/opinion.model";

export type DatabaseUser = {
    [x: string]: any;
    id?: number,
    email: string,
    name: string,
    type: string,
    user_uuid: string,
    delete_user: boolean,
    isEmpty?: boolean
}

export type UserStore = {
    user: DatabaseUser;
}

export type changeEvent = {
    id: string 
    header: string
    content: string
}

export type ChangeState = {
    formArm: string,
    headOpinion: string,
}

export type OpinionState = {
    opinion: Opinions[];
}

export type ProductState = {
    products: Product[];
}

export type Category = {
    CategoryID: number;
    CategoryName: string;
}

export type SupabaseUser = {
    user: User,
    session: Session
}
