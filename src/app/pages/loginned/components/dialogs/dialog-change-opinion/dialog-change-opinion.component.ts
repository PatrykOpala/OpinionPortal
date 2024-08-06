import { Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { OpinionsService } from 'src/app/services/opinions/opinions.service';
import { UserStoreService } from 'src/app/services/user/user-store.service';
import { Opinions, CreateOpinion } from 'src/app/types/models/opinion.model';
import { DialogServiceService } from '../dialog-new-opinion/dialog-service.service';

@Component({
  selector: 'opn-dialog-change-opinion',
  templateUrl: './dialog-change-opinion.component.html',
  styleUrls: ['./dialog-change-opinion.component.scss']
})
export class DialogChangeOpinionComponent implements OnInit, AfterViewInit, OnDestroy {
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
  protected userStoreService = inject(UserStoreService);
  protected opinionsService = inject(OpinionsService);

  private userSub: Subscription | undefined;

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
    let b = "";
    this.userSub = this.userStoreService.getUserFromStore()
    .pipe(map((u)=>u.user_uuid))
    .subscribe(u=>{
      b = u;
    })
    let changeOpinionObj: Opinions = CreateOpinion(b, this.opinionAuthor, this.opinionId, 
    this.valu, this.textAreaElement.nativeElement.value);
    this.opinionsService.ChangeOpinion(String(changeOpinionObj.id), 
    {header: changeOpinionObj.header, content: changeOpinionObj.content});
    this.textAreaElement.nativeElement.value = "";
    this.dialogNewService.closeChangeDialog();
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
  }
}
