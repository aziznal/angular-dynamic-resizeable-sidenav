import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { DefaultSidenavComponent } from './components/default-sidenav/default-sidenav.component';
import { SidenavLinkComponent } from './components/sidenav-link/sidenav-link.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './screens/home/home-screen.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { Screen1Component } from './screens/screen-1/screen-1.component';
import { Screen2Component } from './screens/screen-2/screen-2.component';
import { AccountSettingsScreenComponent } from './screens/settings/screens/account-settings-screen.component';
import { NotificationSettingsScreenComponent } from './screens/settings/screens/notifcation-settings-screen.component';
import { PrivacySettingsScreenComponent } from './screens/settings/screens/privacy-settings-screen.component';
import { SecuritySettingsScreenComponent } from './screens/settings/screens/security-settings-screen.component';
import { SettingsSidenavComponent } from './screens/settings/settings-sidenav.component';
import { SettingsComponent } from './screens/settings/settings.component';

import { SidenavContentHostDirective } from './components/sidenav/sidenav-content-host.directive';

@NgModule({
  declarations: [
    AppComponent,
    DefaultSidenavComponent,
    SidenavLinkComponent,
    SidenavComponent,
    SidenavContentHostDirective,

    HomeComponent,
    ProfileComponent,
    Screen1Component,
    Screen2Component,

    SettingsComponent,
    SettingsSidenavComponent,
    AccountSettingsScreenComponent,
    NotificationSettingsScreenComponent,
    PrivacySettingsScreenComponent,
    SecuritySettingsScreenComponent,
  ],
  imports: [BrowserModule, RouterModule, AppRoutingModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
