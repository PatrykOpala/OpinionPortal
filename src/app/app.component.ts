import {Component} from '@angular/core';
import { MenuBarComponent } from './core/shared/components/menu-bar/menu-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MenuBarComponent, RouterOutlet]
})
export class AppComponent {

  constructor(){}
}
