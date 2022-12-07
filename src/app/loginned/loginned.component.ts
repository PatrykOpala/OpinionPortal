import { Component, inject, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { OpinionsService } from '../core/services/opinions/opinions.service';
import { LOCAL_STORAGE_KEY } from '../core/types/constants';
import { changeEvent, Opinions } from '../core/types/interfaces';

@Component({
  selector: 'opn-loginned',
  templateUrl: './loginned.component.html',
  styleUrls: ['./loginned.component.scss']
})
export class LoginnedComponent implements OnInit{
  @ViewChild("opn", {read: ViewContainerRef, static: true}) opn!: ViewContainerRef;

  protected opinionsService = inject(OpinionsService);

  constructor() {
    if(window.localStorage.getItem(LOCAL_STORAGE_KEY)){
      // this.opinionsService.GetOpinionFromDatabase();
      this.opinionsService.GetOpinionFromLocalStorage(false);
    }
  }

  ngOnInit(): void {}

  sendData(data: Opinions){
    //this.opinionsService.SendOpinionToDatabase(data);
    this.opinionsService.AddOpinionSingleDataToOpinionsTable(data);
    window.localStorage.setItem("op", JSON.stringify(this.opinionsService.opinions));
    this.opinionsService.GetOpinionFromLocalStorage(false);
  }

  closeAddComponent(e: boolean){
    if(e){
      this.opinionsService.CloseAddComponent();
    }
  }

  runAdd(vallue?: changeEvent): void{
    if(vallue !== null){
      this.opinionsService.close = false;
      return;
    }
  }

  opinionEvent(change: changeEvent){
    this.runAdd(change);
  }
}
