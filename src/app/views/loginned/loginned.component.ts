import { Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { Opinions } from 'src/shared/utils/ts/interfaces/opinion.interface';
import { DialogDirective } from 'src/shared/utils/ts/directives/dialog.directive';
import { FormService } from '../../services/form/form.service';
import { AddOpinionComponent } from 'src/app/components/add-opinion/add-opinion.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'opn-loginned',
  templateUrl: './loginned.component.html',
  styleUrls: ['./loginned.component.scss']
})
export class LoginnedComponent implements OnInit {
  @ViewChild(DialogDirective) dialogD!: DialogDirective;

  yourOpinionsPublishing: Opinions[] = [];
  protected userObjectFromLocalStorage: any;
  
  constructor(protected formService: FormService, protected viewContainerRef: ViewContainerRef, private authService: AuthService, private logOutRouter: Router) {
    if(window.localStorage.getItem("user")){
      this.userObjectFromLocalStorage = JSON.parse(window.localStorage.getItem("user")as string);
      console.log(this.userObjectFromLocalStorage);
    }
  }
  
  ngOnInit(): void {
    this.viewContainerRef.clear();
    this.formService.opinionPublish$.subscribe(c => {
      this.yourOpinionsPublishing = c.opinion;
    });
  }
  
  runAdd(): void{
    const DialogComponentRef = this.viewContainerRef.createComponent(AddOpinionComponent);
    DialogComponentRef.instance.ser = this.formService;

    DialogComponentRef.instance.close.asObservable().subscribe((e)=>{
      if(e){this.viewContainerRef.clear(); }
    })
  }

  signOut(){
    let logOutError = this.authService.logOut();
    logOutError.then(er => {
      if(!er && er === null){
        this.logOutRouter.navigateByUrl("/");
      }
    })
  }
}
