import { Directive, OnDestroy, TemplateRef } from '@angular/core';
import {TeleportService} from '../teleport.service';

@Directive({
  selector: '[opnTeleportTo]'
})
export class TeleportToDirective implements OnDestroy{

  constructor(
    private readonly templateRef: TemplateRef<unknown>,
    private readonly teleportService: TeleportService
  ) {
    this.teleportService.startTeleportation(this.templateRef);
  }
  
  ngOnDestroy(): void {
    this.teleportService.finishTeleportation();
  }
}
