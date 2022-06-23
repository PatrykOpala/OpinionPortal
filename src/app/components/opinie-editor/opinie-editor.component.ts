import { ChangeDetectionStrategy, Component, OnInit,} from '@angular/core';

@Component({
  selector: 'opn-opinie-editor',
  templateUrl: './opinie-editor.component.html',
  styleUrls: ['./opinie-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpinieEditorComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

}
