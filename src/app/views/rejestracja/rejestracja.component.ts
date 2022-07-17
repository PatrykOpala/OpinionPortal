import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AddOpinionService } from 'src/app/addopinion.service';

@Component({
  selector: 'opn-rejestracja',
  templateUrl: './rejestracja.component.html',
  styleUrls: ['./rejestracja.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class RejestracjaComponent implements OnInit {

  @ViewChild("upEmail") EmailField!: ElementRef;
  @ViewChild("upPassword") PasswordField!: ElementRef;

  constructor(private route: Router, private ads: AddOpinionService) { }

  ngOnInit(): void {
  }

  signUp(): void{
    let email = this.EmailField.nativeElement.value;
    let password = this.PasswordField.nativeElement.value;
    console.log(this.ads.register(email, password));
    // this.route.navigate(["/loginned"]);
  }

}
