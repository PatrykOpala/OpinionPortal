import { Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { Opinions } from 'src/shared/utils/ts/interfaces/opinion.interface';
import { DialogDirective } from 'src/shared/utils/ts/directives/dialog.directive';
import { FormService } from '../../services/form/form.service';
import { AddOpinionComponent } from 'src/app/components/add-opinion/add-opinion.component';

@Component({
  selector: 'opn-loginned',
  templateUrl: './loginned.component.html',
  styleUrls: ['./loginned.component.scss']
})
export class LoginnedComponent implements OnInit {
  @ViewChild(DialogDirective) dialogD!: DialogDirective;

  yourOpinionsPublishing: Opinions[] = [];
  
  constructor(protected formService: FormService, protected viewContainerRef: ViewContainerRef) {}
  
  ngOnInit(): void {
    this.viewContainerRef.clear();
    this.formService.opinionPublish$.subscribe(c => {
      this.yourOpinionsPublishing = c.opinion;
    });
  }
  
  runAdd(): void{
    const DialogComponentRef = this.viewContainerRef.createComponent(AddOpinionComponent);
    DialogComponentRef.instance.ser = this.formService;

    DialogComponentRef.instance.close.asObservable().subscribe((e)=>{
      if(e){
        this.viewContainerRef.clear();
      }
    })
  }
  
}
