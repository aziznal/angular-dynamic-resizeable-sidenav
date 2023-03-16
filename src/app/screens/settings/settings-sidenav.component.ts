import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Settings Sidenav!</h1>

    <a routerLink="/">← Back</a>

    <ul>
      <li>
        <a routerLink="/settings/profile">Profile</a>
      </li>
    </ul>
  `,
  standalone: true,
  imports: [RouterModule],
})
export class SettingsSidenavComponent {}
