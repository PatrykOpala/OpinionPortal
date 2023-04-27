export interface IDataBaseUser{
    [x: string]: any;
    id?: number,
    email: string,
    name: string,
    type: string,
    user_uuid: string,
    delete_user: boolean,
    isEmpty: boolean
}