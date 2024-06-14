import { SupabaseClient } from "@supabase/supabase-js";
import { IUser } from "../interfaces/iuser.interface";
import { addUser } from "../../store/actions/user.actions";
import { IDataBaseUser } from "../interfaces/idatabase-user.interface";
import { SupabaseQueryesV2 } from "./database-queryes-class-v2";
import { inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { IUserStore } from "../interfaces/user-store.interface";

export class User{

  private _userStore = inject(Store<IUserStore>);

  constructor(provider: SupabaseClient, dbQuery: SupabaseQueryesV2){ }

  public addUserToStore(user: IDataBaseUser){
    this._userStore.dispatch(addUser({user}));
  }

  public transformerUser(response: any, name: string = "", email: string){
    return {
      user_uuid: response.user?.id !== undefined ? response.user?.id
        : '',
      name,
      email,
      type: "User",
      delete_user: false,
      isEmpty: false
    }
  }

  public transformerFilteredUser(filteredUser: any){
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