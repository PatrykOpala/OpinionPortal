import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addUser } from '../../store/actions/user.actions';
import { userSelector } from '../../store/selectors/user.selector';
import { DatabaseUser } from '../../types/types';
import { UserStore } from '../../types/types';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService{

  private _userStore = inject(Store<UserStore>);
  private _users$: Observable<DatabaseUser>;
  private user: DatabaseUser = {id: 0, email: "", name: "", type: "", user_uuid: "", delete_user: false, isEmpty: true};

  constructor() {
    this._users$ = this._userStore.select(userSelector);
    this._users$.subscribe(u => {
      this.user = u;
    });
  }

  getUserFromStore(): Observable<DatabaseUser>{
    return this._users$;
  }

  getUser(): DatabaseUser{
    return this.user;
  }

  addUserToStore(user: DatabaseUser): void {
    this._userStore.dispatch(addUser({user}));
  }

}
