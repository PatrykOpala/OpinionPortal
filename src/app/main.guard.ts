import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanActivate {
  constructor(private mainRouter: Router){}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!window.localStorage.getItem("supabase.auth.token")){
        return true;
      }
      
      return this.mainRouter.createUrlTree(['/zalogowano']);
  }
  
}
