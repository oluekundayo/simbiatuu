import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../../components/footer/footer.component';
import { HeaderComponent } from '../../../components/header/header.component';
import { BLOG_POSTS, FEATURED_POST } from '../blog.data';
import { PaginationComponent } from './pagination/pagination.component';

@Component({
  selector: 'app-blog-list',
  imports: [FooterComponent, HeaderComponent, PaginationComponent, RouterLink],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css',
})
export class BlogListComponent {
  protected readonly posts = BLOG_POSTS;
  protected readonly featuredPost = FEATURED_POST;
  protected readonly pageSize = 6;
  protected currentPage = 1;

  onPageChange(page: number) {
    this.currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  protected get totalPages(): number {
    return Math.ceil(this.posts.length / this.pageSize);
  }

  protected get visiblePosts() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.posts.slice(startIndex, startIndex + this.pageSize);
  }
}
