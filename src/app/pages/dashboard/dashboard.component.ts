import { Component, OnInit, } from '@angular/core';
import { PaneContainerComponent } from 'src/app/core/shared/components/pane-container/pane-container.component';

@Component({
  selector: 'opn-app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [PaneContainerComponent]
})
export class DashboardComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
