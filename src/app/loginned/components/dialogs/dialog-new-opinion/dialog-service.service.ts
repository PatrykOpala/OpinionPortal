import { Injectable, ViewContainerRef } from '@angular/core';
import { DialogChangeOpinionComponent } from '../dialog-change-opinion/dialog-change-opinion.component';
import { DialogNewOpinionComponent } from './dialog-new-opinion.component';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  public dialogComponentOutlet: any = null;
  public dialogChangeOpinionViewRef!: ViewContainerRef;

  constructor() { }

  closeDialog(){
    this.dialogComponentOutlet = null;
  }

  openDialog(){
    this.dialogComponentOutlet = DialogNewOpinionComponent;
  }

  openChangeDialog(){
    this.dialogChangeOpinionViewRef.clear();
    const dialogComponentRef = this.dialogChangeOpinionViewRef.createComponent(DialogChangeOpinionComponent);
  }

  closeChangeDialog(){
    this.dialogChangeOpinionViewRef.clear();
  }
}
