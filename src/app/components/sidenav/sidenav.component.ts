import { Component, ViewChild } from '@angular/core';

import { SidenavService } from './sidenav.service';

import { SidenavContentAreaDirective } from './sidenav-content-area.directive';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @ViewChild(SidenavContentAreaDirective, { static: true })
  sidenavContentArea?: SidenavContentAreaDirective;

  constructor(public sidenavService: SidenavService) {}

  ngOnInit(): void {
    if (!this.sidenavContentArea) {
      throw new Error('sidenavContentArea is undefined');
    }

    this.sidenavService.setDynamicContentArea(this.sidenavContentArea);
  }
}
