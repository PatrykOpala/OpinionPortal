import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'opn-rejestracja-step',
  template: `<div class="steps_container">
  <div class="step_element">
      <span [ngClass]="step === 1 ? 'step' : 'step_disabled'">1</span>
      <span class="label">Wpisz dane konta</span>
  </div>
</div>`,
  styleUrls: ['./rejestracja-step.component.scss'],
  standalone: true,
  imports: [NgClass]
})
export class RejestracjaStepComponent implements OnInit {
  @Input() step!: number;
  constructor() { }
  ngOnInit(): void {}
}
