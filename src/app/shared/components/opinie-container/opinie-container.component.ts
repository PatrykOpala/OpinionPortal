import { Component, Input, OnInit } from '@angular/core';
import { OpinionsService } from 'src/app/core/services/opinions/opinions.service';

@Component({
  selector: 'opn-opinie-container',
  templateUrl: './opinie-container.component.html',
  styleUrls: ['./opinie-container.component.scss'],
})
export class OpinieContainerComponent implements OnInit {

  @Input("loginP") login: boolean = false;
  @Input() opID ?: number;
  @Input("opinie-header") header: string = "";
  @Input("opinie-content") content: string = "";

  @Input("user_name") user_name = "";

  protected context: boolean = false;

  constructor(private op: OpinionsService){}

  ngOnInit(): void {}

  changeOpinion(e: Event): void{
    const n = (e.target as HTMLDivElement).parentNode?.parentNode?.childNodes;
    if((n?.item(1).childNodes[0] as HTMLParagraphElement).id !== "undefined"){
      this.op.ChangeOpinion(
        {id: (n?.item(1).childNodes[0] as HTMLParagraphElement).id}
      );
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
}
