import { Component, inject, OnInit } from '@angular/core';
import { OpinionsService } from '../../core/services/opinions/opinions.service';
import { UserStoreService } from '../../core/services/user/user-store.service';
import { LOCAL_STORAGE_KEYS } from '../../core/types/constants';
import { IDataBaseUser } from '../../core/types/interfaces/idatabase-user.interface';
import { DialogServiceService } from './components/dialogs/dialog-new-opinion/dialog-service.service';

@Component({
  selector: 'opn-loginned',
  templateUrl: './loginned.component.html',
  styleUrls: ['./loginned.component.scss']
})
export class LoginnedComponent implements OnInit{
  protected opinionsService = inject(OpinionsService);
  protected loginnedUserStoreService = inject(UserStoreService);
  protected dialogNew = inject(DialogServiceService);
  constructor() {
    if(this.loginnedUserStoreService.getUserFromStore().user.isEmpty){
      let dbUser: IDataBaseUser = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEYS.nsdjlnsf) as string);
      this.loginnedUserStoreService.addUserToStore(dbUser);
    }
    else{
      
    }
    
    this.opinionsService.databaseQuery.getAllFromDatabase('opinions').then(rr => {
      const nub = rr.filter((r: any)=> r.user_name === JSON.parse(localStorage.getItem("nsdjlnsf") as string).user);
      this.opinionsService.InitialDataInStore(nub);
    });
  }
  ngOnInit(): void {}
}
