import { SidenavContentHostDirective } from './sidenav-content-host.directive';
import { Injectable, Type as ComponentType } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  #contentHost?: SidenavContentHostDirective;

  #stack = [] as ComponentType<unknown>[];

  setContentHost(host: SidenavContentHostDirective) {
    this.#contentHost = host;
  }

  push(component: ComponentType<unknown>) {
    this.#stack.push(component);

    this.#setContent(component);
  }

  pop(): void {
    // at least one component should be in the stack
    if (this.#stack.length === 1) {
      return;
    }

    this.#stack.pop();

    const component = this.#getLastStackItem();

    this.#setContent(component);
  }

  #getLastStackItem() {
    return this.#stack.slice(-1)[0];
  }

  #setContent(component: ComponentType<unknown>) {
    this.#contentHost?.viewContainerRef.clear();

    const componentRef =
      this.#contentHost?.viewContainerRef.createComponent(component);

    componentRef?.changeDetectorRef.detectChanges();
  }
}
