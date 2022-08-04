import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginnedComponent } from './loginned.component';
import { OpinieContentComponent } from 'src/app/components/opinie-container/opinie-content/opinie-content.component';
import { OpinieHeaderComponent } from 'src/app/components/opinie-container/opinie-header/opinie-header.component';
import { OpinieContainerComponent } from 'src/app/components/opinie-container/opinie-container.component';
import { UserAccountComponent } from '../user-account/user-account.component';
import { LogoutComponent } from '../logout/logout.component';

const loginnedRoutes: Routes = [{ path: 'loginned', component: LoginnedComponent }, {path: 'loginned/user-account', component: UserAccountComponent}, {path: 'logout', component: LogoutComponent}];

@NgModule({
  declarations: [
    LoginnedComponent,
    OpinieContainerComponent,
    OpinieHeaderComponent,
    OpinieContentComponent,
    UserAccountComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(loginnedRoutes)
  ],
  exports:[
    LoginnedComponent,
    OpinieContainerComponent,
    OpinieHeaderComponent,
    OpinieContentComponent,
  ]
})
export class LoginnedModule { }