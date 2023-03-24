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
      import('./screens/settings/settings-screen.component').then(
        (m) => m.SettingsScreenComponent
      ),
    children: [],
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./screens/profile-settings/profile-settings.component').then(
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
