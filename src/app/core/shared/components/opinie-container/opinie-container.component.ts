import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { OpinionsService } from 'src/app/core/services/opinions/opinions.service';
import { Opinions } from 'src/app/core/types/interfaces';
import {CreateOpinion} from 'src/app/core/types/functions';
import { getDataFromLocalStorage } from '../../utils/ts/localStorage.functions';
import {SupabaseUser, changeEvent} from '../../../types/interfaces';
import { LOCAL_STORAGE_KEYS } from 'src/app/core/types/constants';

@Component({
  selector: 'opn-opinie-container',
  templateUrl: './opinie-container.component.html',
  styleUrls: ['./opinie-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OpinieContainerComponent implements OnInit {

  @ViewChild('area') e!: ElementRef;
  @ViewChild('headOpn') headOpn!: ElementRef;
  @ViewChild('paragraph') paragraph!: ElementRef;

  @Input("loginP") login: boolean = false;
  @Input("mode") eMode: number = 0;
  @Input("ops") ops?: Opinions;
  @Input("user_name") user_name = "";
  @Output() addOpinion = new EventEmitter<any>();
  
  protected opID?: number;
  protected header?: string;
  protected content?: string;

  protected context: boolean = false;
  protected valu: NonNullable<string> = "";
  protected globalChangeValue: changeEvent = {id: '', header: '', content: ''};

  constructor(protected op: OpinionsService){}

  ngOnInit(): void {
    if(this.ops !== undefined){
      this.content = this.ops.content;
      this.header = this.ops.header;
      this.opID = this.ops.id;
    }
  }
  changeOpinion(e: Event): void{
    let changeValue: changeEvent = {id: '', header: '', content: ''};
    if(this.paragraph.nativeElement.id !== "undefined"){
      changeValue.id = this.paragraph.nativeElement.id;
      changeValue.header = this.headOpn.nativeElement.textContent;
      changeValue.content = this.paragraph.nativeElement.textContent;

      this.globalChangeValue = changeValue;
      this.eMode = 2;
      this.context = !this.context;
    }
  }
  SendChangeQuery() {
    let changeObj = {id: this.globalChangeValue.id, header: this.globalChangeValue.header, content: this.e.nativeElement.value}
    this.op.ChangeOpinion(this.globalChangeValue.id, changeObj);
  }
  deleteOpinion(): void{
    if(this.paragraph.nativeElement.id !== "undefined"){
      this.op.DeleteOpinion({id: this.paragraph.nativeElement.id});
      this.context = !this.context;
    }
  }
  toogle(e: Event){
    if((e.target as HTMLElement).localName !== "div"){
      this.valu = (e.target as HTMLElement).textContent as string;
      this.op.reMode = 102;
    }
  }
  giveFeedback(){
    const user = getDataFromLocalStorage<SupabaseUser>(LOCAL_STORAGE_KEYS.userAuthentication).user;
    let newOpinionObj: Opinions = CreateOpinion(user.id, user.email as string, Math.floor(Math.random() * 1000), this.valu, this.e.nativeElement.value);
    this.addOpinion.emit(newOpinionObj);
    this.e.nativeElement.value = "";
    this.op.reMode = 100;
  }
}
