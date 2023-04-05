import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { SidenavService } from './components/sidenav/sidenav.service';

import { DefaultSidenavComponent } from './sidenavs/default-sidenav/default-sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  constructor(
    public sidenavService: SidenavService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.sidenavService.push(DefaultSidenavComponent);
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.sidenavService.pop();
  }
}
