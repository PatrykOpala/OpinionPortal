import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CreateOpinion } from 'src/app/core/types/functions';
import { ChangeState, Opinions} from 'src/app/core/types/interfaces';

@Component({
  selector: 'opn-add-opinion',
  templateUrl: './add-opinion.component.html',
  styleUrls: ['./add-opinion.component.scss'],
  // standalone: true,
  // imports: [
  //   CommonModule, ReactiveFormsModule, ChooseCompanyComponent
  // ]
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
    this.returnedData.emit(CreateOpinion(JSON.parse(window.localStorage?.getItem('supabase.auth.token') as string).currentSession.user.id, JSON.parse(window.localStorage?.getItem('supabase.auth.token') as string).currentSession.user.email,
    this.opinionForm.value.arm, this.opinionForm.value.opinionContent));
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
