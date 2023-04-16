import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[sidenavContentArea]',
})
export class SidenavContentAreaDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
