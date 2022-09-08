import { Component, OnInit, } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OpinieContainerComponent } from '../shared/components/opinie-container/opinie-container.component';
import { OpinieContentComponent } from '../shared/components/opinie-container/opinie-content/opinie-content.component';
import { OpinieHeaderComponent } from '../shared/components/opinie-container/opinie-header/opinie-header.component';
import { PaneContainerComponent } from '../shared/components/pane-container/pane-container.component';

@Component({
  selector: 'opn-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    PaneContainerComponent,
    OpinieContainerComponent,
    OpinieHeaderComponent,
    OpinieContentComponent,
    RouterModule
  ]
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
}
