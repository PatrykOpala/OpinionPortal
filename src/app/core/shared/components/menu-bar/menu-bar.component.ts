import { Component, inject, OnInit } from '@angular/core';
import { LOCAL_STORAGE_KEYS } from 'src/app/core/types/constants';
import { UserLoginnedInStateEnum } from 'src/app/core/types/enums';
import { AuthService } from '../../../services/auth/auth.service';
import { MenuBarService } from '../../../services/menu-bar/menu-bar.service';
import { LogOutUser} from '../../../types/interfaces';
import { NgPlural } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'opn-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  standalone: true,
  imports: [NgPlural, RouterLink]
})
export class MenuBarComponent implements OnInit, LogOutUser{
  protected menuBarService = inject(MenuBarService);
  protected authService = inject(AuthService);
  protected profileOptions: boolean = false;

  protected c = true;

  constructor() {
    if(window.localStorage.getItem(LOCAL_STORAGE_KEYS.userAuthentication)){
      this.menuBarService.changeUserLoginnedInState(UserLoginnedInStateEnum.LOGGEDIN);
      if(window.location.href.includes("personal-brand") || window.location.href.includes("company")){
        this.c = false;
      }
    }
  }

  signOut(): void {
    this.profileOptions = !this.profileOptions;
    this.authService.logOut();
  }

  ngOnInit(): void { }
}
