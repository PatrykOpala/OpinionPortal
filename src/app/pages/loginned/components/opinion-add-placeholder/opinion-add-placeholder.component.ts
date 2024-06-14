import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'opn-opinion-add-placeholder',
  standalone: true,
  imports: [],
  templateUrl: './opinion-add-placeholder.component.html',
  styleUrl: './opinion-add-placeholder.component.scss'
})
export class OpinionAddPlaceholderComponent {
  @Output() navigateToEvent = new EventEmitter<boolean>(false); 
  
  sendNavigateToEvent(){
    this.navigateToEvent.emit(true);
  }
}
