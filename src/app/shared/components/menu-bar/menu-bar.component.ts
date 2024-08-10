import { Component, inject, OnInit } from '@angular/core';
import { LOCAL_STORAGE_KEYS } from 'src/app/types/constants';
import { UserLoginnedInStateEnum } from 'src/app/types/enums';
import { AuthService } from '../../../services/auth/auth.service';
import { ILogoutUser } from '../../../types/interfaces/IlogoutUser.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'opn-menu-bar',
  templateUrl: './menu-bar.component.html',
  standalone: true,
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
