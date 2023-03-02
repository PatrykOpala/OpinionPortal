import { Component, inject, OnInit } from '@angular/core';
import { OpinionsService } from '../core/services/opinions/opinions.service';
import { DialogServiceService } from './components/dialogs/dialog-new-opinion/dialog-service.service';

@Component({
  selector: 'opn-loginned',
  templateUrl: './loginned.component.html',
  styleUrls: ['./loginned.component.scss']
})
export class LoginnedComponent implements OnInit{
  protected opinionsService = inject(OpinionsService);
  protected dialogNew = inject(DialogServiceService);
  constructor() {
    this.opinionsService.databaseQuery.getAllFromDatabase('opinions').then(rr => {
      const nub = rr.filter((r: any)=> r.user_name === JSON.parse(localStorage.getItem("nsdjlnsf") as string).user);
      this.opinionsService.InitialDataInStore(nub);
    });
  }
  ngOnInit(): void {}
}
