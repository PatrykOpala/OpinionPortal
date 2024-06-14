import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LOCAL_STORAGE_KEYS } from '../types/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginnedGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(window.localStorage.getItem(LOCAL_STORAGE_KEYS.userAuthentication)){
        return true;
      }
      return this.router.createUrlTree(['']);
  }  
}
