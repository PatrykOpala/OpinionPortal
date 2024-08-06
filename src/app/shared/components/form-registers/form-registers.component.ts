import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'opn-form-registers',
  template: `<form class="w-max h-max flex items-center flex-col mt-4"><ng-content></ng-content></form>`,
  standalone: true
})
export class FormRegistersComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
