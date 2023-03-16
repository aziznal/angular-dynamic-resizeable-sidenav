import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[sidenavContentHost]',
  standalone: true,
})
export class SidenavContentHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
