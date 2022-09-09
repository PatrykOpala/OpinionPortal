import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { UserLocalStorage } from '../../types/typesOpinier';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected supabaseClient: SupabaseClient;
  public logOutRouter = inject(Router);

  constructor() {this.supabaseClient = createClient(environment.supabaseUrl, environment.supabaseKey);}

  async register(email: string, pass: string){
    
    let {user, error} = await this.supabaseClient.auth.signUp({email, password: pass});
    let userLocalStorage = {
      name: user?.email as string,
    };
    window.localStorage.setItem("user", JSON.stringify(userLocalStorage));
    return error
  }

  async login(email: string, pass: string){return await this.supabaseClient.auth.signIn({email, password: pass});}

  async logOut(){
    const {error} = await this.supabaseClient.auth.signOut();
    if(!error || error === null){
      this.logOutRouter.navigateByUrl('/');
    }
    this.logOutRouter.navigateByUrl('/');
  }

  async registerUserInDatabase(userObj: object){
    await this.supabaseClient.from('companies').insert(userObj);
  }
}
