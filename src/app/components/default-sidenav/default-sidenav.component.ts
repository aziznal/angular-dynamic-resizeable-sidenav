import { Component } from '@angular/core';

import { SidenavLinkComponent } from '../sidenav-link/sidenav-link.component';

@Component({
  template: `
    <h1>Sidenav</h1>

    <app-sidenav-link
      routerLink="/home"
      [routerLinkActiveOptions]="{ exact: true }"
    >
      Home
    </app-sidenav-link>

    <app-sidenav-link routerLink="/profile">Profile</app-sidenav-link>

    <app-sidenav-link routerLink="screen-1">Screen 1</app-sidenav-link>

    <app-sidenav-link routerLink="screen-2">Screen 2</app-sidenav-link>

    <app-sidenav-link routerLink="/settings"> Settings → </app-sidenav-link>
  `,
  standalone: true,
  imports: [SidenavLinkComponent],
})
export class DefaultSidenavComponent {}
