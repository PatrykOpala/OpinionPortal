import { Component, inject, OnInit } from '@angular/core';
import { OpinionsService } from '../../core/services/opinions/opinions.service';
import { Opinions } from '../../core/types/interfaces';

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
    this.opinionsService.databaseQuery.getAllFromDatabase<Opinions>('opinions').then(op => this.allOpinions = op);
  }
}
