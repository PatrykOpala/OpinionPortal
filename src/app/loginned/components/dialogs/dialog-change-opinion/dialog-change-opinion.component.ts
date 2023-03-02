import { Component, ElementRef, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { OpinionsService } from 'src/app/core/services/opinions/opinions.service';
import { CreateOpinion } from 'src/app/core/types/functions';
import { Opinions } from 'src/app/core/types/interfaces';
import { DialogServiceService } from '../dialog-new-opinion/dialog-service.service';

@Component({
  selector: 'opn-dialog-change-opinion',
  templateUrl: './dialog-change-opinion.component.html',
  styleUrls: ['./dialog-change-opinion.component.scss']
})
export class DialogChangeOpinionComponent {
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
    this.opinionEmitter.emit(newOpinionObj);
    this.textAreaElement.nativeElement.value = "";
    this._ViewSelected = 0;
    this.dialogNewService.closeChangeDialog();
  }
}
