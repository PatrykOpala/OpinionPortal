import { Injectable } from '@angular/core';
import { DialogNewOpinionComponent } from './dialog-new-opinion.component';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  public dialogComponentOutlet: any = null;

  constructor() { }

  closeDialog(){
    this.dialogComponentOutlet = null;
  }

  openDialog(){
    this.dialogComponentOutlet = DialogNewOpinionComponent;
  }
}
