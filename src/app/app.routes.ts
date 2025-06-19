import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./page/index/index.component').then(
        (m) => m.IndexComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./page/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
];
