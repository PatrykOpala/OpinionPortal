import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { OpinionsService } from '../core/services/opinions/opinions.service';
import { Opinions } from '../core/types/interfaces';

@Component({
  selector: 'opn-loginned',
  templateUrl: './loginned.component.html',
  styleUrls: ['./loginned.component.scss']
})
export class LoginnedComponent implements OnInit, AfterViewInit{
  protected opinionsService = inject(OpinionsService);
  constructor() {
    this.opinionsService.databaseQuery.getAllFromDatabase('opinions').then(rr => this.opinionsService.InitialDataInStore(rr));
  }
  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {}
  sendData(data: Opinions){
    this.opinionsService.SendOpinionToDatabase(data);
  }
}
