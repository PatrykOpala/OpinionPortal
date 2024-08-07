import { Directive, inject, OnDestroy } from "@angular/core";
import { map, Subscription } from "rxjs";
import { UserStoreService } from "../../services/user/user-store.service";
import { LOCAL_STORAGE_KEYS } from "../constants";
import { DatabaseUser } from "../types";

@Directive()
export abstract class UserStoreAbstract implements OnDestroy{
    protected userStoreService = inject(UserStoreService);
    private userSubscription: Subscription | undefined;

    constructor(){
        this.userSubscription = this.userStoreService.getUserFromStore()
        .pipe(map((u) => {
            if(u === null){ return Error("Error") }
            return u
        }))
        .subscribe(u => {
            if(u){
                let dbUser: DatabaseUser = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEYS.nsdjlnsf) as string);
                this.userStoreService.addUserToStore(dbUser);
            }
        })
    }

    ngOnDestroy(): void {
        if(this.userSubscription !== undefined){
            this.userSubscription.unsubscribe();
        }
    }
}