import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
  // redirect to `screen-1` if there is no path
  {
    path: '',
    redirectTo: 'screen-1',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  exports: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
