import { Component, OnInit, } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoOpinierComponent } from 'src/app/components/logo-opinier/logo-opinier.component';
import { OpinieContainerComponent } from 'src/app/components/opinie-container/opinie-container.component';
import { PaneContainerComponent } from 'src/app/components/pane-container/pane-container.component';

@Component({
  selector: 'opn-app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [PaneContainerComponent, LogoOpinierComponent, OpinieContainerComponent, RouterModule]
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
}
