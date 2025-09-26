import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AnimatedTypingComponent } from '../../components/animated-typing/animated-typing.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { ServicesComponent } from '../../components/services/services.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { StreamlineComponent } from "../../components/streamline/streamline.component";

@Component({
  selector: 'app-index',
  imports: [
    HeaderComponent,
    // AnimatedTypingComponent,
    // TestimonialsComponent,
    // ServicesComponent,
    FaqComponent,
    FooterComponent,
    // RouterLink,
    // StreamlineComponent
],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0); // Instant jump to top
      });
  }

  services = [
    { name: 'Affiliate Marketing', icon: '💼', color: 'from-yellow-400 to-orange-400' },
    { name: 'Care Agency', icon: '❤️', color: 'from-blue-400 to-indigo-400' },
    { name: 'Cloud Academy', icon: '☁️', color: 'from-green-400 to-emerald-400' },
    { name: 'Events & Styling', icon: '🎉', color: 'from-pink-400 to-fuchsia-400' },
    { name: 'Food & Dining', icon: '🍴', color: 'from-purple-400 to-violet-400' },
    { name: 'Real Estate', icon: '🏡', color: 'from-red-400 to-rose-400' },
    { name: 'Photography', icon: '📸', color: 'from-cyan-400 to-sky-400' },
  ];
}
