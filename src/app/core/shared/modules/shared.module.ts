import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
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
    NgIf
  ],
  exports:[
	  PaneContainerComponent,
    OpinieContainerComponent,
	  ChooseComponent
  ]
})
export class SharedModule { }
