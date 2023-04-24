import { inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { addUser } from '../../store/actions/user.actions';
import { DatabaseConnection } from '../../types/classes/database-connection.class';
import { SupabaseQueryes } from '../../types/classes/database-queryes-class';
import { SupabaseProvider } from '../../types/classes/supabase-provider';
import { LOCAL_STORAGE_KEYS, NAVIGATE_TO_COMPANY_URL, NAVIGATE_TO_HOME_URL, 
  NAVIGATE_TO_LOGINNED_URL, NAVIGATE_TO_PERSONALBRAND_URL } from '../../types/constants';
import { UserLoginnedInStateEnum } from '../../types/enums';
import { IDataBaseUser } from '../../types/interfaces/idatabase-user.interface';
import { IUserStore } from '../../types/interfaces/user-store.interface';
import { MenuBarService } from '../menu-bar/menu-bar.service';

/* interface UserS { data: { user: User | null; session: Session | 
  null; }; error: null; }
*/

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private menubarService = inject(MenuBarService);
  private userStore = inject(Store<IUserStore>);
  private databaseConnection: DatabaseConnection;
  private supabaseProvider: SupabaseProvider
  public progress: boolean = false;
  public disabled: boolean = false;
  public authRouter = inject(Router);
  public databaseQuery: SupabaseQueryes;

  constructor() {
    this.databaseConnection = new DatabaseConnection();
    this.supabaseProvider = new SupabaseProvider({supabaseUrl: environment.supabaseUrl,
       supabaseKey: environment.supabaseKey})
    this.databaseQuery = this.databaseConnection.supabaseConnect(this.supabaseProvider);
  }

  register({name, email, password}: any, registerType: string){
    try{
      if(registerType === "company"){
        this.supabaseProvider.sClient.auth.signUp({email, password}).then((response) => {
          const userDatabase: IDataBaseUser = {
            user_uuid: response.data.user?.id !== undefined ? response.data.user?.id
             : '',
            name,
            email,
            type: registerType,
            delete_user: false,
            isEmpty: false
          }
          this.userStore.dispatch(addUser({user: name}));
          window.localStorage.setItem(LOCAL_STORAGE_KEYS.userAuthentication, 
            JSON.stringify(response));
          this.menubarService.changeUserLoginnedInState(
            UserLoginnedInStateEnum.LOGGEDIN);
          return this.databaseQuery.pushToDatabase('users', userDatabase);
        }).then(() => {
          this.authRouter.navigateByUrl(NAVIGATE_TO_COMPANY_URL);
        });
      }

      if(registerType === "personalBrand"){
        this.supabaseProvider.sClient.auth.signUp({email, password}).then((response) => {
          const userDatabase: IDataBaseUser = {
            user_uuid: response.data.user?.id !== undefined ? response.data.user?.id 
            : '',
            name,
            email,
            type: registerType,
            delete_user: false,
            isEmpty: false
          }
          this.userStore.dispatch(addUser({user: name}));
          window.localStorage.setItem(LOCAL_STORAGE_KEYS.userAuthentication, 
            JSON.stringify(response));
          this.menubarService.changeUserLoginnedInState(
            UserLoginnedInStateEnum.LOGGEDIN);
          return this.databaseQuery.pushToDatabase('users', userDatabase);
        }).then(()=>{
          this.authRouter.navigateByUrl(NAVIGATE_TO_PERSONALBRAND_URL);
        });
      }

      if(registerType === "user"){
        this.supabaseProvider.sClient.auth.signUp({email, password}).then(response => {
          const userDatabase: IDataBaseUser = {
            user_uuid: response.data.user?.id !== undefined ? response.data.user?.id
             : '',
            name,
            email,
            type: registerType,
            delete_user: false,
            isEmpty: false
          }
          this.userStore.dispatch(addUser({user: name}));
          window.localStorage.setItem(LOCAL_STORAGE_KEYS.userAuthentication,
             JSON.stringify(response));
          this.menubarService.changeUserLoginnedInState(
            UserLoginnedInStateEnum.LOGGEDIN);
          return this.databaseQuery.pushToDatabase('users', userDatabase);
        }).then(()=>{
          this.authRouter.navigateByUrl(NAVIGATE_TO_LOGINNED_URL);
        });
      }
    }catch(e){
      console.error(e)
    }
  }

  login(form: FormGroup<any>){
    this.progress = true;
      setTimeout(async ()=>{
        if(form.value.email === "" && form.value.password === ""){
          this.progress = false;
          form.enable();
          return;
        }else{
          const {data, error} = await this.supabaseProvider.
          sClient.auth.signInWithPassword({email: form.value.email, 
            password: form.value.password});
          if(data !== null){
            if(data.user !== null && data.session !== null){
              this.progress = false;
              form.enable();
              window.localStorage.setItem(LOCAL_STORAGE_KEYS.userAuthentication, 
                JSON.stringify(data));
              this.menubarService.changeUserLoginnedInState(
                UserLoginnedInStateEnum.LOGGEDIN);
              this.routeTo(form.value.email);
            }
          }
          if(error){
            this.progress = false;
            form.enable();
            console.log(error.message);
          }
        }
      }, 1000);
  }

  routeTo(email_pass: string = ""){
    this.databaseQuery.getAllFromDatabase<IDataBaseUser>('users').then(resolveUser => {
      let filteredUser = resolveUser.filter(el => el.email === email_pass);
      if(filteredUser != null && filteredUser.length > 0){
        if(filteredUser[0].type === "user"){
          let loggedUser = {
            user: {
              id: filteredUser[0].id,
              type: filteredUser[0].type,
              name: filteredUser[0].name,
              email: filteredUser[0].email,
              user_uuid: filteredUser[0].user_uuid,
              delete_user: filteredUser[0].delete_user,
              isEmpty: false
            }
          };
          this.userStore.dispatch(addUser(loggedUser));
          window.localStorage.setItem(LOCAL_STORAGE_KEYS.nsdjlnsf, 
            JSON.stringify(loggedUser));
          this.authRouter.navigateByUrl(NAVIGATE_TO_LOGINNED_URL);
        }
        if(filteredUser[0].type === "personalBrand"){
          let loggedUser = {
            user: {
              id: filteredUser[0].id,
              type: filteredUser[0].type,
              name: filteredUser[0].name,
              email: filteredUser[0].email,
              user_uuid: filteredUser[0].user_uuid,
              delete_user: filteredUser[0].delete_user,
              isEmpty: false
            }
          };
          this.userStore.dispatch(addUser(loggedUser));
          window.localStorage.setItem(LOCAL_STORAGE_KEYS.nsdjlnsf, 
            JSON.stringify(loggedUser));
          this.authRouter.navigateByUrl(NAVIGATE_TO_PERSONALBRAND_URL);
        }
        if(filteredUser[0].type === "company"){
          let loggedUser = {
            user: {
              id: filteredUser[0].id,
              type: filteredUser[0].type,
              name: filteredUser[0].name,
              email: filteredUser[0].email,
              user_uuid: filteredUser[0].user_uuid,
              delete_user: filteredUser[0].delete_user,
              isEmpty: false
            }
          };
          this.userStore.dispatch(addUser(loggedUser));
          window.localStorage.setItem(LOCAL_STORAGE_KEYS.nsdjlnsf, 
            JSON.stringify(loggedUser));
          this.authRouter.navigateByUrl(NAVIGATE_TO_COMPANY_URL);
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
