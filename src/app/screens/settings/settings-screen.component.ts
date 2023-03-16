import { RouterModule } from '@angular/router';
import { SidenavService } from './../../components/sidenav/sidenav.service';
import { Component } from '@angular/core';
import { SettingsSidenavComponent } from './settings-sidenav.component';

@Component({
  template: `
    <h1>Settings Screen</h1>

    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterModule],
})
export class SettingsScreenComponent {
  constructor(private sidenavService: SidenavService) {}

  ngOnInit(): void {
    this.sidenavService.push(SettingsSidenavComponent);
  }

  ngOnDestroy(): void {
    this.sidenavService.pop();
  }
}
