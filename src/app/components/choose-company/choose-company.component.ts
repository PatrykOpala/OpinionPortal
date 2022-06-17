import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Company } from 'src/shared/utils/ts/interfaces/company';

@Component({
  selector: 'opn-choose-company',
  templateUrl: './choose-company.component.html',
  styleUrls: ['./choose-company.component.scss']
})
export class ChooseCompanyComponent implements OnInit {

  @Output() selectCompanyName = new EventEmitter<Company>();
  @ViewChild('nameP') nameParagraph!: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

  selectCompany(){
    this.selectCompanyName.emit({label: this.nameParagraph.nativeElement.textContent});
  }

}
