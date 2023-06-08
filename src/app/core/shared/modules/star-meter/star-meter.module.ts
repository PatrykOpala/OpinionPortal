import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarMeterComponent } from '../../components/star-meter/star-meter.component';

@NgModule({
  declarations: [
    StarMeterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StarMeterComponent
  ]
})
export class StarMeterModule { }
