import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SidenavLinkComponent } from './components/sidenav-link/sidenav-link.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './screens/home/home.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { Screen1Component } from './screens/screen-1/screen-1.component';
import { Screen2Component } from './screens/screen-2/screen-2.component';
import { SettingsComponent } from './screens/settings/settings.component';
import { DefaultSidenavComponent } from './sidenavs/default-sidenav/default-sidenav.component';
import { SettingsSidenavComponent } from './sidenavs/settings-sidenav/settings-sidenav.component';

import { SidenavContentAreaDirective } from './components/sidenav/sidenav-content-area.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidenavLinkComponent,
    SidenavComponent,
    HomeComponent,
    ProfileComponent,
    Screen1Component,
    Screen2Component,
    SettingsComponent,

    SidenavContentAreaDirective,

    DefaultSidenavComponent,
    SettingsSidenavComponent,
  ],
  imports: [BrowserModule, RouterModule, AppRoutingModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
