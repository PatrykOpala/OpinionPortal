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

  yourOpinionsPublishing: any[] = [];
  protected userObjectFromLocalStorage: any;

  private opinionsService = inject(OpinionsService);

  constructor() {}

  ngOnInit(): void {
    // this.formService.opinionPublish$.subscribe(c => {
    //   this.yourOpinionsPublishing = c.opinion;
    // });
    if(window.localStorage.getItem("supabase.auth.token")){
      this.opinionsService.GetOpinionFromDatabase().then(v => {
        if(v !== null && v !== undefined){
          this.yourOpinionsPublishing = v;
        }
      })
    }
  }

  runAdd(): void{
    const DialogComponentRef = this.opn.createComponent(AddOpinionComponent);
    DialogComponentRef.instance.returnedData.asObservable().subscribe(opinions => {
      this.yourOpinionsPublishing.push(opinions);
      this.opinionsService.SendOpinionToDatabase(opinions);
    });
    DialogComponentRef.instance.close.asObservable().subscribe((e)=>{if(e){this.opn.clear();}});
  }
}
