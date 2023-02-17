import { inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { addUser } from '../../store/actions/opinion.actions';
import { DatabaseConnection } from '../../types/classes/database-connection.class';
import { SupabaseQueryes } from '../../types/classes/database-queryes-class';
import { SupabaseProvider } from '../../types/classes/supabase-provider';
import { LOCAL_STORAGE_KEYS } from '../../types/constants';
import { UserLoginnedInStateEnum } from '../../types/enums';
import { OpinionStateInterface} from '../../types/interfaces';
import { MenuBarService } from '../menu-bar/menu-bar.service';

// interface UserS { data: { user: User | null; session: Session | null; }; error: null; }

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public progress: boolean = false;
  public disabled: boolean = false;
  public authRouter = inject(Router);
  private menubarService = inject(MenuBarService);
  private opinionStore = inject(Store<OpinionStateInterface>);
  private databaseConnection: DatabaseConnection;
  private supabaseProvider: SupabaseProvider
  public databaseQuery: SupabaseQueryes;
  public IsAuth = new BehaviorSubject(false);

  constructor() {
    this.databaseConnection = new DatabaseConnection();
    this.supabaseProvider = new SupabaseProvider({supabaseUrl: environment.supabaseUrl, supabaseKey: environment.supabaseKey})
    this.databaseQuery = this.databaseConnection.supabaseConnect(this.supabaseProvider);
    if(window.localStorage?.getItem(LOCAL_STORAGE_KEYS.userAuthentication) !== null){
      this.IsAuth.next(true);
    }
  }

  register({name, email, password}: any, registerType: string){
    try{
      if(registerType === "company"){
        this.supabaseProvider.sClient.auth.signUp({email, password}).then((response) => {
          const userDatabase = {
            user_uuid: response.data.user?.id,
            name,
            email,
            type: registerType,
            delete_user: false
          }
          this.opinionStore.dispatch(addUser({user: email}));
          window.localStorage.setItem(LOCAL_STORAGE_KEYS.userAuthentication, JSON.stringify(response));
          this.menubarService.changeUserLoginnedInState(UserLoginnedInStateEnum.LOGGEDIN);
          return this.databaseQuery.pushToDatabase('users', userDatabase);
        }).then(() => {
          this.authRouter.navigateByUrl("/zalogowano/company");
        });
      }

      if(registerType === "personalBrand"){
        this.supabaseProvider.sClient.auth.signUp({email, password}).then((response) => {
          const userDatabase = {
            user_uuid: response.data.user?.id,
            name,
            email,
            type: registerType,
            delete_user: false
          }
          this.opinionStore.dispatch(addUser({user: name}));
          window.localStorage.setItem(LOCAL_STORAGE_KEYS.userAuthentication, JSON.stringify(response));
          this.menubarService.changeUserLoginnedInState(UserLoginnedInStateEnum.LOGGEDIN);
          return this.databaseQuery.pushToDatabase('users', userDatabase);
        }).then(()=>{
          this.authRouter.navigateByUrl("/zalogowano/personal-brand");
        });
      }

      if(registerType === "user"){
        this.supabaseProvider.sClient.auth.signUp({email, password}).then(response => {
          const userDatabase = {
            user_uuid: response.data.user?.id,
            name,
            email,
            type: registerType,
            delete_user: false
          }
          this.opinionStore.dispatch(addUser({user: email}));
          window.localStorage.setItem(LOCAL_STORAGE_KEYS.userAuthentication, JSON.stringify(response));
          this.menubarService.changeUserLoginnedInState(UserLoginnedInStateEnum.LOGGEDIN);
          return this.databaseQuery.pushToDatabase('users', userDatabase);
        }).then(()=>{
          this.authRouter.navigateByUrl("/zalogowano");
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
          const {data, error} = await this.supabaseProvider.sClient.auth.signInWithPassword({email: form.value.email, password: form.value.password});
          if(data !== null){
            if(data.user !== null && data.session !== null){
              this.progress = false;
              form.enable();
              this.opinionStore.dispatch(addUser({user: form.value.email}));
              window.localStorage.setItem(LOCAL_STORAGE_KEYS.userAuthentication, JSON.stringify(data));
              this.menubarService.changeUserLoginnedInState(UserLoginnedInStateEnum.LOGGEDIN);
              this.progress = false;
              form.enable();
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
    this.databaseQuery.getAllFromDatabase<any>('users').then(resolveUser => {
      let filteredUser = resolveUser.filter(el => el.email === email_pass);
      if(filteredUser != null && filteredUser.length > 0){
        if(filteredUser[0].type === "user"){
          this.authRouter.navigateByUrl('/zalogowano');
        }
        if(filteredUser[0].type === "personalBrand"){
          this.authRouter.navigateByUrl('/zalogowano/personalBrand');
        }
        if(filteredUser[0].type === "company"){
          this.authRouter.navigateByUrl('/zalogowano/company');
        }
      }
    });
    
    // return error;
  }

  async logOut(){
    const {error} = await this.supabaseProvider.sClient.auth.signOut();
    if(!error && error === null){
      this.menubarService.changeUserLoginnedInState(UserLoginnedInStateEnum.NOTLOGGEDIN);
      window.localStorage.removeItem(LOCAL_STORAGE_KEYS.userAuthentication);
      this.IsAuth.next(false);
      this.authRouter.navigateByUrl('/');
    }
  }

  async deleteUser(email: string){
    const userToDelete = {
      delete_user: true
    };
    const {error} = await this.supabaseProvider.sClient
    .from("users")
    .update(userToDelete).match({email: email});
    if(error) console.error(error);
  }
}
