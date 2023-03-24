import { Component } from '@angular/core';

import { SidenavService } from '../../components/sidenav/sidenav.service';

import { SettingsSidenavComponent } from './settings-sidenav.component';

@Component({
  template: `<router-outlet></router-outlet>`,
})
export class SettingsComponent {
  constructor(private sidenavService: SidenavService) {}

  ngOnInit(): void {
    this.sidenavService.push(SettingsSidenavComponent);
  }

  ngOnDestroy(): void {
    this.sidenavService.pop();
  }
}
