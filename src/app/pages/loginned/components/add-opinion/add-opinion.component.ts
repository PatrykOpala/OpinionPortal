import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { ChangeState, Opinions} from '../../../../types';

@Component({
    selector: 'opn-add-opinion',
    templateUrl: './add-opinion.component.html',
    styleUrls: ['./add-opinion.component.scss'],
    standalone: false
})
export class AddOpinionComponent implements OnInit {

  @Output('close') close = new EventEmitter<boolean>();
  @Output('returnedData') returnedData = new EventEmitter<Opinions>();

  protected opinionForm!: FormGroup;
  protected headOpinion: string = "Wybierz z lewej strony, aby wystawić opinię";

  private formBuilder = inject(FormBuilder);

  constructor() {
    this.opinionForm = this.formBuilder.group({
      arm: new FormControl(''),
      opinionContent: new FormControl({value: '', disabled: true})
    });
    
  }
  ngOnInit(): void {}

  sendOpinion(): void{
    if(window.localStorage?.getItem('supabase.auth.token') === null){return}
    this.closeDialog();
  }

  clear(): void{
    this.opinionForm.reset()
    this.headOpinion = "Wybierz z lewej strony, aby wystawić opinię";
  }

  closeDialog(): void{
    this.close.emit(true);
    this.clear();
  }

  changeOpinionForm(e: ChangeState){
    this.opinionForm.controls['arm'].setValue(e.formArm);
    this.headOpinion = e.headOpinion;
    this.opinionForm.get('opinionContent')?.enable();
  }
}
