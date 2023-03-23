export interface IDataBaseUser{
    id?: number,
    email: string,
    name: string,
    type: string,
    created_at?: string,
    user_uuid: string,
    delete_user: boolean,
    isEmpty: boolean
}