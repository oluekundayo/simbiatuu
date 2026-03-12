import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogPost, FEATURED_POST, getRelatedPosts } from '../../blog.data';

@Component({
  selector: 'app-related-posts',
  imports: [RouterLink],
  templateUrl: './related-posts.component.html',
  styleUrl: './related-posts.component.css',
})
export class RelatedPostsComponent {
  @Input() posts: BlogPost[] = getRelatedPosts(FEATURED_POST.slug);
}
