import { Component, inject, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddOpinionComponent } from 'src/app/loginned/components/add-opinion/add-opinion.component';
import { UserAccountComponent } from '../user-account/user-account.component';
import { PaneContainerComponent } from '../shared/components/pane-container/pane-container.component';
import { OpinieContainerComponent } from '../shared/components/opinie-container/opinie-container.component';
import { OpinieHeaderComponent } from '../shared/components/opinie-container/opinie-header/opinie-header.component';
import { OpinieContentComponent } from '../shared/components/opinie-container/opinie-content/opinie-content.component';
import { MenuBarServiceService } from 'src/app/core/services/menu-bar/menu-bar-service.service';
import { UserLoginnedInStateEnum, Opinions} from 'src/app/core/types/typesOpinier';

@Component({
  selector: 'opn-loginned',
  templateUrl: './loginned.component.html',
  styleUrls: ['./loginned.component.scss'],
  standalone: true,
  imports: [
    UserAccountComponent,
    CommonModule, FormsModule, RouterModule,
    PaneContainerComponent, OpinieContainerComponent, OpinieHeaderComponent, OpinieContentComponent,
  ]
})
export class LoginnedComponent implements OnInit{
  @ViewChild("opn", {read: ViewContainerRef, static: true}) opn!: ViewContainerRef;

  yourOpinionsPublishing: Opinions[] = [];
  protected userObjectFromLocalStorage: any;

  private menuBarService = inject(MenuBarServiceService);
  
  constructor() {
    this.menuBarService.changeUserLoginnedInState(UserLoginnedInStateEnum.LOGGEDIN);
    if(window.localStorage.getItem("user")){
      this.userObjectFromLocalStorage = JSON.parse(window.localStorage.getItem("user")as string);
      console.log(this.userObjectFromLocalStorage);
    }
  }
  
  ngOnInit(): void {
    // this.formService.opinionPublish$.subscribe(c => {
    //   this.yourOpinionsPublishing = c.opinion;
    // });
  }
  
  runAdd(): void{
    const DialogComponentRef = this.opn.createComponent(AddOpinionComponent);
    DialogComponentRef.instance.returnedData.asObservable().subscribe(opinions => this.yourOpinionsPublishing.push(opinions));
    DialogComponentRef.instance.close.asObservable().subscribe((e)=>{if(e){this.opn.clear();}});
  }
}
