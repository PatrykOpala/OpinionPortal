import { User, Session } from "@supabase/supabase-js"

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

export interface UserLocalStorage{
    id: string,
    email: string,
    role: string
}

export interface Opinions {
    user_uuid: string,
    user_name: string,
    id?: number,
    created_at?: string,
    header: string,
    content: string
}

export interface OpinionStateInterface{
    user: string;
    opinion: Opinions[];
}

export interface Category{
    CategoryID: number;
    CategoryName: string;
}

export interface SupabaseUser{
    data:{
        user: User,
        session: Session
    }
}
