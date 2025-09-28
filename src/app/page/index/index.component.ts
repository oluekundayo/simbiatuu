import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AnimatedTypingComponent } from '../../components/animated-typing/animated-typing.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { ServicesComponent } from '../../components/services/services.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { StreamlineComponent } from '../../components/streamline/streamline.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule, NgClass } from '@angular/common';

import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  heroLink,
  heroHeart,
  heroHandThumbUp,
  heroCloud,
  heroSparkles,
  heroCpuChip,
  heroCalendarDays,
  heroCake,
  heroGlobeAlt,
  heroGift,
  heroCamera,
  heroMicrophone,
  heroHomeModern,
  heroBuildingStorefront,
} from '@ng-icons/heroicons/outline';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faUserTie,
  faHandshake,
  faHandPointUp,
  faLightbulb,
  faArrowRight,
  faHeartbeat, faUtensils, faLaptopCode, faShirt, faHandsHelping, faBuilding
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index',
  imports: [
    CommonModule,
    HeaderComponent,
    RouterLink,
    // AnimatedTypingComponent,
    // TestimonialsComponent,
    // ServicesComponent,
    FaqComponent,
    FooterComponent,
    // RouterLink,
    // StreamlineComponent
    FontAwesomeModule,
    NgIcon,
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
  providers: [
    provideIcons({
      heroLink,
      heroHeart,
      heroHandThumbUp,
      heroCloud,
      heroSparkles,
      heroCpuChip,
      heroCalendarDays,
      heroCake,
      heroGlobeAlt,
      heroGift,
      heroCamera,
      heroMicrophone,
      heroHomeModern,
      heroBuildingStorefront,
    }),
  ],
})
export class IndexComponent implements OnInit {
  features = [
    {
      title: 'Mission',
      desc: 'To empower individuals and businesses of all sizes through creativity, strategy, and storytelling helping them scale locally and globally while making a meaningful impact.',
      icon: faUserTie,
    },
    {
      title: 'Vision',
      desc: 'To become a leading multi-service company in the UK and beyond transforming businesses into brands that inspire, connect, and thrive worldwide.',
      icon: faHandPointUp,
    },
    {
      title: 'Core Values',
      desc: 'RIICI (Resilience, Integrity, Innovation, Collaboration, Impact)',
      icon: faLightbulb,
    },
    // {
    //   title: 'Solutions',
    //   desc: 'Use our award-winning technology and services to save your business time and money.',
    //   icon: faHandshake,
    // },
  ];
  constructor(private router: Router, private library: FaIconLibrary) {
    library.addIcons(
      faUserTie,
      faHandshake,
      faHandPointUp,
      faLightbulb,
      faArrowRight,
      faHeartbeat, faUtensils, faLaptopCode, faShirt, faHandsHelping, faBuilding
    );
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0); // Instant jump to top
      });
  }

  services = [
    {
      name: 'Affiliate Marketing',
      desc: 'Build new revenue streams.',
      icon: 'heroLink',
      color: 'from-blue-400 to-indigo-400',
    },
    // {
    //   name: 'Care Agency',
    //   desc: 'Trusted, people-first care services.',
    //   icon: 'heroHeart',
    //   color: 'from-pink-400 to-rose-400',
    // },
    {
      name: 'Charity & Non-Profit Support',
      desc: 'Strategies with purpose.',
      icon: 'heroHandThumbUp',
      color: 'from-green-400 to-emerald-400',
    },
    // {
    //   name: 'Cloud Academy',
    //   desc: 'Digital learning for modern growth.',
    //   icon: 'heroCloud',
    //   color: 'from-purple-400 to-violet-400',
    // },
    {
      name: 'Coutoure',
      desc: 'Style-driven solutions for brands & consumers.',
      icon: 'heroSparkles',
      color: 'from-fuchsia-400 to-pink-400',
    },
    // {
    //   name: 'Digital Products',
    //   desc: 'Scalable, future-ready solutions.',
    //   icon: 'heroCpuChip',
    //   color: 'from-cyan-400 to-teal-400',
    // },
    {
      name: 'Events & Styling',
      desc: 'Memorable experiences that connect.',
      icon: 'heroCalendarDays',
      color: 'from-orange-400 to-amber-400',
    },
    // {
    //   name: 'Food & Dining',
    //   desc: 'Culinary ventures that delight and inspire.',
    //   icon: 'heroCake',
    //   color: 'from-red-400 to-rose-400',
    // },
    {
      name: 'Full-Stack Content Marketing',
      desc: 'Strategy, storytelling, and execution.',
      icon: 'heroGlobeAlt',
      color: 'from-indigo-400 to-sky-400',
    },
    {
      name: 'Gift Shop',
      desc: 'Curated gifting for every occasion.',
      icon: 'heroGift',
      color: 'from-pink-400 to-purple-400',
    },
    // {
    //   name: 'Photography',
    //   desc: 'Visual storytelling that captures impact.',
    //   icon: 'heroCamera',
    //   color: 'from-teal-400 to-green-400',
    // },
    {
      name: 'Public Speaking',
      desc: 'Inspiring talks that spark change.',
      icon: 'heroMicrophone',
      color: 'from-violet-400 to-indigo-400',
    },
    // {
    //   name: 'Real Estate',
    //   desc: 'Smarter property solutions.',
    //   icon: 'heroHomeModern',
    //   color: 'from-emerald-400 to-green-500',
    // },
    // {
    //   name: 'Vending Services',
    //   desc: 'Convenience that works anywhere.',
    //   icon: 'heroBuildingStorefront',
    //   color: 'from-yellow-400 to-orange-400',
    // },
  ];

  colors = [
    { name: 'Dusty Purple', hex: '#9a7aa4' },
    { name: 'Dark Aquamarine', hex: '#488e82' },
    { name: 'Harvest Gold', hex: '#c8932b' },
    { name: 'Rosewood', hex: '#b74852' },
    { name: 'Persimmon', hex: '#c86635' },
    { name: 'Jungle Green', hex: '#318144' },
    { name: 'Dusty Purple (variant)', hex: '#af849e' },
    { name: 'Gunmetal Blue', hex: '#343f5e' },
    { name: 'Tyrian Purple', hex: '#6c2346' },
  ];
  ngOnInit(): void {
    this.services = this.services.map((service) => {
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
      return { ...service, color: color.hex };
    });
  }
  getRandomColor() {
    const index = Math.floor(Math.random() * this.colors.length);
    return this.colors[index];
  }

  featuress = [
    {
      title: 'Health & Wellness',
      desc: 'Supporting healthcare and wellness ventures with strategy and innovation.',
      icon: faHeartbeat,
    },
    {
      title: 'Hospitality & Lifestyle',
      desc: 'Helping lifestyle and hospitality brands create unforgettable experiences.',
      icon: faUtensils,
    },
    {
      title: 'Tech & Digital Innovation',
      desc: 'Providing digital solutions to keep businesses ahead in fast-changing markets.',
      icon: faLaptopCode,
    },
    {
      title: 'Fashion & Retail',
      desc: 'Style-driven strategies that grow brands and engage consumers worldwide.',
      icon: faShirt,
    },
    {
      title: 'Non-Profit & Social Impact',
      desc: 'Empowering charities and NGOs with storytelling and growth strategies.',
      icon: faHandsHelping,
    },
    {
      title: 'Real Estate',
      desc: 'Smarter property solutions for investors, agents, and communities.',
      icon: faBuilding,
    },
  ];
}
