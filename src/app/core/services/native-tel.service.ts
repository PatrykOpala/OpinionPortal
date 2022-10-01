import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NativeTelService {

  constructor() { }

  teleport(contentId: string, portalOutletId: string = "vc"): void{
    const content = document.getElementById(contentId);
    if(content){
      document.getElementById(portalOutletId)?.append(content);
    }
  }

  finishTeleportation(contentId: string, portalOutletId: string = "vc"): void{
    const content = document.getElementById(contentId);
    if(content){
      document.getElementById(portalOutletId)?.append(content);
    }
  }
}
