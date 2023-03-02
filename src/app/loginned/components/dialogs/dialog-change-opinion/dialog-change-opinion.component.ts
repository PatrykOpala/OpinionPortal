import { Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { OpinionsService } from 'src/app/core/services/opinions/opinions.service';
import { CreateOpinion } from 'src/app/core/types/functions';
import { Opinions } from 'src/app/core/types/interfaces';
import { DialogServiceService } from '../dialog-new-opinion/dialog-service.service';

@Component({
  selector: 'opn-dialog-change-opinion',
  templateUrl: './dialog-change-opinion.component.html',
  styleUrls: ['./dialog-change-opinion.component.scss']
})
export class DialogChangeOpinionComponent implements OnInit, AfterViewInit {
  @ViewChild('area') textAreaElement!: ElementRef;
  @Input() opinionAuthor!: string;
  @Input() opinionId!: number;
  @Input() headerOpinion!: string;
  @Input() opinionContent!: string;
  @Output() opinionEmitter = new EventEmitter<Opinions>();
  protected author = "Anonim";
  protected valu = "";
  protected _ViewSelected = 0;

  protected dialogNewService = inject(DialogServiceService);
  protected opinionsService = inject(OpinionsService);

  ngOnInit(): void{
    if(this.headerOpinion !== ""){
      this.author = this.opinionAuthor;
      this.valu = this.headerOpinion;
    }
  }

  ngAfterViewInit(): void {
    if(this.opinionContent !== ""){
      this.textAreaElement.nativeElement.value = this.opinionContent;
    }
  }

  onChangeOpinion(){
    let changeOpinionObj: Opinions = CreateOpinion(this.opinionsService.GetUserFromState().userId, this.opinionAuthor, this.opinionId, 
    this.valu, this.textAreaElement.nativeElement.value);
    this.opinionsService.ChangeOpinion(String(changeOpinionObj.id), {header: changeOpinionObj.header, content: changeOpinionObj.content});
    this.textAreaElement.nativeElement.value = "";
    this.dialogNewService.closeChangeDialog();
  }
}
