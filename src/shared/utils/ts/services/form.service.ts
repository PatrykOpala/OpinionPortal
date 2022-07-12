import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  opinionForm!: FormGroup
  
  constructor(private formBuilder: FormBuilder) {
    this.opinionForm = this.formBuilder.group({
      arm: '',
      opinionContent: ''
    });
  }

  radioChange(e: Event){
    this.opinionForm.value.arm = (e.target as HTMLInputElement).value;
    console.log(this.opinionForm.value);
  }

}
