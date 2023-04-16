import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  readonly sidenavMinWidth = 250;

  readonly sidenavMaxWidth = window.innerWidth - 300;

  isExpanded = true;

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
}
