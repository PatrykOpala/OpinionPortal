import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginnedComponent } from './loginned.component';
import { LogoOpinierComponent } from 'src/app/components/logo-opinier/logo-opinier.component';
import { OpinieContentComponent } from 'src/app/components/opinie-container/opinie-content/opinie-content.component';
import { OpinieHeaderComponent } from 'src/app/components/opinie-container/opinie-header/opinie-header.component';
import { OpinieContainerComponent } from 'src/app/components/opinie-container/opinie-container.component';

const loginnedRoutes: Routes = [{ path: 'loginned', component: LoginnedComponent }];

@NgModule({
  declarations: [
    LoginnedComponent,
    LogoOpinierComponent,
    OpinieContainerComponent,
    OpinieHeaderComponent,
    OpinieContentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(loginnedRoutes)
  ],
  exports:[
    LoginnedComponent,
    LogoOpinierComponent,
    OpinieContainerComponent,
    OpinieHeaderComponent,
    OpinieContentComponent,
  ]
})
export class LoginnedModule { }