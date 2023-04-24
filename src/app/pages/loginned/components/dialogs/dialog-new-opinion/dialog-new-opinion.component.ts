import { Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { OpinionsService } from 'src/app/core/services/opinions/opinions.service';
import { UserStoreService } from 'src/app/core/services/user/user-store.service';
import { CreateOpinion } from 'src/app/core/types/functions';
import { Opinions } from 'src/app/core/types/interfaces';
import { DialogServiceService } from './dialog-service.service';

@Component({
  selector: 'opn-dialog-new-opinion',
  templateUrl: './dialog-new-opinion.component.html',
  styleUrls: ['./dialog-new-opinion.component.scss']
})
export class DialogNewOpinionComponent implements OnInit, OnDestroy {
  @ViewChild('area') textAreaElement!: ElementRef;
  protected valu = "";
  protected author = "Anonim"
  protected _ViewSelected = 0;
  protected dialogNewService = inject(DialogServiceService);
  protected opinionsService = inject(OpinionsService);
  protected userStoreService = inject(UserStoreService);

  private uName: string = "";
  private uUuid: string = "";
  private sub: Subscription;

  constructor(){
    this.sub = this.userStoreService.getUserFromStore().pipe(map(u=>{
      return {
        uName: u.name,
        uUuid: u.user_uuid
      }
    })).subscribe(t => {
      this.uName = t.uName;
      this.uUuid = t.uUuid;
    })
    this.author = this.uName;
  }

  ngOnInit(): void{}

  backView(){
    if(this._ViewSelected === 1){
      this._ViewSelected = 0;
    }
  }

  toogle(e: Event){
    if(this._ViewSelected === 0){
      if((e.target as HTMLElement).localName !== "div"){
        this.valu = (e.target as HTMLElement).textContent as string;
      }
      this._ViewSelected = 1;
    }
  }

  onPublishOpinion(){
    let newOpinionObj: Opinions = CreateOpinion(this.uUuid, this.uName, 
      Math.floor(Math.random() * 1000), this.valu, 
      this.textAreaElement.nativeElement.value);
    this.opinionsService.SendOpinionToDatabase(newOpinionObj);
    this.textAreaElement.nativeElement.value = "";
    this._ViewSelected = 0;
    this.dialogNewService.closeNewDialog();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
