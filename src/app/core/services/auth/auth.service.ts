import { inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { environment } from 'src/environments/environment';
import { addUser } from '../../store/actions/opinion.actions';
import { LOCAL_STORAGE_KEYS } from '../../types/constants';
import { UserLoginnedInStateEnum } from '../../types/enums';
import { OpinionStateInterface} from '../../types/interfaces';
import { MenuBarService } from '../menu-bar/menu-bar.service';

// interface UserS { data: { user: User | null; session: Session | null; }; error: null; }

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected supabaseClient: SupabaseClient;
  public progress: boolean = false;
  public disabled: boolean = false;
  public f = "";
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
          this.opinionStore.dispatch(addUser({user: email}));
          window.localStorage.setItem(LOCAL_STORAGE_KEYS.userAuthentication, JSON.stringify(response));
          this.menubarService.changeUserLoginnedInState(UserLoginnedInStateEnum.LOGGEDIN);
          return this.supabaseClient.from('users').insert(userDatabase);
        }).then(() => {
          this.authRouter.navigateByUrl("/zalogowano/company");
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
          this.opinionStore.dispatch(addUser({user: name}));
          window.localStorage.setItem(LOCAL_STORAGE_KEYS.userAuthentication, JSON.stringify(response));
          this.menubarService.changeUserLoginnedInState(UserLoginnedInStateEnum.LOGGEDIN);
          return this.supabaseClient.from('users').insert(userDatabase);
        }).then(()=>{
          this.authRouter.navigateByUrl("/zalogowano/personal-brand");
        });
      }

      if(registerType === "user"){
        this.supabaseClient.auth.signUp({email, password}).then(response => {
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
          return this.supabaseClient.from('users').insert(userDatabase);
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
          const {data, error} = await this.supabaseClient.auth.signInWithPassword({email: form.value.email, password: form.value.password});
          if(data !== null){
            if(data.user !== null && data.session !== null){
              this.progress = false;
              form.enable();
              this.opinionStore.dispatch(addUser({user: form.value.email}));
              window.localStorage.setItem(LOCAL_STORAGE_KEYS.userAuthentication, JSON.stringify(data));
              this.menubarService.changeUserLoginnedInState(UserLoginnedInStateEnum.LOGGEDIN);
              this.progress = false;
              form.enable();
              this.getUserNameFromDataBase(form.value.email).then(()=>{
                if(this.f === "user"){
                  this.authRouter.navigateByUrl("/zalogowano");
                }
                if(this.f === "personalBrand"){
                  this.authRouter.navigateByUrl("/zalogowano/personal-brand");
                }
                if(this.f === "company"){
                  this.authRouter.navigateByUrl("/zalogowano/company");
                }
              });
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

  async getUserNameFromDataBase(email_pass: string = ""){
    const {data, error} = await this.supabaseClient.from("users").select('*').eq("email", email_pass);
    if(data != null && data.length > 0){
      if(data[0].type === "user"){
        this.f = data[0].type
      }
      if(data[0].type === "personalBrand"){
        this.f = data[0].type
      }
      if(data[0].type === "company"){
        this.f = data[0].type
      }
    }
    return error;
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
