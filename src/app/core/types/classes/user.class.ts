import { SupabaseClient } from "@supabase/supabase-js";
import { IUser } from "../interfaces/iuser.interface";
import { addUser } from "../../store/actions/user.actions";
import { LOCAL_STORAGE_KEYS, NAVIGATE_TO_ULOGINNED_URL } from "../constants";
import { IDataBaseUser } from "../interfaces/idatabase-user.interface";
import { UserQuery } from "./user-query.class";
import { SupabaseQueryesV2 } from "./database-queryes-class-v2";
import { inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { IUserStore } from "../interfaces/user-store.interface";
import { Router } from "@angular/router";
import { QueryResult, UserLoginnedInStateEnum } from "../enums";
import { MenuBarService } from "../../services/menu-bar/menu-bar.service";

export class User implements IUser{

    private _provider: SupabaseClient;
    private _dbQuery: SupabaseQueryesV2;
    private _userStore = inject(Store<IUserStore>);
    private _authRouter = inject(Router);
    private _menubarService = inject(MenuBarService);

    constructor(provider: SupabaseClient, dbQuery: SupabaseQueryesV2){
        this._provider = provider;
        this._dbQuery = dbQuery;
    }

    loginUser(): void {
        throw new Error("Method not implemented.");
    }

    async registerUser(name: string, email: string, password: string, registerType: string): Promise<void> {
        const {error, data} = await this._provider.auth.signUp({email, password});
        if(error !== null) return;
        const user: IDataBaseUser = this.transformerUser(data, name, email, registerType);
        const result = await this._dbQuery.pushToDatabase(new UserQuery("users", user));

        if(result === QueryResult.SUCCESS){
            this.addUserToStore(user);
            window.localStorage.setItem(LOCAL_STORAGE_KEYS.userAuthentication, JSON.stringify(user));
            this._menubarService.changeUserLoginnedInState(UserLoginnedInStateEnum.LOGGEDIN);
            this._authRouter.navigateByUrl(NAVIGATE_TO_ULOGINNED_URL);
        }
    }

    private addUserToStore(user: IDataBaseUser){
        this._userStore.dispatch(addUser({user}));
    }

    private transformerUser(response: any, name: string, email: string, registerType: string, filteredUser?: any){
        if(response !== null && response !== undefined){
          return {
            user_uuid: response.user?.id !== undefined ? response.user?.id
              : '',
            name,
            email,
            type: registerType,
            delete_user: false,
            isEmpty: false
          }
        }
    
        return{
          id: filteredUser.id,
          type: filteredUser.type,
          name: filteredUser.name,
          email: filteredUser.email,
          user_uuid: filteredUser.user_uuid,
          delete_user: filteredUser.delete_user,
          isEmpty: false
        }
    }

}