import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { getDataFromLocalStorage } from 'src/app/core/shared/utils/ts/localStorage.functions';
import { LOCAL_STORAGE_KEYS } from 'src/app/core/types/constants';
import { CreateOpinion } from 'src/app/core/types/functions';
import { Opinions, SupabaseUser } from 'src/app/core/types/interfaces';

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

  backView(){
    if(this._ViewSelected === 1){
      this._ViewSelected = 0;
      this.actionButton.nativeElement.textContent = "Dalej";
    }
  }

  closeDialog(){
    
  }

  toogle(e: Event){
    if((e.target as HTMLElement).localName !== "div"){
      this.valu = (e.target as HTMLElement).textContent as string;
      this._ViewSelected = 1;
      this.actionButton.nativeElement.textContent = "Wystaw opinię";
    }
  }

  giveFeedback(){
    const user = getDataFromLocalStorage<SupabaseUser>(LOCAL_STORAGE_KEYS.userAuthentication).user; // TEMPORARY:TODO:Reminder change it!
    let newOpinionObj: Opinions = CreateOpinion(user.id, user.email as string, Math.floor(Math.random() * 1000), this.valu, this.textAreaElement.nativeElement.value);
    this.opinionEmitter.emit(newOpinionObj);
    this.textAreaElement.nativeElement.value = "";
    this._ViewSelected = 100;
  }
}
