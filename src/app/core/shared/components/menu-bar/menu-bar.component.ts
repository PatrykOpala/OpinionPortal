import { Component, inject, OnInit } from '@angular/core';
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
  protected user_name = "";
  protected profileOptions: boolean = false;

  constructor() { }

  signOut(): void {
    this.profileOptions = !this.profileOptions;
    this.authService.logOut();
  }

  ngOnInit(): void {
    if(window.localStorage?.getItem("supabase.auth.token") !== null){
      this.menuBarService.changeUserLoginnedInState(UserLoginnedInStateEnum.LOGGEDIN);
      this.user_name = JSON.parse(window.localStorage?.getItem("supabase.auth.token") as string)?.currentSession?.user?.email;
    }
  }
}
