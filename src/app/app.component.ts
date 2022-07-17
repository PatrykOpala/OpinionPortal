import { Component} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AddOpinionService } from './addopinion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule]
})
export class AppComponent {
  constructor(public c: AddOpinionService){}

  logginStat = localStorage.getItem("user");
}
