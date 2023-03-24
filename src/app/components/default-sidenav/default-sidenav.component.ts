import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Sidenav</h1>

    <app-sidenav-link
      routerLink="/home"
      [routerLinkActiveOptions]="{ exact: true }"
    >
      <mat-icon>home</mat-icon>
      Home
    </app-sidenav-link>

    <app-sidenav-link routerLink="/profile">
      <mat-icon>account_circle</mat-icon>

      Profile
    </app-sidenav-link>

    <app-sidenav-link routerLink="screen-1">
      <mat-icon>screen_share</mat-icon>

      Screen 1
    </app-sidenav-link>

    <app-sidenav-link routerLink="screen-2">
      <mat-icon>screen_share</mat-icon>

      Screen 2
    </app-sidenav-link>

    <app-sidenav-link routerLink="/settings">
      <mat-icon>settings</mat-icon>

      Settings →
    </app-sidenav-link>
  `,
})
export class DefaultSidenavComponent {}
