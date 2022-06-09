import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AddOpinionService {

  private supabase!: SupabaseClient;

  public isLogg = false;

  constructor() {
    // this.supabase = createClient("https://hxobnpkuoudcyisbuqiw.supabase.co", 
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4b2JucGt1b3VkY3lpc2J1cWl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ1MzE4NjYsImV4cCI6MTk3MDEwNzg2Nn0.MPZHoslJnTUABZwi551HDdDV4cCWxLfE1TzsIE2OPGg");
    // console.log(this.supabase);
  }

  login(email: string, pass: string){
    return this.supabase.auth.signIn({email: email, password: pass});
  }

  register(email: string, pass: string){
    return this.supabase.auth.signUp({email: email, password: pass});
  }

  logoutU(){
    return this.supabase.auth.signOut();
  }
}
