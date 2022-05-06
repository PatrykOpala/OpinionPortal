import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'opn-add-opinion-dialog',
  templateUrl: './add-opinion-dialog.component.html',
  styleUrls: ['./add-opinion-dialog.component.scss']
})
export class AddOpinionDialogComponent implements OnInit {

  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.close.emit();
  }

}
