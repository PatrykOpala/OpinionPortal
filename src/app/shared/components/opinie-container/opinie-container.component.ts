import { Component, Input, OnInit } from '@angular/core';
import { UserLocalStorage } from 'src/app/core/types/typesOpinier';

@Component({
  selector: 'opn-opinie-container',
  templateUrl: './opinie-container.component.html',
  styleUrls: ['./opinie-container.component.scss'],
  standalone: true
})
export class OpinieContainerComponent implements OnInit {

  @Input("opinie-header") header: string = "";
  @Input("opinie-content") content: string = "";

  @Input("user_name") user_name = "";

  constructor(){}

  ngOnInit(): void {
    // this.user_name = JSON.parse(localStorage.getItem("user") as string);
  }
}
