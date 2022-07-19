import { ComponentRef, Directive, ViewContainerRef } from '@angular/core';
import { AddOpinionComponent } from 'src/app/components/add-opinion/add-opinion.component';

@Directive({
  selector: '[opnDialog]'
})
export class DialogDirective {

  private DialogComponentRef!: ComponentRef<AddOpinionComponent>

  constructor(private viewContainerRef: ViewContainerRef) { 
    viewContainerRef.clear();
  }

  addPlugin(plugin: any): void{
    this.DialogComponentRef.instance.ser = plugin;
  }

  show(): void{
    this.DialogComponentRef = this.viewContainerRef.createComponent(AddOpinionComponent);
  }
}
