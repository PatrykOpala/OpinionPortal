import { Component, OnInit, inject, ViewChild} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { getOpinion } from 'src/store/actions/opinion.actions';
import { OpinionStateInterface } from '../../../shared/utils/ts/interfaces/opinion-state.interface';
import { Opinions } from 'src/shared/utils/ts/interfaces/opinion.interface';
import { DialogDirective } from 'src/shared/utils/ts/directives/dialog.directive';
import { FormService } from 'src/shared/utils/ts/services/form.service';


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

  yourOpinionsPublishing2$: Observable<Opinions>

  private store = inject(Store<{posts: OpinionStateInterface}>);
  formService = inject(FormService);
  
  constructor() {
    this.yourOpinionsPublishing2$ = this.store.select('posts');
    console.log(this.yourOpinionsPublishing2$);
  }

  runAdd(): void{
    this.dialogD.addPlugin(this.formService);
    this.dialogD.show();
  }
  
  ngOnInit(): void {}

}
