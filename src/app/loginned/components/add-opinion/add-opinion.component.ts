import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserLocalStorage, ChangeState, Opinions, CreateOpinion } from 'src/app/core/types/typesOpinier';
import { ChooseCompanyComponent } from '../../../shared/components/choose-company/choose-company.component';

@Component({
  selector: 'opn-add-opinion',
  templateUrl: './add-opinion.component.html',
  styleUrls: ['./add-opinion.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChooseCompanyComponent
  ]
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
    if(localStorage?.getItem('user') === null){return}
    let uid = (JSON.parse( localStorage?.getItem('user') as string) as UserLocalStorage).id;
    this.returnedData.emit(CreateOpinion(uid, this.opinionForm.value.arm, this.opinionForm.value.opinionContent));
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

  // addOpinion(value: string){
  //   this.store.dispatch(addOpinion({opinion: new OpinionClass( this.opinionForm.value.arm, value)}))
  // }

}
