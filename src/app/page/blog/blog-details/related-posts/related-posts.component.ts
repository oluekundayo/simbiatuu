import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-related-posts',
  imports: [],
  templateUrl: './related-posts.component.html',
  styleUrl: './related-posts.component.css'
})
export class RelatedPostsComponent {
  
  _router = inject(Router);
blogs = [
    {
      title: 'Migrating to Linear 101',
      details:' Let’s get one thing out of the way: you don’t need a fancy Bachelor’s Degree to get into Product Design...',
      author: 'Jonathan Wills',
      date: '19 Jan 2022',
      image: 'blog1.jpg'
    },
    {
      title: 'Building your API Stack',
      details:' Let’s get one thing out of the way: you don’t need a fancy Bachelor’s Degree to get into Product Design...',
      author: 'Lana Steiner',
      date: '18 Jan 2022',
      image: 'blog2.jpg'
    },
    {
      title: 'Migrating to Linear 101',
      details:' Let’s get one thing out of the way: you don’t need a fancy Bachelor’s Degree to get into Product Design...',
      author: 'Jonathan Wills',
      date: '19 Jan 2022',
      image: 'blog1.jpg'
    }
    // ... more blog posts
  ];
  blogDetails(e: any) {
    this._router.navigate(["blog", "blog-details"], {
          state: { e }
        });
  }
}
