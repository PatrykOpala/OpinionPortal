import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  opinionForm!: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.opinionForm = this.formBuilder.group({
      arm: this.formBuilder.array([]),
      opinionContent: ''
    });
  }

  checkboxChange(e: Event){
    const checkArray: FormArray = this.opinionForm.get('arm') as FormArray;
    if((e.target as HTMLInputElement).checked){
      checkArray.push(new FormControl((e.target as HTMLInputElement).value));
    }else{
      var i = 0;
      checkArray.controls.forEach(item => {
        if(item.value === (e.target as HTMLInputElement).value){
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

}
