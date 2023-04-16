import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Sidenav</h1>

    <app-sidenav-link
      routerLink="/"
      [routerLinkActiveOptions]="{ exact: true }"
    >
      <mat-icon icon> arrow_back </mat-icon>

      Back
    </app-sidenav-link>

    <app-sidenav-link routerLink="/settings/account">
      <mat-icon icon> person </mat-icon>

      Account
    </app-sidenav-link>

    <app-sidenav-link routerLink="/settings/security">
      <mat-icon icon> security </mat-icon>

      Security
    </app-sidenav-link>

    <app-sidenav-link routerLink="/settings/notifications">
      <mat-icon icon> notifications </mat-icon>

      Notifications
    </app-sidenav-link>
  `,
})
export class SettingsSidenavComponent {}
