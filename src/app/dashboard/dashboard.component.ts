import { Component, inject, OnInit, ViewEncapsulation, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'opn-app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private dashRouter = inject(Router);

  constructor() {
    if(window.localStorage.getItem("supabase.auth.token")){
      this.dashRouter.navigateByUrl("/zalogowano");
    }
  }

  ngOnInit(): void {
  }
}
