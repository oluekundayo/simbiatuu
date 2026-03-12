import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../../components/footer/footer.component';
import { HeaderComponent } from '../../../components/header/header.component';
import { BLOG_POSTS, FEATURED_POST } from '../blog.data';

@Component({
  selector: 'app-blog-main',
  imports: [FooterComponent, HeaderComponent, RouterLink],
  templateUrl: './blog-main.component.html',
  styleUrl: './blog-main.component.css',
})
export class BlogMainComponent {
  protected readonly featuredPost = FEATURED_POST;
  protected readonly recentPosts = BLOG_POSTS.slice(1, 7);
  protected readonly archiveCount = BLOG_POSTS.length;
}
