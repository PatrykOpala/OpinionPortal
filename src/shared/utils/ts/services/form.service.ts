import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { addOpinion } from 'src/store/actions/opinion.actions';
import { OpinionClass } from '../classes/opinion-class';
import { OpinionStateInterface } from '../interfaces/opinion-state.interface';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  opinionForm!: FormGroup
  opinionPublish$: Observable<OpinionStateInterface>;
  
  headOpinion: string = "Wybierz z lewej strony, aby wystawić opinię";

  private store = inject(Store<{posts: OpinionStateInterface}>);
  private formBuilder = inject(FormBuilder);

  constructor() {
    this.opinionForm = this.formBuilder.group({
      arm: new FormControl(''),
      opinionContent: new FormControl({value: '', disabled: true})
    });
    this.opinionPublish$ = this.store.select('posts');
  }

  addOpinion(value: string){
    this.store.dispatch(addOpinion({opinion: new OpinionClass( this.opinionForm.value.arm, value)}))
  }

  radioChange(e: Event){
    this.opinionForm.controls['arm'].setValue((e.target as HTMLInputElement).value);
    this.headOpinion = this.opinionForm.value.arm;
    this.opinionForm.get('opinionContent')?.enable();
  }

}
