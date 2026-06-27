import { Component, inject, OnInit } from '@angular/core';
import { LOCAL_STORAGE_KEYS } from '../../../types/constants';
import { UserLoginnedInStateEnum } from '../../../types/enums';
import { AuthService } from '../../../services/auth/auth.service';
import { ILogoutUser } from '../../../types/interfaces/IlogoutUser.interface';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'opn-menu-bar',
    templateUrl: './menu-bar.component.html',
    styles: `.router-link{margin-left: 0.5rem; font-size: 1rem; line-height: 1.5rem; background-color: transparent; color: var(--opn-green); padding: 0.5rem;
        letter-spacing: 3px; border: none; font-weight: bold; border-radius: 0.5rem;}
        .router-link:hover{color: var(--opn-white-hover); background-color: var(--opn-dark-green);}`,
    imports: [RouterLink]
})
export class MenuBarComponent implements OnInit, ILogoutUser{
  protected authService = inject(AuthService);
  protected profileOptions: boolean = false;
  protected c = true;

  constructor() {
    if(window.localStorage.getItem(LOCAL_STORAGE_KEYS.userAuthentication)){
      this.authService.menubarService.changeUserLoginnedInState(UserLoginnedInStateEnum.LOGGEDIN);
    }
  }

  signOut(): void {
    this.profileOptions = !this.profileOptions;
    this.authService.logOut();
  }

  ngOnInit(): void { }
}
