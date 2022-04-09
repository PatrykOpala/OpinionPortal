import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AddOpinionService } from 'src/app/addopinion.service';

@Component({
  selector: 'opn-app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private ads: AddOpinionService, private router: Router) {}

  @ViewChild("log") loginElement!: ElementRef;
  @ViewChild("res") registerElement!: ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.loginElement.nativeElement.addEventListener("click", ()=>{
      this.router.navigate(["logowanie"]);
    });
    this.registerElement.nativeElement.addEventListener("click", ()=>{
      this.router.navigate(["rejestracja"]);
    });
  }
}
