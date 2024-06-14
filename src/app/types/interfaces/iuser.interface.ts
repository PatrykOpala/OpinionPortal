export interface IUser{
    loginUser():void
    registerUser(name: string, email: string, password: string, registerType: string): Promise<void>
}