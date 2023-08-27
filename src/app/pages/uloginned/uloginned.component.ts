import { Component } from '@angular/core';
import { LOCAL_STORAGE_KEYS } from 'src/app/core/types/constants';

@Component({
  selector: 'opn-uloginned',
  templateUrl: './uloginned.component.html',
  styleUrls: ['./uloginned.component.scss']
})
export class UloginnedComponent {
  constructor(){
    console.log(JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEYS.userAuthentication) as string));
  }
}
