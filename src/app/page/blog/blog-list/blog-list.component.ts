import { Component, inject } from '@angular/core';
import { FooterComponent } from "../../../components/footer/footer.component";
import { HeaderComponent } from "../../../components/header/header.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  imports: [FooterComponent, HeaderComponent, PaginationComponent],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
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

  currentPage: number = 1;
  totalPages: number = 26;

  onPageChange(page: number) {
    this.currentPage = page;
    console.log('Page changed to:', page);
    // Add your logic here (e.g., fetch new data)
  }
  blogDetails(e: any) {
    this._router.navigate(["blog", "blog-details"], {
          state: { e }
        });
  }
}
