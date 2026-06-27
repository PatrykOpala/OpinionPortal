import { Component, Input } from '@angular/core';

@Component({
    selector: 'opn-auth',
    imports: [],
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.css'
})
export class AuthComponent {
@Input()
  type: string = "";
}
