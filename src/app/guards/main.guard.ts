import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LOCAL_STORAGE_KEYS, NAVIGATE_TO_LOGINNED_URL, NAVIGATE_TO_BUSINESS_DASHBOARD } from '../types/constants';

@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanActivate {
  constructor(private mainRouter: Router){}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!window.localStorage.getItem(LOCAL_STORAGE_KEYS.userAuthentication)){
        return true;
      }
      if(JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEYS.nsdjlnsf) as string).user.type === "user"){
        return this.mainRouter.createUrlTree([NAVIGATE_TO_LOGINNED_URL]);
      }
      if(JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEYS.nsdjlnsf) as string).user.type === "personalBrand"){
        return this.mainRouter.createUrlTree([NAVIGATE_TO_BUSINESS_DASHBOARD]);
      }
      if(JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEYS.nsdjlnsf) as string).user.type === "company"){
        return this.mainRouter.createUrlTree([NAVIGATE_TO_BUSINESS_DASHBOARD]);
      }
      return true
  }
  
}
