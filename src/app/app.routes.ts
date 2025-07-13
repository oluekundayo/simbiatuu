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
  {
    path: 'blog',
    loadChildren: () =>
      import('./page/blog/blog.routes').then(
        (m) => m.BlogRoutes
      ),
  },
  {
    path: 'service',
    loadComponent: () =>
      import('./page/serivce/serivce.component').then(
        (m) => m.SerivceComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./page/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
];
