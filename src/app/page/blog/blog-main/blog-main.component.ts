import { Component, inject } from '@angular/core';
import { FooterComponent } from "../../../components/footer/footer.component";
import { HeaderComponent } from "../../../components/header/header.component";
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-blog-main',
  imports: [FooterComponent, HeaderComponent, RouterLink, RouterLinkActive],
  templateUrl: './blog-main.component.html',
  styleUrl: './blog-main.component.css'
})
export class BlogMainComponent {
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
    },
    {
      title: 'Building your API Stack',
      details:' Let’s get one thing out of the way: you don’t need a fancy Bachelor’s Degree to get into Product Design...',
      author: 'Lana Steiner',
      date: '18 Jan 2022',
      image: 'blog2.jpg'
    },
    // ... more blog posts
  ];

  blogDetails(e: any) {
    this._router.navigate(["blog", "blog-details"], {
          state: { e }
        });
  }
}
