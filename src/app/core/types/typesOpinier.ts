export enum UserLoginnedInStateEnum{
    NOTLOGGEDIN = 0,
    LOGGEDIN = 1
}

export enum ViewPN{
    START = "start",
    POSITIVE = "positive",
    NEGATIVE = "negative"
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
    email: string
}

export interface Opinions {
    user_id: string,
    header: string,
    content: string
}

export interface OpinionStateInterface{
    user: string;
    opinion: Opinions[];
}

export interface Company{
    label: string
}

export interface Category{
    CategoryID: number;
    CategoryName: string;
}

export function CreateOpinion(_user_id: string, _head: string, _content: string): Opinions{
    return {
        user_id: _user_id,
        header: _head,
        content: _content
    }
}

export function CreateCategory(_CategoryID: number, _CategoryName: string): Category{
    return {
        CategoryID: _CategoryID,
        CategoryName: _CategoryName
    }
}