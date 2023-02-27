import { Component, ElementRef, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { OpinionsService } from 'src/app/core/services/opinions/opinions.service';
import { CreateOpinion } from 'src/app/core/types/functions';
import { Opinions } from 'src/app/core/types/interfaces';
import { DialogServiceService } from './dialog-service.service';

@Component({
  selector: 'opn-dialog-new-opinion',
  templateUrl: './dialog-new-opinion.component.html',
  styleUrls: ['./dialog-new-opinion.component.scss']
})
export class DialogNewOpinionComponent {
  @ViewChild('area') textAreaElement!: ElementRef;
  @ViewChild('actionButton') actionButton!: ElementRef;
  @Output() opinionEmitter = new EventEmitter<Opinions>();
  protected valu = "";
  protected _ViewSelected = 0;

  protected dialogNewService = inject(DialogServiceService);
  protected opinionsService = inject(OpinionsService);

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

  emitOpinion(){
    if(this._ViewSelected === 1){
      this.giveFeedback();
    }
  }

  giveFeedback(){
    const {userId, userName} = this.opinionsService.GetUserFromState();
    let newOpinionObj: Opinions = CreateOpinion(userId, userName, Math.floor(Math.random() * 1000), this.valu, this.textAreaElement.nativeElement.value);
    console.log(newOpinionObj);
    this.opinionEmitter.emit(newOpinionObj);
    this.textAreaElement.nativeElement.value = "";
    this._ViewSelected = 0;
    this.dialogNewService.closeDialog();
  }
}
