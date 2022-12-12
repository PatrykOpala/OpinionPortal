import { Component, inject, OnInit } from '@angular/core';
import { LOCAL_STORAGE_KEYS } from 'src/app/core/types/constants';
import { UserLoginnedInStateEnum } from 'src/app/core/types/enums';
import { AuthService } from '../../../services/auth/auth.service';
import { MenuBarService } from '../../../services/menu-bar/menu-bar.service';
import { LogOutUser} from '../../../types/interfaces';

@Component({
  selector: 'opn-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit, LogOutUser {

  protected menuBarService = inject(MenuBarService);
  protected authService = inject(AuthService);
  protected profileOptions: boolean = false;

  constructor() { 
    if(window.localStorage?.getItem(LOCAL_STORAGE_KEYS.userAuthentication) !== null){
      this.menuBarService.changeUserLoginnedInState(UserLoginnedInStateEnum.LOGGEDIN);
      // this.user_name = JSON.parse(window.localStorage?.getItem(LOCAL_STORAGE_KEY) as string)?.data?.user?.email;
    }
  }

  signOut(): void {
    this.profileOptions = !this.profileOptions;
    window.localStorage.removeItem(LOCAL_STORAGE_KEYS.userAuthentication);
    this.authService.logOut();
  }

  ngOnInit(): void {
    
  }
}
