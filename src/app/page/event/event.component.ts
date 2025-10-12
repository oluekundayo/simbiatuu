import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FaIconComponent, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faCalendarAlt,
  faPalette,
  faMicrophone,
  faUtensils,
  faMusic,
  faCamera,
  faCut,
  faBuilding,
  faShieldAlt,
  faCouch,
  faStar,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { PricingComponent } from '../pricing/pricing.component';

@Component({
  selector: 'app-event',
  imports: [
    HeaderComponent,
    FooterComponent,
    FaIconComponent,
    PricingComponent,
  ],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css',
})
export class EventComponent {
  services = [
    {
      icon: faCalendarAlt,
      title: 'Event Planning & Coordination',
      description:
        "From concept to execution, we manage all the details so you don't have to stress.",
    },
    {
      icon: faPalette,
      title: 'Decoration & Styling',
      description:
        'Custom décor, themed setups, floral arrangements, lighting, and ambiance creation to make your event visually stunning.',
    },
    {
      icon: faMicrophone,
      title: 'Hosting & MC Services',
      description: 'Professional hosts to keep your event flowing seamlessly.',
    },
    {
      icon: faUtensils,
      title: 'Food & Beverage',
      description:
        'Delicious menus tailored to your preferences, including desserts and specialty cakes.',
    },
    {
      icon: faMusic,
      title: 'Music & Entertainment',
      description: 'DJs, live bands, and performers to set the perfect vibe.',
    },
    {
      icon: faCamera,
      title: 'Photography & Videography',
      description: 'Capturing every moment with elegance and style.',
    },
    {
      icon: faCut,
      title: 'Bridal & Styling Services',
      description:
        'Hair, makeup, attire, and event décor to match your vision.',
    },
    {
      icon: faBuilding,
      title: 'Hall & Venue Bookings',
      description: 'Curated list of venues and booking assistance.',
    },
    {
      icon: faShieldAlt,
      title: 'Event Security',
      description:
        'Certified personnel to ensure a safe and smooth experience.',
    },
    {
      icon: faCouch,
      title: 'Rentals & Décor',
      description: 'Furniture, lighting, and décor to make your event shine.',
    },
  ];

  packages = [
    {
      name: 'Basic Package',
      price: {
        min: { monthly: 500, yearly: 450 },
        max: { monthly: 1500, yearly: 1400 },
      },
      features: [
        'Event planning & coordination',
        'Venue booking assistance',
        'Basic décor consultation',
        'Timeline management',
      ],
      useRange: true,
      button: 'Subscribe',
      highlighted: false,
    },
    {
      name: 'Premium Package',
      price: {
        min: { monthly: 1500, yearly: 1400 },
        max: { monthly: 3500, yearly: 3400 },
      },
      features: [
        'Everything in Basic Package',
        'Catering & beverages',
        'MC/Hosting services',
        'Music & entertainment',
        'Photography coverage',
        'Enhanced décor & styling',
      ],
      useRange: true,
      button: 'Subscribe',
      highlighted: true,
    },
    {
      name: 'Luxury Package',
      price: {
        min: { monthly: 3500, yearly: 3400 },
        max: { monthly: 10000, yearly: 9000 },
      },
      features: [
        'Full event planning & styling',
        'Bridal styling services',
        'Custom décor & theme design',
        'Full catering & beverage service',
        'Entertainment (band/DJ/performers)',
        'Photography & videography',
        'Event security',
        'Rentals (furniture, lighting, sound)',
      ],
      useRange: true,
      button: 'Subscribe',
      highlighted: false,
    },
  ];

  testimonials = [
    {
      quote:
        'SIMBIATUU EVENTS & STYLING made our wedding day unforgettable! Every detail was perfect and the team handled everything seamlessly.',
      author: 'Aisha K.',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=687&q=80',
    },
    {
      quote:
        'Professional, creative, and reliable. Our corporate event went off without a hitch thanks to Simbiatu Events!',
      author: 'James M.',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=687&q=80',
    },
    {
      quote:
        'From décor to entertainment, they exceeded our expectations. Highly recommend for anyone planning a special event.',
      author: 'Fatima O.',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=761&q=80',
    },
  ];
  certifications = [
    'Event Planning & Coordination',
    'Food Hygiene & Catering Safety',
    'Hospitality & Customer Service',
    'Music & Entertainment Management',
    'Bridal Styling & Makeup Artistry',
    'Decoration & Event Styling',
    'Photography & Videography',
  ];

  constructor(private library: FaIconLibrary) {
    this.library.addIcons(faStar,faCheckCircle);
  }
}
