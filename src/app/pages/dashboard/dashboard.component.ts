import { Component, OnInit, } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PaneContainerComponent } from 'src/app/shared/components/pane-container/pane-container.component';
import { MenuBarComponent } from '../../shared/components/menu-bar/menu-bar.component';

@Component({
    selector: 'opn-app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    imports: [PaneContainerComponent, MenuBarComponent, RouterLink]
})
export class DashboardComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
