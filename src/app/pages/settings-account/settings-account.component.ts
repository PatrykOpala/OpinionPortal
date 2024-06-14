import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { OpinionsService } from '../../services/opinions/opinions.service';
import { UserStoreService } from '../../services/user/user-store.service';
import {getDataFromLocalStorage} from '../../shared/utils/ts/localStorage.functions';
import { LOCAL_STORAGE_KEYS } from '../../types/constants';
import { SupabaseUser } from '../../types/interfaces';
import { PaneContainerComponent } from 'src/app/shared/components/pane-container/pane-container.component';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'opn-user-account',
  templateUrl: './settings-account.component.html',
  styleUrls: ['./settings-account.component.scss'],
  standalone: true,
  imports: [PaneContainerComponent, NgIf, AsyncPipe]
})
export class SettingsAccountComponent implements OnInit {

  protected nameAvatar: string = "";
  protected userName: string = "";
  protected userStoreService = inject(UserStoreService);
  protected opinionsService = inject(OpinionsService);

  protected authService = inject(AuthService);

  constructor() { }

  ngOnInit(): void {
    if(getDataFromLocalStorage<SupabaseUser>
      (LOCAL_STORAGE_KEYS.userAuthentication)!== null){
      this.userName = getDataFromLocalStorage<SupabaseUser>
      (LOCAL_STORAGE_KEYS.userAuthentication).user.email as string;
      this.nameAvatar = this.userName[0];
    }
  }

  deleteAccount(): void{
    if(getDataFromLocalStorage(LOCAL_STORAGE_KEYS.userAuthentication)){
      let userEmail = getDataFromLocalStorage<SupabaseUser>
      (LOCAL_STORAGE_KEYS.userAuthentication)?.user?.email;
      this.authService.deleteUser(userEmail as string);
    }
  }

  cancelDeleteAccount(): void{
    let userEmail = getDataFromLocalStorage<SupabaseUser>
    (LOCAL_STORAGE_KEYS.userAuthentication)?.user?.email;
    this.authService.cancelDeleteUser(userEmail as string);
  }
}
