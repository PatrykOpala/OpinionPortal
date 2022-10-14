import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, ObservableInput, switchMap } from 'rxjs';

@Component({
  selector: 'opn-rejestracja-step',
  templateUrl: './rejestracja-step.component.html',
  styleUrls: ['./rejestracja-step.component.scss']
})
export class RejestracjaStepComponent implements OnInit {
  placeholder = 0;
  placeholder$?: ObservableInput<any>
  constructor(private rejestracjaRoute: ActivatedRoute) { }
  ngOnInit(): void {
   this.placeholder$ = this.rejestracjaRoute.paramMap.pipe(switchMap((param: ParamMap)=>
   param.get('idstep')!));
   this.placeholder$.subscribe(r => {
    if(r === 1){
      this.placeholder = 0
    }
   })
  }

}
