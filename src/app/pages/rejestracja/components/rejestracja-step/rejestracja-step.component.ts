import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'opn-rejestracja-step',
  templateUrl: './rejestracja-step.component.html',
  styleUrls: ['./rejestracja-step.component.scss'],
  standalone: true,
  imports: [NgClass]
})
export class RejestracjaStepComponent implements OnInit {
  @Input() step!: number;
  constructor() { }
  ngOnInit(): void {}
}
