import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'opn-app-loginned',
  templateUrl: './loginned.component.html',
  styleUrls: ['./loginned.component.scss']
})
export class LoginnedComponent implements OnInit {

  constructor() {}

  @ViewChild('opinionTopic') opTopic!: ElementRef
  @ViewChild('opinionContent') opContent!: ElementRef
  
  ngOnInit(): void {}

}
