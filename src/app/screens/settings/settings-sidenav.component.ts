import { SidenavLinkComponent } from './../../components/sidenav-link/sidenav-link.component';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Settings</h1>

    <app-sidenav-link routerLink="/">← Back</app-sidenav-link>

    <app-sidenav-link routerLink="/settings/account">
      Account
    </app-sidenav-link>

    <app-sidenav-link routerLink="/settings/security">
      Security
    </app-sidenav-link>

    <app-sidenav-link routerLink="/settings/notifications">
      Notifications
    </app-sidenav-link>

    <app-sidenav-link routerLink="/settings/privacy">
      Privacy
    </app-sidenav-link>

    <app-sidenav-link routerLink="/settings/blocked">
      Blocked
    </app-sidenav-link>

    <app-sidenav-link routerLink="/settings/deactivate">
      Deactivate
    </app-sidenav-link>

    <app-sidenav-link routerLink="/settings/close"> Close </app-sidenav-link>

    <app-sidenav-link routerLink="/settings/report"> Report </app-sidenav-link>

    <app-sidenav-link routerLink="/settings/help"> Help </app-sidenav-link>
  `,
  standalone: true,
  imports: [RouterModule, SidenavLinkComponent],
})
export class SettingsSidenavComponent {}
