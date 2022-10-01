import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OpinionsService } from 'src/app/core/services/opinions/opinions.service';

@Component({
  selector: 'opn-opinie-container',
  templateUrl: './opinie-container.component.html',
  styleUrls: ['./opinie-container.component.scss'],
})
export class OpinieContainerComponent implements OnInit {

  @Input("loginP") login: boolean = false;
  @Input("edit-mode") eMode: boolean = false;
  @Input() opID ?: number;
  @Input("opinie-header") header: string = "";
  @Input("opinie-content") content: string = "";

  @Input("user_name") user_name = "";

  @Output() changeOpinionEvent = new EventEmitter<any>();

  protected context: boolean = false;
  protected valu = "";

  constructor(protected op: OpinionsService){}

  ngOnInit(): void {}

  changeOpinion(e: Event): void{
    const n = (e.target as HTMLDivElement).parentNode?.parentNode?.childNodes;
    let changeValue = {};
    if((n?.item(1).childNodes[0] as HTMLParagraphElement).id !== "undefined"){
      (changeValue as any).id = (n?.item(1).childNodes[0] as HTMLParagraphElement).id;
      (changeValue as any).headOpinion = (n?.item(0).childNodes[1].childNodes[1].childNodes[1] as HTMLElement).textContent;
      (changeValue as any).content = (n?.item(1).childNodes[0] as HTMLParagraphElement).textContent;
      // this.op.ChangeOpinion(
      //   {id: (n?.item(1).childNodes[0] as HTMLParagraphElement).id}
      // );
      this.changeOpinionEvent.emit(changeValue);
      this.context = !this.context;
    }
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
      // console.log((e.target as HTMLElement).textContent);
    }
    this.op.toogleREMode();
  }
}
