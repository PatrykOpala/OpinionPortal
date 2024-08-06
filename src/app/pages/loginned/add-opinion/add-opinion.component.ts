import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { OpinionsService } from 'src/app/services/opinions/opinions.service';
import { ProductService } from 'src/app/services/product/product.service';
import { UserStoreService } from 'src/app/services/user/user-store.service';
import { CreateOpinion } from 'src/app/types/functions';
import { Opinions } from 'src/app/types/types';
import { Product } from 'src/app/types/models/product.model';
import { DialogServiceService } from '../components/dialogs/dialog-new-opinion/dialog-service.service';
import { TypeProduct } from 'src/app/types/enums';

@Component({
  selector: 'opn-add-opinion',
  standalone: true,
  imports: [],
  templateUrl: './add-opinion.component.html',
  styleUrl: './add-opinion.component.scss'
})
export class AddOpinionComponent {
  @ViewChild('area') textAreaElement!: ElementRef;
  protected _ViewSelected = 0;
  protected valu = "dupa wołowa";
  protected uName: string = "Anonim";
  protected dialogNewService = inject(DialogServiceService);
  protected opinionsService = inject(OpinionsService);
  protected userStoreService = inject(UserStoreService);
  protected productService = inject(ProductService);
  private uUuid: string = "";
  nm: Product[] = [
    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },
    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },
    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },
    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },
    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },
    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },
    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },
    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },

    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },
    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },
    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },
    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },
    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },

    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },
    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },
    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },
    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },
    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },
    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },
    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },
    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },
    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },
    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },
    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },
    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },
    {
      id: 2,
      name: "dupa",
      type_product: TypeProduct.PRODUCT,
      description: "temat ciekawy",
      user_id: "xxxx-xxxx-xxxx-xxxx"
    },
  ];

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
}
