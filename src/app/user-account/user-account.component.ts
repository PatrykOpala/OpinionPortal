import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth/auth.service';
import { OpinionsService } from '../core/services/opinions/opinions.service';
import { UserStoreService } from '../core/services/user/user-store.service';
import {getDataFromLocalStorage} from '../core/shared/utils/ts/localStorage.functions';
import { LOCAL_STORAGE_KEYS } from '../core/types/constants';
import { SupabaseUser } from '../core/types/interfaces';

@Component({
  selector: 'opn-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  protected nameAvatar: string = "";
  protected userName: string = "";
  protected userStoreService = inject(UserStoreService);
  private authService = inject(AuthService);
  protected opinionsService = inject(OpinionsService);

  constructor() { }

  ngOnInit(): void {
    if(getDataFromLocalStorage<SupabaseUser>(LOCAL_STORAGE_KEYS.userAuthentication)!== null){
      this.userName = getDataFromLocalStorage<SupabaseUser>(LOCAL_STORAGE_KEYS.userAuthentication).user.email as string;
      this.nameAvatar = this.userName[0];
    }
  }

  deleteAccount(): void{
    if(getDataFromLocalStorage(LOCAL_STORAGE_KEYS.userAuthentication)){
      let userEmail = getDataFromLocalStorage<SupabaseUser>(LOCAL_STORAGE_KEYS.userAuthentication)?.user?.email;
      this.authService.deleteUser(userEmail as string);
    }
  }

  cancelDeleteAccount(): void{
    let userEmail = getDataFromLocalStorage<SupabaseUser>(LOCAL_STORAGE_KEYS.userAuthentication)?.user?.email;
    this.authService.cancelDeleteUser(userEmail as string);
  }

}
