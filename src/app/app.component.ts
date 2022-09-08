import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuBarComponent } from './shared/components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    MenuBarComponent
  ]
})
export class AppComponent {
  
  constructor(){}
}
