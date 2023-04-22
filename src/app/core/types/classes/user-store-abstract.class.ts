import { inject } from "@angular/core";
import { UserStoreService } from "../../services/user/user-store.service";
import { LOCAL_STORAGE_KEYS } from "../constants";
import { IDataBaseUser } from "../interfaces/idatabase-user.interface";

export abstract class UserStoreAbstract{
    protected userStoreService = inject(UserStoreService);

    constructor(){
        if(this.userStoreService.getUserFromStore().user.isEmpty){
            let dbUser: IDataBaseUser = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEYS.nsdjlnsf) as string);
            this.userStoreService.addUserToStore(dbUser);
        }
    }
}