import { Directive, OnDestroy, ViewContainerRef } from '@angular/core';
import { TeleportService } from '../teleport.service';

@Directive({
  selector: '[opnTeleportOutlet]'
})
export class TeleportOutletDirective implements OnDestroy {
  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly teleportService: TeleportService
  ) {
    this.teleportService.registerPortalOutlet(this.viewContainerRef);
  }
  
  ngOnDestroy(): void {
    this.teleportService.unregisterPortalOutlet();
  }
}
