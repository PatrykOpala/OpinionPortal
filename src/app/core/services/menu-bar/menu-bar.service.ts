import { Injectable } from '@angular/core';
import { UserLoginnedInStateEnum } from '../../types/enums';

@Injectable({
  providedIn: 'root'
})
export class MenuBarService {

  public IsTheUserLoggedInState :UserLoginnedInStateEnum = UserLoginnedInStateEnum.NOTLOGGEDIN;

  constructor() { }

  changeUserLoginnedInState(state: UserLoginnedInStateEnum){
    this.IsTheUserLoggedInState = state;
  }

}
