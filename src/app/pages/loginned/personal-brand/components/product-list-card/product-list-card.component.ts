import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'opn-product-list-card',
  templateUrl: './product-list-card.component.html',
  standalone: true,
})
export class ProductListCardComponent {
  @Input() cardId: number = 0;
  @Input() cardHeader: string = "";
  @Input() cardSubHeader: string = "";
  @Input() cardContent: string = "";
  @Output() emitDelete = new EventEmitter<number>();  
  deleteProduct(){
    this.emitDelete.emit(this.cardId);
  }
}
