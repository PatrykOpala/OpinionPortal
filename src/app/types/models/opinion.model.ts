export type Opinions = {
    user_uuid: string,
    user_name: string,
    id?: number,
    created_at?: string,
    header: string,
    content: string
}

export function CreateOpinion(_user_id: string, _user_name: string, 
    _content_id: number, _head: string, _content: string): Opinions{
    return {
        user_uuid: _user_id,
        user_name: _user_name,
        id: _content_id,
        header: _head,
        content: _content
    }
}