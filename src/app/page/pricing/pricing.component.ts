import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { StreamlineComponent } from "../../components/streamline/streamline.component";
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";
import { FaqComponent } from "../../components/faq/faq.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing',
  imports: [HeaderComponent, StreamlineComponent, TestimonialsComponent, FaqComponent, FooterComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  _router = inject(Router);
  billingCycle = signal<'monthly' | 'yearly'>('monthly');

  plans = [
    {
      name: 'Starter Spark',
      price: { monthly: 250, yearly: 230  },
      features: [
        ' One affiliate blog/review article OR 3 affiliate-focused social posts',
        'Storytelling that introduces your product with clarity and warmth.',
      ],
      button: 'Subscribe',
      highlighted: false,
    },
    {
      name: 'Growth Glow-Up',
      price: { monthly: 550, yearly: 500  },
      features: [
        'Two affiliate blog/review articles + 5–7 affiliate social posts.',
        'Consistent storytelling across platforms.',
        ' A campaign theme designed to increase clicks and conversions.',
      ],
      button: 'Subscribe',
      highlighted: true,
    },
    {
      name: 'Premium Power Move',
      price: { monthly: 750, yearly: 700 },
      features: [
        'Full content package: multiple blog/review articles, 10+ social posts, and video scripts.',
        'Campaign strategy that connects stories across platforms.',
        'Continuous optimisation of tone, messaging, and storytelling for maximum impact.',
      ],
      button: 'Subscribe',
      highlighted: false,
    },
  ];

  send() {
    this._router.navigateByUrl('/contact')
  }
}
