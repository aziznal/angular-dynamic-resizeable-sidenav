import { RouterModule } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav-link',
  template: `
    <a
      [routerLink]="routerLink"
      routerLinkActive="active"
      [routerLinkActiveOptions]="routerLinkActiveOptions"
    >
      <ng-content></ng-content>
    </a>
  `,
  styleUrls: ['./sidenav-link.component.scss'],
  standalone: true,
  imports: [RouterModule],
})
export class SidenavLinkComponent {
  @Input() routerLink?: string;

  @Input() routerLinkActiveOptions: { exact: boolean } = { exact: true };
}
