import { Component, inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { OpinionsService } from '../core/services/opinions/opinions.service';
import { changeEvent, Opinions } from '../core/types/interfaces';

@Component({
  selector: 'opn-loginned',
  templateUrl: './loginned.component.html',
  styleUrls: ['./loginned.component.scss']
})
export class LoginnedComponent implements OnInit{
  @ViewChild("opn", {read: ViewContainerRef, static: true}) opn!: ViewContainerRef;

  protected opinionsService = inject(OpinionsService);

  constructor() {
    this.opinionsService.GetOpinionFromDatabase();
  }

  ngOnInit(): void {}

  sendData(data: Opinions){
    this.opinionsService.SendOpinionToDatabase(data);
  }
}
