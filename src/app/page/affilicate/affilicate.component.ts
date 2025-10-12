import { Component } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { PricingComponent } from "../pricing/pricing.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";


@Component({
  selector: 'app-affilicate',
  imports: [FaIconComponent, PricingComponent, HeaderComponent, FooterComponent],
  templateUrl: './affilicate.component.html',
  styleUrl: './affilicate.component.css'
})
export class AffilicateComponent {
faCheck = faCheck;

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
}
