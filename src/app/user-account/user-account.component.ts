import { Component, OnInit } from '@angular/core';
import {getDataFromLocalStorage} from '../core/shared/utils/ts/localStorage.functions';
import { LOCAL_STORAGE_KEYS } from '../core/types/constants';
import { SupabaseUser } from '../core/types/interfaces';

@Component({
  selector: 'opn-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  protected nameAvatar: string = "";
  protected userName: string = "";

  constructor() { }

  ngOnInit(): void {
    if(getDataFromLocalStorage<SupabaseUser>(LOCAL_STORAGE_KEYS.userAuthentication)!== null){
      this.userName = getDataFromLocalStorage<SupabaseUser>(LOCAL_STORAGE_KEYS.userAuthentication).data.user.email as string;
      this.nameAvatar = this.userName[0];
    }
  }

  changePassword(): void{

  }

  deleteAccount(): void{
    
  }

}
