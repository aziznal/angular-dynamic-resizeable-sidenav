import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Profile Settings</h1>

    <a routerLink="/settings">← Back</a>

    <ul style="display: flex; flex-direction: column; gap: 1rem;">
      <li>
        <a href="#">Account</a>
      </li>

      <li>
        <a href="#">Security</a>
      </li>

      <li>
        <a href="#">Notifications</a>
      </li>

      <li>
        <a href="#">Privacy</a>
      </li>

      <li>
        <a href="#">Blocked Users</a>
      </li>

      <li>
        <a href="#">Deactivate Account</a>
      </li>

      <li>
        <a href="#">Close Account</a>
      </li>

      <li>
        <a href="#">Report a Problem</a>
      </li>

      <li>
        <a href="#">Help</a>
      </li>
    </ul>
  `,
  standalone: true,
  imports: [RouterModule],
})
export class ProfileSettingsSidenavComponent {}
