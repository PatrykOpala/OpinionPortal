import { Component, OnInit, inject, ViewChild, ViewContainerRef} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { getOpinion } from 'src/store/actions/opinion.actions';
import { OpinionStateInterface } from '../../../shared/utils/ts/interfaces/opinion-state.interface';
import { Opinions } from 'src/shared/utils/ts/interfaces/opinion.interface';
import { DialogDirective } from 'src/shared/utils/ts/directives/dialog.directive';
import { FormService } from 'src/shared/utils/ts/services/form.service';
import { AddOpinionComponent } from 'src/app/components/add-opinion/add-opinion.component';


@Component({
  selector: 'opn-app-loginned',
  templateUrl: './loginned.component.html',
  styleUrls: ['./loginned.component.scss']
})
export class LoginnedComponent implements OnInit {
  @ViewChild(DialogDirective) dialogD!: DialogDirective;

  yourOpinionsPublishing: Opinions[] = [
    {head: "coś", content: "tam"},
    {head: "cośśśśśśśśś", content: "taaaaaaaaaaammmmmmmmmmmm"},
    {head: "cośdfhdahrahehhaerha", content: "tamdghdhdfh"},
    {head: "coś", content: "tam"},
  ];

  formService = inject(FormService);
  private viewContainerRef = inject(ViewContainerRef);
  
  constructor() {
    this.viewContainerRef.clear();
  }

  runAdd(): void{
    const DialogComponentRef = this.viewContainerRef.createComponent(AddOpinionComponent);
    DialogComponentRef.instance.ser = this.formService;

    const obs = DialogComponentRef.instance.close.asObservable();
    obs.subscribe((e)=>{
      if(e === true){
        this.viewContainerRef.clear();
      }
    })
  }
  
  ngOnInit(): void {}

}
