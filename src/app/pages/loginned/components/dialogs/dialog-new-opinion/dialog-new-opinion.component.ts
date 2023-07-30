import { Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { OpinionsService } from 'src/app/core/services/opinions/opinions.service';
import { ProductService } from 'src/app/core/services/product/product.service';
import { UserStoreService } from 'src/app/core/services/user/user-store.service';
import { CreateOpinion } from 'src/app/core/types/functions';
import { Opinions } from 'src/app/core/types/interfaces';
import { Product } from 'src/app/core/types/models/product.model';
import { DialogServiceService } from './dialog-service.service';

@Component({
  selector: 'opn-dialog-new-opinion',
  templateUrl: './dialog-new-opinion.component.html',
  styleUrls: ['./dialog-new-opinion.component.scss']
})
export class DialogNewOpinionComponent implements OnInit, OnDestroy {
  @ViewChild('area') textAreaElement!: ElementRef;
  protected valu = "";
  protected _ViewSelected = 0;
  protected dialogNewService = inject(DialogServiceService);
  protected opinionsService = inject(OpinionsService);
  protected userStoreService = inject(UserStoreService);
  protected productService = inject(ProductService);
  nm: Product[] = [];

  protected uName: string = "Anonim";
  private uUuid: string = "";
  private sub?: Subscription;

  constructor(){
    if(this.userStoreService.getUser() !== null){
      if(this.userStoreService.getUser().hasOwnProperty("user")){
        this.uName = this.userStoreService.getUser().user.name;
        this.uUuid = this.userStoreService.getUser().user.user_uuid;
      }else{
        this.uName = this.userStoreService.getUser().name;
        this.uUuid = this.userStoreService.getUser().user_uuid;
      }
    }
    this.productService.getProductsFromDatabase().then(r => {
      this.nm = r;
    });
  }

  ngOnInit(): void{}

  backView(){
    if(this._ViewSelected === 1){
      this._ViewSelected = 0;
    }
  }

  toogle(str: string){
    if(this._ViewSelected === 0){
      this.valu = str;
      this._ViewSelected = 1;
    }
  }

  onPublishOpinion(){
    let newOpinionObj: Opinions = CreateOpinion(this.uUuid, this.uName, 
      Math.floor(Math.random() * 1000), this.valu, 
      this.textAreaElement.nativeElement.value);
    this.opinionsService.SendOpinionToDatabase(newOpinionObj);
    this.textAreaElement.nativeElement.value = "";
    this._ViewSelected = 0;
    this.dialogNewService.closeNewDialog();
  }

  starMeterOutput(output: number){
    console.log(output);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
