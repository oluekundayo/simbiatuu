import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { ComingSoonComponent } from "../../components/coming-soon/coming-soon.component";

@Component({
  selector: 'app-blog',
  imports: [RouterOutlet, ComingSoonComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0); // Instant jump to top
      });
  }
}
