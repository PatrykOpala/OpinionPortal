import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ChangeState } from '../../../core/types/typesOpinier';

@Component({
  selector: 'opn-choose-company',
  templateUrl: './choose-company.component.html',
  styleUrls: ['./choose-company.component.scss'],
  // standalone: true
})
export class ChooseCompanyComponent implements OnInit {

  @Input('chooseValue') chooseValue: string = "";
  @Output('changeState') state = new EventEmitter<ChangeState>();

  constructor() { }

  ngOnInit(): void {}

  radioChange(e: Event){
    let state: ChangeState = {
      formArm: (e.target as HTMLInputElement).value,
      headOpinion: (e.target as HTMLInputElement).value
    }
    this.state.emit(state);
  }
}
