import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'opn-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(protected logoutRouter: Router) { }

  ngOnInit(): void {
    this.logoutRouter.navigate(['/']);
  }

}
