import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/services/auth/auth.service';
import { LOCAL_STORAGE_KEYS, NAVIGATE_TO_LOGINNED_URL } from '../../core/types/constants';

@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanActivate {
  constructor(private mainRouter: Router, private authService: AuthService){}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!window.localStorage.getItem(LOCAL_STORAGE_KEYS.userAuthentication)){
        return true;
      }
      return this.mainRouter.createUrlTree([NAVIGATE_TO_LOGINNED_URL]);
  }
  
}
