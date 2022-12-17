import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { environment } from 'src/environments/environment';
import { addUser } from '../../store/actions/opinion.actions';
import { LOCAL_STORAGE_KEYS } from '../../types/constants';
import { UserLoginnedInStateEnum } from '../../types/enums';
import { OpinionStateInterface } from '../../types/interfaces';
import { MenuBarService } from '../menu-bar/menu-bar.service';

// interface UserS { data: { user: User | null; session: Session | null; }; error: null; }

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected supabaseClient: SupabaseClient;
  public authRouter = inject(Router);
  private menubarService = inject(MenuBarService);
  private opinionStore = inject(Store<OpinionStateInterface>);

  constructor() {
    this.supabaseClient = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  register({name, email, password}: any, registerType: string){
    try{
      if(registerType === "company"){
        this.supabaseClient.auth.signUp({email, password}).then((response) => {
          const userDatabase = {
            user_uuid: response.data.user?.id,
            name,
            email,
            type: registerType,
            delete_user: false
          }
          return this.supabaseClient.from('users').insert(userDatabase);
        }).then(() => {
          this.authRouter.navigateByUrl("/zalogowano")
        });
      }

      if(registerType === "personalBrand"){
        this.supabaseClient.auth.signUp({email, password}).then((response) => {
          const userDatabase = {
            user_uuid: response.data.user?.id,
            name,
            email,
            type: registerType,
            delete_user: false
          }
          this.opinionStore.dispatch(addUser({user: email}));
          return this.supabaseClient.from('users').insert(userDatabase);
        }).then(() => {
          this.authRouter.navigateByUrl("/zalogowano"); 
        });
      }

      this.supabaseClient.auth.signUp({email, password}).then(response => {
        const userDatabase = {
          user_uuid: response.data.user?.id,
          name,
          email,
          type: registerType,
          delete_user: false
        }
        this.opinionStore.dispatch(addUser({user: email}));
        return this.supabaseClient.from('users').insert(userDatabase);
      }).then(u => {
        this.menubarService.changeUserLoginnedInState(UserLoginnedInStateEnum.LOGGEDIN);
        this.authRouter.navigateByUrl("/zalogowano");
      });
    }catch(e){
      console.error(e)
    }
  }

  login(email: string, pass: string){
    try{
      this.supabaseClient.auth.signInWithPassword({email, password: pass}).then((value) => {
        this.opinionStore.dispatch(addUser({user: email}));
        window.localStorage.setItem(LOCAL_STORAGE_KEYS.userAuthentication, JSON.stringify(value));
        this.menubarService.changeUserLoginnedInState(UserLoginnedInStateEnum.LOGGEDIN);
        this.authRouter.navigateByUrl("/zalogowano");
      })
    }catch(e){
      console.error(e)
    }
  }

  async logOut(){
    const {error} = await this.supabaseClient.auth.signOut();
    if(!error && error === null){
      this.menubarService.changeUserLoginnedInState(UserLoginnedInStateEnum.NOTLOGGEDIN);
      this.authRouter.navigateByUrl('/');
    }
  }

  async deleteUser(email: string){
    const userToDelete = {
      delete_user: true
    };
    const {error} = await this.supabaseClient
    .from("users")
    .update(userToDelete).match({email: email});
    if(error) console.error(error);
  }
}
