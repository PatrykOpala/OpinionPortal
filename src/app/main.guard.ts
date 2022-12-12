import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LOCAL_STORAGE_KEYS } from './core/types/constants';

@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanActivate {
  constructor(private mainRouter: Router){}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!window.localStorage.getItem(LOCAL_STORAGE_KEYS.userAuthentication)){
        return true;
      }
      
      return this.mainRouter.createUrlTree(['/zalogowano']);
  }
  
}
