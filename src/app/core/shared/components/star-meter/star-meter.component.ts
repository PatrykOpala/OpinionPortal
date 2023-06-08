import { Component } from '@angular/core';

@Component({
  selector: 'opn-star-meter',
  templateUrl: './star-meter.component.html',
  styleUrls: ['./star-meter.component.scss']
})
export class StarMeterComponent {

  starMeterTest(event: any){
    event.target.parentElement.classList.add("active_input");
    console.log(document.getElementsByClassName("active_input").length);
  }
}
