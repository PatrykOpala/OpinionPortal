import { Component, OnInit } from '@angular/core';
import { LOCAL_STORAGE_KEY } from '../core/types/constants';

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
    if(window.localStorage?.getItem(LOCAL_STORAGE_KEY) !== null){
      this.userName = JSON.parse(window.localStorage?.getItem(LOCAL_STORAGE_KEY) as string)?.data?.user?.email;
      this.nameAvatar = this.userName[0];
    }
  }

  changePassword(): void{

  }

  deleteAccount(): void{
    
  }

}
