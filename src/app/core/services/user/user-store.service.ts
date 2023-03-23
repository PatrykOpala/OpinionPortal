import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addUser } from '../../store/actions/user.actions';
import { userSelector } from '../../store/selectors/user.selectors';
import { IDataBaseUser } from '../../types/interfaces/idatabase-user.interface';
import { IUserStore } from '../../types/interfaces/user-store.interface';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService{

  private _userStore = inject(Store<IUserStore>);
  private _users$: Observable<IDataBaseUser>;
  private users: IDataBaseUser = {id: 0, email: "", name: "", type: "", 
  created_at: "", user_uuid: "", delete_user: false, isEmpty: true};

  constructor() {
    this._users$ = this._userStore.select(userSelector);
    this._users$.subscribe(u => {
      this.users = u;
    });

  }

  getUserFromStore(): {user: IDataBaseUser}{
    return {
      user: this.users
    };
  }

  addUserToStore(user: IDataBaseUser): void {
    this._userStore.dispatch(addUser({user}));
  }

}
