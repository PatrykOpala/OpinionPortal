import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  opinionForm!: FormGroup
  
  headOpinion: string = "Wybierz z lewej strony, aby wystawić opinię";

  constructor(private formBuilder: FormBuilder) {
    this.opinionForm = this.formBuilder.group({
      arm: new FormControl(''),
      opinionContent: new FormControl({value: '', disabled: true})
    });
  }

  radioChange(e: Event){
    this.opinionForm.controls['arm'].setValue((e.target as HTMLInputElement).value);
    this.headOpinion = this.opinionForm.value.arm;
    this.opinionForm.get('opinionContent')?.enable();
  }

}
