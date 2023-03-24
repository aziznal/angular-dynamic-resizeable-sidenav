import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav-link',
  template: `
    <a
      [routerLink]="routerLink"
      routerLinkActive="active"
      [routerLinkActiveOptions]="routerLinkActiveOptions"
    >
      <!-- Wrapping icon and text with spans to make text truncation work -->
      <span>
        <ng-content select="[icon]"></ng-content>
      </span>

      <span class="text-container">
        <ng-content></ng-content>
      </span>
    </a>
  `,
  styleUrls: ['./sidenav-link.component.scss'],
})
export class SidenavLinkComponent {
  @Input()
  routerLink?: string;

  @Input()
  routerLinkActiveOptions: { exact: boolean } = { exact: true };
}
