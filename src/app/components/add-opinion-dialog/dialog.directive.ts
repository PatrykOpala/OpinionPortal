import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[opnDialog]'
})
export class DialogDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
