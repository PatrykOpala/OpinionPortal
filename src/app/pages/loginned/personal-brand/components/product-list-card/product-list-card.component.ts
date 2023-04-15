import { Component, Input } from '@angular/core';

@Component({
  selector: 'opn-product-list-card',
  templateUrl: './product-list-card.component.html',
  styleUrls: ['./product-list-card.component.scss']
})
export class ProductListCardComponent {
  @Input() cardHeader: string = "";
  @Input() cardContent: string = "";
}
