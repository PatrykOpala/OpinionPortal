import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { MenuBarServiceService } from '../../../core/services/menu-bar/menu-bar-service.service';
import { LogOutUser, UserLoginnedInStateEnum  } from '../../../core/types/typesOpinier';

@Component({
  selector: 'opn-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit, LogOutUser {

  protected menuBarService = inject(MenuBarServiceService);
  protected authService = inject(AuthService);
  protected user_name = "";

  constructor() { }

  signOut(): void {
    this.authService.logOut();
  }

  ngOnInit(): void {
    if(window.localStorage?.getItem("supabase.auth.token") !== null){
      this.menuBarService.changeUserLoginnedInState(UserLoginnedInStateEnum.LOGGEDIN);
      this.user_name = JSON.parse(window.localStorage?.getItem("supabase.auth.token") as string)?.currentSession?.user?.email;
    }
  }

}
