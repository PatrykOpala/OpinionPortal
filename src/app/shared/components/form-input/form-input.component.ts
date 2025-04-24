import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'opn-form-input',
    imports: [],
    templateUrl: './form-input.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: FormInputComponent,
            multi: true,
        },
    ]
})
export class FormInputComponent implements ControlValueAccessor{
  @Input("label")
  label: string = "";

  @Input("type")
  inputType: string = "text";

  @Input("name")
  inputName?: string;
  
  value = "";
  
  // onChange!: (value: string) => void;
  // onTouch!: () => void;

  writeValue(obj: string): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setValue(event: Event){
    let inputElement = (event.target as HTMLInputElement);
    this.value = inputElement.value;
    this.onChange(inputElement.value);
    this.onTouch();
  }

  onChange(value: string){}
  onTouch(){}
}
