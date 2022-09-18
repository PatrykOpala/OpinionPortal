import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { environment } from 'src/environments/environment';
import { UserLoginnedInStateEnum } from '../../types/typesOpinier';
import { MenuBarService } from '../menu-bar/menu-bar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected supabaseClient: SupabaseClient;
  public authRouter = inject(Router);
  private menubarService = inject(MenuBarService);

  constructor() {this.supabaseClient = createClient(environment.supabaseUrl, environment.supabaseKey);}

  register(email: string, pass: string, registerType: string){
    try{
      if(registerType === "company"){
        this.supabaseClient.auth.signUp({email, password: pass}).then(response => {
          const userDatabase = {
            user_uuid: response.user?.id,
            name: response.user?.email,
          }
          return this.supabaseClient.from('companies').insert(userDatabase);
        }).then(() => this.authRouter.navigateByUrl("/zalogowano")).catch(e => console.error(e));
      }

      this.supabaseClient.auth.signUp({email, password: pass}).then(response => {
        this.menubarService.changeUserLoginnedInState(UserLoginnedInStateEnum.LOGGEDIN);
        this.authRouter.navigateByUrl("/zalogowano");
      })
    }catch(e){
      console.error(e)
    }
  }

  login(email: string, pass: string){
    try{
      this.supabaseClient.auth.signIn({email, password: pass}).then(loginResponse => {
        this.menubarService.changeUserLoginnedInState(UserLoginnedInStateEnum.LOGGEDIN);
        this.authRouter.navigateByUrl("/zalogowano");
      })
    }catch(e){
      console.error(e)
    }
  }

  async logOut(){
    const {error} = await this.supabaseClient.auth.signOut();
    if(!error || error === null){
      this.menubarService.changeUserLoginnedInState(UserLoginnedInStateEnum.NOTLOGGEDIN);
      this.authRouter.navigateByUrl('/');
    }
  }
}
