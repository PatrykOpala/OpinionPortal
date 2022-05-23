import { Component, OnInit, ViewChild} from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { DialogDirective } from 'src/utils/ts/directives/dialog.directive';
import {AddOpinionDialogComponent} from 'src/app/components/add-opinion-dialog/add-opinion-dialog.component';

interface Opinions {
  head: string,
  content: string
}

@Component({
  selector: 'opn-app-loginned',
  templateUrl: './loginned.component.html',
  styleUrls: ['./loginned.component.scss']
})
export class LoginnedComponent implements OnInit {

  @ViewChild(DialogDirective) dialogHost!: DialogDirective;
  dialogSub!: Subscription

  constructor() {}

  yourOpinionsPublishing: Opinions[] = [
    {head: "coś", content: "tam"},
    {head: "cośśśśśśśśś", content: "taaaaaaaaaaammmmmmmmmmmm"},
    {head: "cośdfhdahrahehhaerha", content: "tamdghdhdfh"},
    {head: "coś", content: "tam"},
    {head: "cośśśśśśśśś", content: "taaaaaaaaaaammmmmmmmmmmm"},
    {head: "cośdfhdahrahehhaerha", content: "tamdghdhdfh"},
    {head: "coś", content: "tam"},
    {head: "cośśśśśśśśś", content: "taaaaaaaaaaammmmmmmmmmmm"},
    {head: "cośdfhdahrahehhaerha", content: "tamdghdhdfh"},
    {head: "coś", content: "tam"},
    {head: "cośśśśśśśśś", content: "taaaaaaaaaaammmmmmmmmmmm"},
    {head: "cośdfhdahrahehhaerha", content: "tamdghdhdfh"},
    {head: "coś", content: "tam"},
    {head: "cośśśśśśśśś", content: "taaaaaaaaaaammmmmmmmmmmm"},
    {head: "cośdfhdahrahehhaerha", content: "tamdghdhdfh"},
    {head: "coś", content: "tam"},
    {head: "cośśśśśśśśś", content: "taaaaaaaaaaammmmmmmmmmmm"},
    {head: "cośdfhdahrahehhaerha", content: "tamdghdhdfh"},
    {head: "coś", content: "tam"},
    {head: "cośśśśśśśśś", content: "taaaaaaaaaaammmmmmmmmmmm"},
    {head: "cośdfhdahrahehhaerha", content: "tamdghdhdfh"},
    {head: "coś", content: "tam"},
    {head: "cośśśśśśśśś", content: "taaaaaaaaaaammmmmmmmmmmm"},
    {head: "cośdfhdahrahehhaerha", content: "tamdghdhdfh"},
    {head: "coś", content: "tam"},
    {head: "cośśśśśśśśś", content: "taaaaaaaaaaammmmmmmmmmmm"},
    {head: "cośdfhdahrahehhaerha", content: "tamdghdhdfh"},
    
  ]
  
  ngOnInit(): void {}

  showAddDialog(){
    const containerRef = this.dialogHost.viewContainerRef;
    containerRef.clear();

    const componentRef = containerRef.createComponent(AddOpinionDialogComponent);
    this.dialogSub = componentRef.instance.close.subscribe(()=>{
      this.dialogSub.unsubscribe();
      containerRef.clear();
    })
  }

}
