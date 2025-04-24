import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'opn-rejestracja-step',
    template: `<div class="flex justify-center items-center w-full h-20">
                <div class="flex flex-col justify-center items-center mx-3">
                    <span [ngClass]="step === 1 ? 'w-[60px] h-9 rounded bg-green text-white text-center flex justify-center items-center text-2xl' : 'w-8 h-8 rounded-full bg-transparent text-center flex justify-center items-center text-2xl'">1</span>
                    <span class="mt-1 text-base">Wpisz dane konta</span>
                </div>
              </div>`,
    imports: [NgClass]
})
export class RejestracjaStepComponent implements OnInit {
  @Input() step!: number;
  constructor() { }
  ngOnInit(): void {}
}
