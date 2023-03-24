import { ProfileComponent } from './screens/profile/profile.component';
import { PrivacySettingsScreenComponent } from './screens/settings/screens/privacy-settings-screen.component';
import { NotificationSettingsScreenComponent } from './screens/settings/screens/notifcation-settings-screen.component';
import { SecuritySettingsScreenComponent } from './screens/settings/screens/security-settings-screen.component';
import { AccountSettingsScreenComponent } from './screens/settings/screens/account-settings-screen.component';
import { SettingsComponent } from './screens/settings/settings.component';
import { Screen2Component } from './screens/screen-2/screen-2.component';
import { Screen1Component } from './screens/screen-1/screen-1.component';
import { HomeComponent } from './screens/home/home-screen.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'screen-1',
    component: Screen1Component,
  },
  {
    path: 'screen-2',
    component: Screen2Component,
  },
  {
    path: 'settings',
    component: SettingsComponent,

    children: [
      {
        path: 'account',
        component: AccountSettingsScreenComponent,
      },
      {
        path: 'security',
        component: SecuritySettingsScreenComponent,
      },
      {
        path: 'notifications',
        component: NotificationSettingsScreenComponent,
      },
      {
        path: 'privacy',
        component: PrivacySettingsScreenComponent,
      },
      {
        // redirect to `account` if there is no path
        path: '',

        redirectTo: 'account',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  // redirect to `home` if there is no path
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  exports: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
