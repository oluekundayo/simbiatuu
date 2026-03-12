import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FooterComponent } from '../../../components/footer/footer.component';
import { HeaderComponent } from '../../../components/header/header.component';
import {
  BLOG_CATEGORIES,
  BLOG_POSTS,
  FEATURED_POST,
  BlogPost,
  findBlogPostBySlug,
  getRelatedPosts,
} from '../blog.data';
import { BlogAuthorComponent } from './blog-author/blog-author.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { RelatedPostsComponent } from './related-posts/related-posts.component';

@Component({
  selector: 'app-blog-details',
  imports: [
    BlogAuthorComponent,
    RelatedPostsComponent,
    BlogSidebarComponent,
    FooterComponent,
    HeaderComponent,
    RouterLink,
  ],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css',
})
export class BlogDetailsComponent {
  private readonly route = inject(ActivatedRoute);

  protected blog: BlogPost = FEATURED_POST;
  protected relatedPosts = getRelatedPosts(FEATURED_POST.slug);
  protected recentPosts = BLOG_POSTS.filter(
    (post) => post.slug !== FEATURED_POST.slug
  ).slice(0, 4);
  protected readonly categories = BLOG_CATEGORIES;

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe((paramMap) => {
      const slug = paramMap.get('slug') ?? FEATURED_POST.slug;
      const selectedPost = findBlogPostBySlug(slug) ?? FEATURED_POST;

      this.blog = selectedPost;
      this.relatedPosts = getRelatedPosts(selectedPost.slug);
      this.recentPosts = BLOG_POSTS.filter(
        (post) => post.slug !== selectedPost.slug
      ).slice(0, 4);

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
