import { Injectable, Type as ComponentType } from '@angular/core';

import { SidenavContentHostDirective } from './sidenav-content-host.directive';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  #contentHost?: SidenavContentHostDirective;

  #stack = [] as ComponentType<unknown>[];

  slideIn = false;
  slideOut = false;

  setContentHost(host: SidenavContentHostDirective) {
    this.#contentHost = host;
  }

  async push(component: ComponentType<unknown>) {
    this.#stack.push(component);

    await this.#animateOut();

    this.#setContent(component);

    this.#animateIn();
  }

  async pop(): Promise<void> {
    // at least one component should be in the stack
    if (this.#stack.length === 1) {
      return;
    }

    this.#stack.pop();

    const component = this.#getLastStackItem();

    await this.#animateOut();

    this.#setContent(component);

    this.#animateIn();
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

  async #animateOut() {
    this.slideOut = true;

    await new Promise<void>((resolve) => {
      setTimeout(() => {
        this.slideOut = false;

        resolve();
      }, 300);
    });
  }

  async #animateIn() {
    this.slideIn = true;

    await new Promise<void>((resolve) => {
      setTimeout(() => {
        this.slideIn = false;

        resolve();
      }, 300);
    });
  }
}
