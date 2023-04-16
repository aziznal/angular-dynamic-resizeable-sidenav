import { Component, HostBinding, HostListener } from '@angular/core';

import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  resizingEvent = {
    // whether the user is currently resizing the sidenav
    isResizing: false,

    // the x coordinate of the mouse when the user started resizing
    startingCursorX: 0,

    // the width of the sidenav when the user started resizing
    startingWidth: 0,
  };

  constructor(public sidenavService: SidenavService) {}

  @HostBinding('class.resizing')
  get isResizing(): boolean {
    return this.resizingEvent.isResizing;
  }

  @HostBinding('class.is-expanded')
  get isExpanded() {
    return this.sidenavService.isExpanded;
  }

  startResizing(event: MouseEvent): void {
    this.resizingEvent = {
      isResizing: true,
      startingCursorX: event.clientX,
      startingWidth: this.sidenavService.sidenavWidth,
    };
  }

  @HostListener('window:mousemove', ['$event'])
  updateSidenavWidth(event: MouseEvent) {
    if (!this.resizingEvent.isResizing) {
      return;
    }

    const cursorDeltaX = event.clientX - this.resizingEvent.startingCursorX;

    const newWidth = this.resizingEvent.startingWidth + cursorDeltaX;

    this.sidenavService.setSidenavWidth(newWidth);
  }

  @HostListener('window:mouseup')
  stopResizing() {
    this.resizingEvent.isResizing = false;
  }
}
