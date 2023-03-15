import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Home Screen</h1>

    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterModule],
})
export class HomeScreenComponent {}
