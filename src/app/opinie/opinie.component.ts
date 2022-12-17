import { Component, inject, OnInit } from '@angular/core';
import { OpinionsService } from '../core/services/opinions/opinions.service';
import { Opinions } from '../core/types/interfaces';

@Component({
  selector: 'opn-opinie',
  templateUrl: './opinie.component.html',
  styleUrls: ['./opinie.component.scss'],
})
export class OpinieComponent implements OnInit {

  private opinionsService = inject(OpinionsService);
  protected allOpinions: Opinions[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.opinionsService.GetOpinionFromDatabase().then(op => {
      if(op !== null && op !== undefined){
        this.allOpinions = op;
      }
    });
  }

}
