import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SidenavService } from '../../components/sidenav/sidenav.service';

import { DefaultSidenavComponent } from '../../components/default-sidenav/default-sidenav.component';

@Component({
  template: `
    <h1>Home Screen</h1>

    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterModule],
})
export class HomeScreenComponent implements OnInit, OnDestroy {
  constructor(private sidenavService: SidenavService) {}

  ngOnInit() {
    this.sidenavService.push(DefaultSidenavComponent);
  }

  ngOnDestroy() {
    this.sidenavService.pop();
  }
}
