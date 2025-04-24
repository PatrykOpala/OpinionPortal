import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { OpinionsService } from 'src/app/services/opinions/opinions.service';
import { Opinions } from 'src/app/types/models/opinion.model';
import { changeEvent } from '../../../types/types';
import { DialogServiceService } from '../../../pages/loginned/components/dialogs/dialog-new-opinion/dialog-service.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'opn-opinie-container',
    templateUrl: './opinie-container.component.html',
    styleUrls: ['./opinie-container.component.scss'],
    imports: [NgIf]
})
export class OpinieContainerComponent implements OnInit {
  @ViewChild('headOpn') headOpn!: ElementRef;
  @ViewChild('paragraph') paragraph!: ElementRef;

  @Input("loginP") login: boolean = false;
  @Input("ops") ops?: Opinions;
  @Input("user_name") user_name = "";
  
  protected opID?: number;
  protected header?: string;
  protected content?: string;

  protected context: boolean = false;
  protected valu: NonNullable<string> = "";
  protected globalChangeValue: changeEvent = {id: '', header: '', content: ''};

  constructor(protected op: OpinionsService, private dialogChangeService: DialogServiceService){}

  ngOnInit(): void {
    if(this.ops !== undefined){
      this.content = this.ops.content;
      this.header = this.ops.header;
      this.opID = this.ops.id;
    }
  }
  changeOpinion(): void {
    if(this.paragraph.nativeElement.id !== "undefined"){
      this.dialogChangeService.openChangeDialog(this.user_name[0], Number(this.paragraph.nativeElement.id), this.headOpn.nativeElement.textContent, this.paragraph.nativeElement.textContent);
      this.context = !this.context;
    }
  }
  deleteOpinion(): void{
    if(this.paragraph.nativeElement.id !== "undefined"){
      this.op.DeleteOpinion({id: this.paragraph.nativeElement.id});
      this.context = !this.context;
    }
  }
}
