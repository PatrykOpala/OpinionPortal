import { Component, inject, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { AddOpinionComponent } from 'src/app/loginned/components/add-opinion/add-opinion.component';
import { OpinionsService } from '../core/services/opinions/opinions.service';

@Component({
  selector: 'opn-loginned',
  templateUrl: './loginned.component.html',
  styleUrls: ['./loginned.component.scss'],
})
export class LoginnedComponent implements OnInit{
  @ViewChild("opn", {read: ViewContainerRef, static: true}) opn!: ViewContainerRef;

  protected opinionsService = inject(OpinionsService);

  constructor() {
    if(window.localStorage.getItem("supabase.auth.token")){
      this.opinionsService.GetOpinionFromDatabase();
    }
  }

  ngOnInit(): void {
    // this.formService.opinionPublish$.subscribe(c => {
    //   this.yourOpinionsPublishing = c.opinion;
    // });
    
  }

  runAdd(): void{
    const DialogComponentRef = this.opn.createComponent(AddOpinionComponent);
    DialogComponentRef.instance.returnedData.asObservable().subscribe(opinions => {
      this.opinionsService.SendOpinionToDatabase(opinions);
    });
    DialogComponentRef.instance.close.asObservable().subscribe((e)=>{if(e){this.opn.clear();}});
  }
}
