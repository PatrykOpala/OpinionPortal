import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { addUser } from '../../store/actions/user.actions';
import { DatabaseConnection } from '../../types/classes/database-connection.class';
import { SupabaseQueryesV2 } from '../../types/classes/database-queryes-class-v2';
import { SupabaseProvider } from '../../types/classes/supabase-provider';
import { LOCAL_STORAGE_KEYS, NAVIGATE_TO_HOME_URL, NAVIGATE_TO_LOGINNED_URL, NAVIGATE_TO_BUSINESS_DASHBOARD } from '../../types/constants';
import { QueryResult, UserLoginnedInStateEnum } from '../../types/enums';
import { DatabaseUser } from '../../types/types';
import { UserStore } from '../../types/types';
import { MenuBarService } from '../menu-bar/menu-bar.service';
import { User } from '../../types/classes/user.class';
import { UserQuery } from '../../types/classes/user-query.class';
import { AuthError } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService2 {
  private menubarService = inject(MenuBarService);
  private userStore = inject(Store<UserStore>);
  private databaseConnection: DatabaseConnection;
  private supabaseProvider: SupabaseProvider
  public authRouter = inject(Router);
  public databaseQuery: SupabaseQueryesV2;
  public user: User;

  constructor() {
    this.databaseConnection = new DatabaseConnection();
    this.supabaseProvider = new SupabaseProvider({supabaseUrl: environment.supabaseUrl,
       supabaseKey: environment.supabaseKey})
    this.databaseQuery = this.databaseConnection.supabaseConnect(this.supabaseProvider);
    this.user = new User(this.supabaseProvider.sClient, this.databaseQuery);
  }

  async registerUser(name: string, email: string, password: string): Promise<AuthError | undefined>{
    const {error, data} = await this.supabaseProvider.sClient.auth.signUp({email, password});
    const registerTransformeUser: DatabaseUser = this.user.transformerUser(data, name, email);
    const result = await this.databaseQuery.pushToDatabase(new UserQuery("users", registerTransformeUser));

    if(result === QueryResult.SUCCESS){
      this.user.addUserToStore(registerTransformeUser);
      window.localStorage.setItem(LOCAL_STORAGE_KEYS.userAuthentication, JSON.stringify(registerTransformeUser));
      this.menubarService.changeUserLoginnedInState(UserLoginnedInStateEnum.LOGGEDIN);
      this.authRouter.navigateByUrl(NAVIGATE_TO_LOGINNED_URL);
    }
    if(error){
      return error;
    }
    return;
  }

  async registerBusiness(name: string, email: string, password: string): Promise<AuthError | undefined>{
    const {error, data} = await this.supabaseProvider.sClient.auth.signUp({email, password});
    const registerTransformerBusiness: DatabaseUser = this.user.transformerUser(data, name, email);
    const result = await this.databaseQuery.pushToDatabase(new UserQuery("users", registerTransformerBusiness));

    if(result === QueryResult.SUCCESS){
      this.user.addUserToStore(registerTransformerBusiness);
      window.localStorage.setItem(LOCAL_STORAGE_KEYS.userAuthentication, JSON.stringify(registerTransformerBusiness));
      this.menubarService.changeUserLoginnedInState(UserLoginnedInStateEnum.LOGGEDIN);
      this.authRouter.navigateByUrl(NAVIGATE_TO_BUSINESS_DASHBOARD);
    }
    if(error){
      return error;
    }
    return;
  }

  async loginUser(email: string, password: string): Promise<AuthError | undefined>{
    const {data, error} = await this.supabaseProvider.
    sClient.auth.signInWithPassword({email: email, password: password});
    if(data !== null){
      if(data.user !== null && data.session !== null){
        window.localStorage.setItem(LOCAL_STORAGE_KEYS.userAuthentication, JSON.stringify(data));
        this.menubarService.changeUserLoginnedInState(UserLoginnedInStateEnum.LOGGEDIN);
        this.user.addUserToStore(this.user.transformerUser(data, email, password));
        //this.authRouter.navigateByUrl(NAVIGATE_TO_LOGINNED_URL);
      }
    }
    if(error){
      return error;
    }
    return;
  }

  async loginBusiness(email: string, password: string): Promise<AuthError | undefined>{
    return;
  }

  routeTo(email_pass: string = ""){
    this.databaseQuery.getAllFromDatabase<DatabaseUser>('users').then(resolveUser => {
      let filteredUser = resolveUser.filter(el => el.email === email_pass);
      if(filteredUser != null && filteredUser.length > 0){
        if(filteredUser[0].type === "user"){
          let loggedUser = {
            user: this.user.transformerFilteredUser(filteredUser[0])
          };
          this.userStore.dispatch(addUser(loggedUser));
          window.localStorage.setItem(LOCAL_STORAGE_KEYS.nsdjlnsf, JSON.stringify(loggedUser));
          this.authRouter.navigateByUrl(NAVIGATE_TO_LOGINNED_URL);
        }
        if(filteredUser[0].type === "personalBrand"){
          let loggedUser = {
            user: this.user.transformerFilteredUser(filteredUser[0])
          };
          this.userStore.dispatch(addUser(loggedUser));
          window.localStorage.setItem(LOCAL_STORAGE_KEYS.nsdjlnsf, JSON.stringify(loggedUser));
          //this.authRouter.navigateByUrl(NAVIGATE_TO_PERSONALBRAND_URL);
        }
        if(filteredUser[0].type === "company"){
          let loggedUser = {
            user: this.user.transformerFilteredUser(filteredUser[0])
          };
          this.userStore.dispatch(addUser(loggedUser));
          window.localStorage.setItem(LOCAL_STORAGE_KEYS.nsdjlnsf, JSON.stringify(loggedUser));
          //this.authRouter.navigateByUrl(NAVIGATE_TO_COMPANY_URL);
        }
      }
    });
  }

  async logOut(){
    const {error} = await this.supabaseProvider.sClient.auth.signOut();
    if(!error && error === null){
      this.menubarService.changeUserLoginnedInState(UserLoginnedInStateEnum.NOTLOGGEDIN);
      window.localStorage.removeItem(LOCAL_STORAGE_KEYS.userAuthentication);
      window.localStorage.removeItem(LOCAL_STORAGE_KEYS.nsdjlnsf)
      this.authRouter.navigateByUrl(NAVIGATE_TO_HOME_URL);
    }
  }

  async deleteUser(email: string){
      const userToDelete = {
        delete_user: true
      };
      const {data, error} = await this.supabaseProvider.sClient
      .from("users")
      .update(userToDelete).match({email: email}).select();
      this.userStore.dispatch(addUser({user: data !== null ? data[0] : {}}));
      if(error) console.error(error);
  }

  async cancelDeleteUser(email: string){
    const userToDelete = {
      delete_user: false
    };
    const {data, error} = await this.supabaseProvider.sClient
      .from("users")
      .update(userToDelete).match({email: email}).select();
      this.userStore.dispatch(addUser({user: data !== null ? data[0] : {}}));
      if(error) console.error(error);
  }
}
