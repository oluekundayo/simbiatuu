import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  BLOG_CATEGORIES,
  BLOG_POSTS,
  FEATURED_POST,
  BlogCategorySummary,
  BlogPost,
} from '../../blog.data';

@Component({
  selector: 'app-blog-sidebar',
  imports: [RouterLink],
  templateUrl: './blog-sidebar.component.html',
  styleUrl: './blog-sidebar.component.css',
})
export class BlogSidebarComponent {
  @Input() post: BlogPost = FEATURED_POST;
  @Input() recentPosts: BlogPost[] = BLOG_POSTS.filter(
    (entry) => entry.slug !== FEATURED_POST.slug
  ).slice(0, 4);
  @Input() categories: BlogCategorySummary[] = BLOG_CATEGORIES;
}
