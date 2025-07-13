import { Component, input, Input } from '@angular/core';
import { Author } from '../../../../classes/author';

@Component({
  selector: 'app-blog-author',
  imports: [],
  templateUrl: './blog-author.component.html',
  styleUrl: './blog-author.component.css'
})
export class BlogAuthorComponent {
  @Input() author: any
  
  // author = input<Author>()
}
