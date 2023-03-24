import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[sidenavContentHost]',
})
export class SidenavContentHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
