import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'opn-star-meter',
  templateUrl: './star-meter.component.html',
  styleUrls: ['./star-meter.component.scss']
})
export class StarMeterComponent {

  check: boolean = false;
  private maxStar = 5;

  @Output() activeNumber = new EventEmitter<number>();

  @HostListener('mouseover', ["$event.target"])
  starMeterTestHostListener(btn2: any){
    if(!this.check){
      if((btn2 as HTMLElement).localName === "label"){
        let bk = document.getElementById("star_meter-comp")?.childNodes;
        this.resetChecks(bk);
        let bID = Number((btn2 as HTMLElement).id);
        this.checkElements(bk, bID);
      }
      return
    }
    return
  }

  @HostListener('mouseleave', ["$event.target"])
  unCheckElements(btn2: any){
    if((btn2.childNodes[0].childNodes[0] as HTMLElement).localName === "label"){
      let bk = document.getElementById("star_meter-comp")?.childNodes;
      this.resetChecks(bk);
    }
    return
  }

  @HostListener('click', ["$event.target"])
  starMeterTest(labelElement: any){
    if(labelElement.localName === "label"){
      if(this.check !== true){
        let bID = Number((labelElement as HTMLElement).id);
        let bk = document.getElementById("star_meter-comp")?.childNodes;
        this.activateElements(bk, bID);
        this.check = true;
        this.activeNumber.emit(bID);

        document.getElementById("star_meter-comp")?.childNodes.forEach((v) => {
          if(Number((v as HTMLElement).id) === this.maxStar){
            return;
          }else{
            document.getElementById(`${Number((v as HTMLElement).id) + 1}`)
            ?.addEventListener("click", (ev) => ev.preventDefault())
          }
        })
      }
    }
    return;
  }

  activateElements(array: NodeListOf<ChildNode> | undefined, id: number){
    array?.forEach((bbb) => {
      if(Number((bbb as HTMLElement).id) <= id){
        (bbb as HTMLElement).classList.add("active_input");
      }else{
        return;
      }
    });
  }

  checkElements(array: NodeListOf<ChildNode> | undefined, id: number){
    array?.forEach((bbb) => {
      if(Number((bbb as HTMLElement).id) <= id){
        (bbb as HTMLElement).classList.add("check_input");
      }else{
        return;
      }
    });
  }

  resetChecks(array: NodeListOf<ChildNode> | undefined){
    array?.forEach((bbb) => {
      (bbb as HTMLElement).classList.remove("check_input");
    });
  }
}
