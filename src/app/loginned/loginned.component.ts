import { ChangeDetectionStrategy, Component, inject, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
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
import { OpinionsService } from '../core/services/opinions/opinions.service';

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

  yourOpinionsPublishing: any[] = [];
  protected userObjectFromLocalStorage: any;

  private menuBarService = inject(MenuBarServiceService);
  private opinionsService = inject(OpinionsService);
  
  constructor() {}
  
  ngOnInit(): void {
    // this.formService.opinionPublish$.subscribe(c => {
    //   this.yourOpinionsPublishing = c.opinion;
    // });
    this.menuBarService.changeUserLoginnedInState(UserLoginnedInStateEnum.LOGGEDIN);
    if(window.localStorage.getItem("supabase.auth.token")){
      this.opinionsService.GetOpinionFromDatabase().then(v => {
        if(v !== null && v !== undefined){
          this.yourOpinionsPublishing = v;
        }
      })
    }
  }
  
  runAdd(): void{
    const DialogComponentRef = this.opn.createComponent(AddOpinionComponent);
    DialogComponentRef.instance.returnedData.asObservable().subscribe(opinions => {
      this.yourOpinionsPublishing.push(opinions);
      this.opinionsService.SendOpinionToDatabase(opinions);
    });
    DialogComponentRef.instance.close.asObservable().subscribe((e)=>{if(e){this.opn.clear();}});
  }
}
