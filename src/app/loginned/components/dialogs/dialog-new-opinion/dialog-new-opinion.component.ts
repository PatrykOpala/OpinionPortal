import { Component, ElementRef, EventEmitter, inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { OpinionsService } from 'src/app/core/services/opinions/opinions.service';
import { CreateOpinion } from 'src/app/core/types/functions';
import { Opinions } from 'src/app/core/types/interfaces';
import { DialogServiceService } from './dialog-service.service';

@Component({
  selector: 'opn-dialog-new-opinion',
  templateUrl: './dialog-new-opinion.component.html',
  styleUrls: ['./dialog-new-opinion.component.scss']
})
export class DialogNewOpinionComponent implements OnInit {
  @ViewChild('area') textAreaElement!: ElementRef;
  protected valu = "";
  protected author = "Anonim"
  protected _ViewSelected = 0;
  protected dialogNewService = inject(DialogServiceService);
  protected opinionsService = inject(OpinionsService);

  ngOnInit(): void{
    this.author = this.opinionsService.GetUserFromState().user.name;
  }

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
    const {user} = this.opinionsService.GetUserFromState();
    let newOpinionObj: Opinions = CreateOpinion(user.user_uuid !== undefined ? user.user_uuid : '', user.name !== undefined ? user.name : '', Math.floor(Math.random() * 1000), this.valu, this.textAreaElement.nativeElement.value);
    this.opinionsService.SendOpinionToDatabase(newOpinionObj);
    this.textAreaElement.nativeElement.value = "";
    this._ViewSelected = 0;
    this.dialogNewService.closeNewDialog();
  }
}
