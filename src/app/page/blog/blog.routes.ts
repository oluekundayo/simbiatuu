import { Routes } from '@angular/router';

export const BlogRoutes: Routes = [
    {
		path: '',
		loadComponent: () => import('./blog.component').then(m => m.BlogComponent),
		children: [
			{
				path: '', redirectTo: 'blog-main', pathMatch: 'full'
			},
			{
				path: 'blog-main',
				loadComponent: () => import('./blog-main/blog-main.component').then(m => m.BlogMainComponent)
			},
			{
				path: 'blog-list',
				loadComponent: () => import('./blog-list/blog-list.component').then(m => m.BlogListComponent)
			},
			{
				path: 'blog-details',
				loadComponent: () => import('./blog-details/blog-details.component').then(m => m.BlogDetailsComponent)
			},
		]
	},
]