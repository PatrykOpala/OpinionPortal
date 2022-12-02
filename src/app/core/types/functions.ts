import { Category, Opinions } from "./interfaces"

export function CreateOpinion(_user_id: string, _user_email: string, _content_id: number, _head: string, _content: string): Opinions{
    return {
        user_uuid: _user_id,
        user_email: _user_email,
        id: _content_id,
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