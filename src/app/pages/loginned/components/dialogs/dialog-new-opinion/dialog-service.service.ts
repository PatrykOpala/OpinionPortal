import { Injectable, ViewContainerRef } from '@angular/core';
import { DialogChangeOpinionComponent } from '../dialog-change-opinion/dialog-change-opinion.component';
import { DialogNewOpinionComponent } from './dialog-new-opinion.component';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {
  public dialogNewOpinionRef!: ViewContainerRef;
  public dialogChangeOpinionViewRef!: ViewContainerRef;
  constructor() { }

  closeNewDialog(){
    this.dialogNewOpinionRef.clear();
  }

  openNewDialog(){
    this.dialogNewOpinionRef.clear();
    const dialogComponentRef = this.dialogNewOpinionRef.createComponent(DialogNewOpinionComponent);
  }

  openChangeDialog(opinionAuthor: string, opinionID: number, opinionHeader: string, opinionContent: string){
    this.dialogChangeOpinionViewRef.clear();
    const dialogComponentRef = this.dialogChangeOpinionViewRef.createComponent(DialogChangeOpinionComponent);
    dialogComponentRef.instance.opinionAuthor = opinionAuthor;
    dialogComponentRef.instance.opinionId = opinionID;
    dialogComponentRef.instance.headerOpinion = opinionHeader;
    dialogComponentRef.instance.opinionContent = opinionContent;
  }

  closeChangeDialog(){
    this.dialogChangeOpinionViewRef.clear();
  }
}
