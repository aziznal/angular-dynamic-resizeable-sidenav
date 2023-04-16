import { SettingsSidenavComponent } from './../../sidenavs/settings-sidenav/settings-sidenav.component';
import { Component } from '@angular/core';
import { SidenavService } from '../../components/sidenav/sidenav.service';

@Component({
  template: `<h1>Settings</h1>`,
})
export class SettingsComponent {
  constructor(public sidenavService: SidenavService) {}

  ngAfterViewInit(): void {
    this.sidenavService.push(SettingsSidenavComponent);
  }

  ngOnDestroy(): void {
    this.sidenavService.pop();
  }
}
