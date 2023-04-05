import { Injectable } from '@angular/core';

import { SidenavContentAreaDirective } from './sidenav-content-area.directive';

import type { Type as Component } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  #contentArea?: SidenavContentAreaDirective;

  #stack = [] as Component<unknown>[];

  isSlidingInFromRight = false;

  isSlidingInFromLeft = false;

  get sidenavTransitionDuration(): number {
    const sidenavTransitionDurationFromCssVariable = getComputedStyle(
      document.body
    ).getPropertyValue('--sidenav-transition-duration');

    return parseInt(sidenavTransitionDurationFromCssVariable, 10);
  }

  setDynamicContentArea(host: SidenavContentAreaDirective) {
    this.#contentArea = host;
  }

  get #lastStackItem(): Component<unknown> {
    return this.#stack[this.#stack.length - 1];
  }

  async push(component: Component<unknown>): Promise<void> {
    this.#stack.push(component);

    this.#setContent(component);

    await this.#animateInFromTheRight();
  }

  async pop(): Promise<void> {
    // At least one item must be in the stack so user isn't left with an empty sidenav
    if (this.#stack.length === 1) {
      return;
    }

    this.#stack.pop();

    this.#setContent(this.#lastStackItem);

    await this.#animateInFromTheLeft();
  }

  #setContent(component: Component<unknown>): void {
    this.#contentArea?.viewContainerRef.clear();

    this.#contentArea?.viewContainerRef.createComponent(component);
  }

  async #animateInFromTheLeft() {
    this.isSlidingInFromLeft = true;

    await this.#sleep(this.sidenavTransitionDuration);

    this.isSlidingInFromLeft = false;
  }

  async #animateInFromTheRight() {
    this.isSlidingInFromRight = true;

    await this.#sleep(this.sidenavTransitionDuration);

    this.isSlidingInFromRight = false;
  }

  #sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
