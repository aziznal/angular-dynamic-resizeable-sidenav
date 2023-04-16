import { Injectable } from '@angular/core';

import { SidenavContentAreaDirective } from './sidenav-content-area.directive';

import type { Type as Component } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  readonly sidenavMinWidth = 250;

  readonly sidenavMaxWidth = window.innerWidth - 300;

  isExpanded = true;

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

  get sidenavWidth(): number {
    return parseInt(
      getComputedStyle(document.body).getPropertyValue('--sidenav-width'),
      10
    );
  }

  /**
   * Sets the width of the sidenav to given number (clamped between a min and a max) as pixels.
   */
  setSidenavWidth(width: number) {
    const clampedWidth = Math.min(
      Math.max(width, this.sidenavMinWidth),
      this.sidenavMaxWidth
    );

    document.body.style.setProperty('--sidenav-width', `${clampedWidth}px`);
  }

  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
  }

  expandSidenav() {
    this.isExpanded = true;
  }

  collapseSidenav() {
    this.isExpanded = false;
  }

  setDynamicContentArea(host: SidenavContentAreaDirective) {
    this.#contentArea = host;
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

  get #lastStackItem(): Component<unknown> {
    return this.#stack[this.#stack.length - 1];
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
