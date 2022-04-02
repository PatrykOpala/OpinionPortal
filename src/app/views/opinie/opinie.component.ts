import { Component, Input, OnInit } from '@angular/core';
import {Category} from '../../../utils/ts/Category';
import { Observable } from 'rxjs';

@Component({
  selector: 'opn-app-opinie',
  templateUrl: './opinie.component.html',
  styleUrls: ['./opinie.component.scss']
})
export class OpinieComponent implements OnInit {

  jdufnv: Category[]= []

  constructor() {
  }

  ngOnInit(): void {
  }

}
