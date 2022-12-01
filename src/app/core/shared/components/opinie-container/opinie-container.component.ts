import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { OpinionsService } from 'src/app/core/services/opinions/opinions.service';
import { Opinions } from 'src/app/core/types/interfaces';

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
  @Output() changeOpinionEvent = new EventEmitter<any>();
  @Output() addOpinion = new EventEmitter<any>();
  
  protected opID?: number;
  protected header?: string;
  protected content?: string;

  protected context: boolean = false;
  protected valu: string | null = "";
  protected globalChangeValue: any = {};

  constructor(protected op: OpinionsService){}

  ngOnInit(): void {
    if(this.ops !== undefined){
      this.content = this.ops.content;
      this.header = this.ops.header;
      this.opID = this.ops.id;
    }
  }

  changeOpinion(e: Event): void{
    const n = (e.target as HTMLDivElement).parentNode?.parentNode?.childNodes;
    let changeValue = {};
    if((n?.item(1).childNodes[0] as HTMLParagraphElement).id !== "undefined"){
      (changeValue as any).id = this.paragraph.nativeElement.id;
      (changeValue as any).headOpinion = this.headOpn.nativeElement.textContent;
      (changeValue as any).content = this.paragraph.nativeElement.textContent;

      
      this.globalChangeValue = changeValue;
      this.eMode = 2;
      this.context = !this.context;
    }
  }
  SendChangeQuery(event?: Event) {
    let changeObj = {content: this.e.nativeElement.value}
    this.op.ChangeOpinion(this.globalChangeValue.id, changeObj);
  }
  deleteOpinion(e: Event): void{
    const n = (e.target as HTMLDivElement).parentNode?.parentNode?.childNodes;
    if((n?.item(1).childNodes[0] as HTMLParagraphElement).id !== "undefined"){
      this.op.DeleteOpinion(
        {id: (n?.item(1).childNodes[0] as HTMLParagraphElement).id}
      );
      this.context = !this.context;
    }
  }

  toogle(e: Event){
    if((e.target as HTMLElement).localName !== "div"){
      this.valu = (e.target as HTMLElement).textContent;
      console.log(this.valu);
      this.op.reMode = 102;
    }
  }

  giveFeedback(){
    let b = {
      head: this.valu,
      content: this.e.nativeElement.value
    }
    // this.eMode = false;
    this.addOpinion.emit(b);
  }
}
