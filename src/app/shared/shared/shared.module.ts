import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaneContainerComponent } from '../components/pane-container/pane-container.component';
import { OpinieContainerComponent } from '../components/opinie-container/opinie-container.component';
import { ChooseComponent } from '../components/choose/choose.componnet';


@NgModule({
  declarations: [
	  PaneContainerComponent,
    OpinieContainerComponent,
	  ChooseComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
	  PaneContainerComponent,
    OpinieContainerComponent,
	  ChooseComponent
  ]
})
export class SharedModule { }
