import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected supabaseClient: SupabaseClient;

  constructor() {
    this.supabaseClient = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  async register(email: string, pass: string){
    let registerUser = await this.supabaseClient.auth.signUp({email, password: pass});
    // let databaseUser = {name: registerUser.user?.email, type: "User", created_at: registerUser.user?.created_at};
    // const {data, error} = await this.supabaseClient.from("users").insert(databaseUser);
    // if(error) console.error(error);
  }

  async login(email: string, pass: string){
    let loginUser = await this.supabaseClient.auth.signIn({email, password: pass});
  }

  async logOut(){
    let {error} = await this.supabaseClient.auth.signOut();
    if(error) console.error(error);
  }
}
