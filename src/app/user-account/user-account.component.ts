import { Component, OnInit } from '@angular/core';
import { PaneContainerComponent } from '../shared/components/pane-container/pane-container.component';

@Component({
  selector: 'opn-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss'],
  standalone: true,
  imports: [
    PaneContainerComponent
  ]
})
export class UserAccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
