import { Component, ElementRef, OnInit, ViewChild, OnChanges, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'opn-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.scss']
})
export class LogowanieComponent implements OnInit, OnChanges {

  @ViewChild("uEmail") EmailField!: ElementRef;
  @ViewChild("uPassword") PasswordField!: ElementRef;

  protected emailL = "";
  protected passL = "";

  constructor(private route: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    for(let prop in changes){
      let ch = changes[prop];
      console.log('PreviousValue: ', ch.previousValue);
      console.log('CurrentValue: ', ch.currentValue)
    }
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.route.navigateByUrl("/zalogowano")
  }

  // signIn(): void{
  //   let email = this.EmailField.nativeElement.value;
  //   let password = this.PasswordField.nativeElement.value;
  //   console.log(this.ads.login(email, password));
  //   this.route.navigate(["/loginned"]);
  // }
}
