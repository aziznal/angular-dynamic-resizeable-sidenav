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
  styles: [
    `
      a {
        display: flex;
        flex-direction: row;

        align-items: center;
        justify-content: space-between;

        box-sizing: border-box;

        padding: 16px;

        min-width: var(--min-expanded-sidenav-width);

        text-decoration: none;
        color: #000;

        transition: background-color 75ms ease-out;

        border-radius: 4px;

        &:hover {
          // light blue
          background-color: #deebff;
        }

        &.active {
          background-color: #94bfff;
        }
      }
    `,
  ],
  standalone: true,
  imports: [RouterModule],
})
export class SidenavLinkComponent {
  @Input() routerLink?: string;

  @Input() routerLinkActiveOptions: { exact: boolean } = { exact: true };
}
