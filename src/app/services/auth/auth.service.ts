import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected supabaseClient: SupabaseClient;

  constructor() {this.supabaseClient = createClient(environment.supabaseUrl, environment.supabaseKey);}

  async register(email: string, pass: string){
    let {user, error} = await this.supabaseClient.auth.signUp({email, password: pass});
    let userLocalStorage = {
      email: user?.email,
      id: user?.id
    };
    window.localStorage.setItem("user", JSON.stringify(userLocalStorage));
    return error
  }

  async login(email: string, pass: string){return await this.supabaseClient.auth.signIn({email, password: pass});}

  async logOut(){return await this.supabaseClient.auth.signOut();}
}
