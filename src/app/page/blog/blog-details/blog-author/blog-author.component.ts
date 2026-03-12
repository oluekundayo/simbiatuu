import { Component, Input } from '@angular/core';
import { BlogAuthorProfile, FEATURED_POST } from '../../blog.data';

@Component({
  selector: 'app-blog-author',
  imports: [],
  templateUrl: './blog-author.component.html',
  styleUrl: './blog-author.component.css',
})
export class BlogAuthorComponent {
  @Input() author: BlogAuthorProfile = FEATURED_POST.author;
  @Input() publishedAt = FEATURED_POST.publishedAt;
  @Input() readTime = FEATURED_POST.readTime;
}
