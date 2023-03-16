import { Component } from '@angular/core';

import { SidenavService } from '../../components/sidenav/sidenav.service';

import { ProfileSettingsSidenavComponent } from './profile-settings-sidenav.component';

@Component({
  template: `<h1>Profile Settings</h1>`,
  standalone: true,
})
export class ProfileSettingsComponent {
  constructor(private sidenavService: SidenavService) {}

  ngOnInit(): void {
    this.sidenavService.push(ProfileSettingsSidenavComponent);
  }

  ngOnDestroy(): void {
    this.sidenavService.pop();
  }
}
