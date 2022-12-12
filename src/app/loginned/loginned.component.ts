import { Component, inject, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { OpinionsService } from '../core/services/opinions/opinions.service';
import {getDataFromLocalStorage} from '../core/shared/utils/ts/localStorage.functions';
import { LOCAL_STORAGE_KEYS } from '../core/types/constants';
import { changeEvent, Opinions, SupabaseUser } from '../core/types/interfaces';

@Component({
  selector: 'opn-loginned',
  templateUrl: './loginned.component.html',
  styleUrls: ['./loginned.component.scss']
})
export class LoginnedComponent implements OnInit{
  @ViewChild("opn", {read: ViewContainerRef, static: true}) opn!: ViewContainerRef;

  protected opinionsService = inject(OpinionsService);

  constructor() {
    if(getDataFromLocalStorage<SupabaseUser>(LOCAL_STORAGE_KEYS.userAuthentication)){
      // this.opinionsService.GetOpinionFromDatabase();
      this.opinionsService.GetOpinionFromLocalStorage(false);
    }
  }

  ngOnInit(): void {}

  sendData(data: Opinions){
    //this.opinionsService.SendOpinionToDatabase(data);
    // this.opinionsService.AddOpinionSingleDataToOpinionsTable(data);
    this.opinionsService.AddOpinionToStore(data);
    // this.opinionsService.AddOpinionsToLocalStorage<Array<Opinions>>(LOCAL_STORAGE_KEYS.op, this.opinionsService.opinions);
    this.opinionsService.GetOpinionFromLocalStorage(false);
  }

  runAdd(vallue?: changeEvent): void{
    if(vallue !== null){
     
      return;
    }
  }

  opinionEvent(change: changeEvent){
    this.runAdd(change);
  }
}
