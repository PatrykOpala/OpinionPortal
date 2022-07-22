import { Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { Opinions } from 'src/shared/utils/ts/interfaces/opinion.interface';
import { DialogDirective } from 'src/shared/utils/ts/directives/dialog.directive';
import { FormService } from 'src/shared/utils/ts/services/form.service';
import { AddOpinionComponent } from 'src/app/components/add-opinion/add-opinion.component';

@Component({
  selector: 'opn-loginned',
  templateUrl: './loginned.component.html',
  styleUrls: ['./loginned.component.scss']
})
export class LoginnedComponent implements OnInit {
  @ViewChild(DialogDirective) dialogD!: DialogDirective;

  yourOpinionsPublishing: Opinions[] = [];
  
  constructor(public formService: FormService, private viewContainerRef: ViewContainerRef) {}
  
  ngOnInit(): void {
    this.viewContainerRef.clear();
    this.formService.opinionPublish$.subscribe(e => {
      this.yourOpinionsPublishing = e.opinion;
    });
  }
  
  runAdd(): void{
    const DialogComponentRef = this.viewContainerRef.createComponent(AddOpinionComponent);
    DialogComponentRef.instance.ser = this.formService;

    DialogComponentRef.instance.close.asObservable().subscribe((e)=>{
      if(e === true){
        this.viewContainerRef.clear();
      }
    })
  }
  
}
