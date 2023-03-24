import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./screens/home/home-screen.component').then(
        (m) => m.HomeScreenComponent
      ),
  },
  {
    path: 'screen-1',
    loadComponent: () =>
      import('./screens/screen-1/screen-1.component').then(
        (m) => m.Screen1Component
      ),
  },
  {
    path: 'screen-2',
    loadComponent: () =>
      import('./screens/screen-2/screen-2.component').then(
        (m) => m.Screen2Component
      ),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./screens/settings/settings.component').then(
        (m) => m.SettingsComponent
      ),
    children: [
      {
        path: 'account',
        loadComponent: () =>
          import(
            './screens/settings/screens/account-settings-screen.component'
          ).then((m) => m.AccountSettingsScreenComponent),
      },
      {
        path: 'security',
        loadComponent: () =>
          import(
            './screens/settings/screens/security-settings-screen.component'
          ).then((m) => m.SecuritySettingsScreenComponent),
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import(
            './screens/settings/screens/notifcation-settings-screen.component'
          ).then((m) => m.NotificationSettingsScreenComponent),
      },
      {
        path: 'privacy',
        loadComponent: () =>
          import(
            './screens/settings/screens/privacy-settings-screen.component'
          ).then((m) => m.PrivacySettingsScreenComponent),
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
    loadComponent: () =>
      import('./screens/profile/profile.component').then(
        (m) => m.ProfileComponent
      ),
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
