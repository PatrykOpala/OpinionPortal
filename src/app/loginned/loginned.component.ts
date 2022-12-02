import { Component, inject, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { OpinionsService } from '../core/services/opinions/opinions.service';
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
    if(window.localStorage.getItem("supabase.auth.token")){
      // this.opinionsService.GetOpinionFromDatabase();
      this.opinionsService.GetOpinionFromLocalStorage();
    }
  }

  ngOnInit(): void {}

  sendData(data: Opinions){
    //this.opinionsService.SendOpinionToDatabase(data);
    this.opinionsService.AddOpinionSingleDataToOpinionsTable(data);
    window.localStorage.setItem("op", JSON.stringify(this.opinionsService.opinions));
    this.opinionsService.GetOpinionFromLocalStorage();
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
