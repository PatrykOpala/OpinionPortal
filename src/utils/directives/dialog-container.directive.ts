import { Directive, ViewContainerRef } from "@angular/core";
@Directive({selector: "[opnDialogContainer]"})
export class DialogContainerDirective{
    constructor(public dialogViewContainerRef: ViewContainerRef){}
}