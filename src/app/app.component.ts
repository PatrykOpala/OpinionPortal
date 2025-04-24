import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './shared/components/menu-bar/menu-bar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterOutlet, MenuBarComponent]
})
export class AppComponent {
  constructor(){}
}
