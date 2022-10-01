import { Component, inject, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { OpinionsService } from '../core/services/opinions/opinions.service';
import { changeEvent, Opinions } from '../core/types/typesOpinier';

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
      this.opinionsService.GetOpinionFromDatabase();
    }
  }

  ngOnInit(): void {}

  sendData(data: Opinions){
    // this.opinionsService.SendOpinionToDatabase(data);
    console.log(data)
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
    // const DialogComponentRef = this.opn.createComponent(AddOpinionComponent);
    // DialogComponentRef.instance.returnedData.asObservable().subscribe(opinions => {
      
    // });
    // DialogComponentRef.instance.close.asObservable().subscribe((e)=>{if(e){this.opn.clear();}});
  }

  opinionEvent(change: changeEvent){
    this.runAdd(change);
  }
}
