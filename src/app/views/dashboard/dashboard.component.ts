import { Component, inject, OnInit, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'opn-app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private router = inject(Router);
  
  constructor() {}

  ngOnInit(): void {
  }

  navigateTo(str: String): void{
    switch(str){
      case 'log':
        this.router.navigate(["logowanie"]);
      break;
      case 'res':
        this.router.navigate(["rejestracja"]);
      break;
    }
  }
}
