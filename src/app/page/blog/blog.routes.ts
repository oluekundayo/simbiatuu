import { Routes } from '@angular/router';
import { FEATURED_POST } from './blog.data';

export const BlogRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./blog.component').then((m) => m.BlogComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./blog-main/blog-main.component').then((m) => m.BlogMainComponent),
      },
      {
        path: 'blog-main',
        loadComponent: () =>
          import('./blog-main/blog-main.component').then((m) => m.BlogMainComponent),
      },
      {
        path: 'blog-list',
        loadComponent: () =>
          import('./blog-list/blog-list.component').then((m) => m.BlogListComponent),
      },
      {
        path: 'blog-details',
        redirectTo: FEATURED_POST.slug,
        pathMatch: 'full',
      },
      {
        path: ':slug',
        loadComponent: () =>
          import('./blog-details/blog-details.component').then(
            (m) => m.BlogDetailsComponent
          ),
      },
    ],
  },
];
