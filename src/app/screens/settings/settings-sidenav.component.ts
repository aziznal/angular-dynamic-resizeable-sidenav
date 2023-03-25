import { Component } from '@angular/core';

@Component({
  template: `
    <h1>
      <mat-icon icon>settings</mat-icon>

      Settings
    </h1>

    <app-sidenav-link routerLink="/">
      <mat-icon icon>arrow_back</mat-icon>

      Back
    </app-sidenav-link>

    <hr />

    <app-sidenav-link routerLink="/settings/account">
      <mat-icon icon>account_circle</mat-icon>

      Account
    </app-sidenav-link>

    <app-sidenav-link routerLink="/settings/security">
      <mat-icon icon>security</mat-icon>

      Security
    </app-sidenav-link>

    <app-sidenav-link routerLink="/settings/notifications">
      <mat-icon icon>notifications</mat-icon>

      Notifications
    </app-sidenav-link>

    <app-sidenav-link routerLink="/settings/privacy">
      <mat-icon icon>lock</mat-icon>

      Privacy
    </app-sidenav-link>
  `,
})
export class SettingsSidenavComponent {}
