import { Component, OnDestroy, OnInit } from '@angular/core';

import { SidenavService } from './components/sidenav/sidenav.service';

import { DefaultSidenavComponent } from './components/default-sidenav/default-sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  constructor(private sidenavService: SidenavService) {}

  ngAfterViewInit() {
    this.sidenavService.push(DefaultSidenavComponent);
  }

  ngOnDestroy() {
    this.sidenavService.pop();
  }
}
