import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { AnimatedTypingComponent } from "../../components/animated-typing/animated-typing.component";
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";
import { ServicesComponent } from "../../components/services/services.component";
import { FaqComponent } from "../../components/faq/faq.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-index',
  imports: [HeaderComponent, AnimatedTypingComponent, TestimonialsComponent, ServicesComponent, FaqComponent, FooterComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
constructor(private router: Router) {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0); // Instant jump to top
      });
  }
}
