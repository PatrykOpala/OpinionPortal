import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'opn-rejestracja-step',
  templateUrl: './rejestracja-step.component.html',
  styleUrls: ['./rejestracja-step.component.scss']
})
export class RejestracjaStepComponent implements OnInit {
  placeholder = 0;
  placeholder$?: Observable<string>;
  accountLabel: string = "";
  constructor(private rejestracjaRoute: ActivatedRoute, private nextRouter: Router) { }
  ngOnInit(): void {
   this.placeholder$ = this.rejestracjaRoute.paramMap.pipe(switchMap((param: ParamMap)=> param.get('idstep')!));
   this.placeholder$.subscribe(r => {
    if(Number(r) === 1) this.placeholder = 0;
    if(Number(r) === 2) this.placeholder = 1;
    if(Number(r) > 2) this.nextRouter.navigateByUrl("/");
   })
  }
  setAccountLabel(event: string){
    this.accountLabel = event;
    this.nextRouter.navigateByUrl("rejestracja/step/2");
  }
}
