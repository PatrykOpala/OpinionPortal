import { Component, inject, OnInit } from '@angular/core';
import { UserStoreAbstract } from 'src/app/core/types/classes/user-store-abstract.class';
import { OpinionsService } from '../../core/services/opinions/opinions.service';
import { DialogServiceService } from './components/dialogs/dialog-new-opinion/dialog-service.service';
import { PaneContainerComponent } from 'src/app/core/shared/components/pane-container/pane-container.component';
import { OpinieContainerComponent } from 'src/app/core/shared/components/opinie-container/opinie-container.component';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'opn-loginned',
  templateUrl: './loginned.component.html',
  styleUrls: ['./loginned.component.scss'],
  standalone: true,
  imports: [PaneContainerComponent, OpinieContainerComponent, NgIf, NgForOf]
})
export class LoginnedComponent extends UserStoreAbstract implements OnInit{
  protected opinionsService = inject(OpinionsService);
  protected dialogNew = inject(DialogServiceService);
  constructor() {
    super()
    
    this.opinionsService.GetOpinionFromDataBase();
  }
  ngOnInit(): void {}
}