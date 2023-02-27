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

export interface UserM{
    id: number,
    email: string,
    name: string,
    type: string,
    created_at: string,
    user_uuid: string,
    delete_user: boolean
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
    user_id: string;
    user: string;
    opinion: Opinions[];
}

export interface Category{
    CategoryID: number;
    CategoryName: string;
}

export interface SupabaseUser{
    user: User,
    session: Session
}
