import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'opn-pane-container',
  templateUrl: './pane-container.component.html',
  styleUrls: ['./pane-container.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class PaneContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
