import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import {
  FaIconComponent,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';

import {
  faSearch,
  faPalette,
  faGlobe,
  faFileAlt,
  faShareAlt,
  faVideo,
  faEnvelope,
  faBullseye,
  faCalendar,
  faChartBar,
  faCamera,
  faChartPie,
  faArrowRight,
  faHeadphones,
  faUsers,
  faMicrophone,
} from '@fortawesome/free-solid-svg-icons';
import { PricingComponent } from "../pricing/pricing.component";

@Component({
  selector: 'app-digital',
  imports: [FooterComponent, HeaderComponent, FaIconComponent, PricingComponent],
  templateUrl: './digital.component.html',
  styleUrl: './digital.component.css',
})
export class DigitalComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faArrowRight);
  }

  services = [
    {
      title: 'Content Strategy & Market Research',
      icon: faSearch,
      items: [
        'Audience research & buyer personas',
        'Competitor analysis',
        'Campaign planning',
        'Customer journey mapping',
      ],
    },
    {
      title: 'Branding & Creative Design',
      icon: faPalette,
      items: [
        'Brand identity & logo design',
        'Brand messaging & tone of voice',
        'Graphic design & marketing collateral',
        'Visual storytelling (infographics, pitch decks, brochures)',
      ],
    },
    {
      title: 'Website Design & Development',
      icon: faGlobe,
      items: [
        'Custom website design',
        'SEO-friendly development',
        'Landing pages for campaigns',
        'E-commerce & B2B portals',
      ],
    },
    {
      title: 'Content Creation & Storytelling',
      icon: faFileAlt,
      items: [
        'Blog posts, articles, and whitepapers',
        'Copywriting for ads, emails & websites',
        'Case studies & success stories',
        'Long-form storytelling for thought leadership',
      ],
    },
    {
      title: 'Social Media Marketing',
      icon: faShareAlt,
      items: [
        'Social media management',
        'Campaign creation & scheduling',
        'Community engagement',
        'Paid social media ads',
      ],
    },
    {
      title: 'Video Marketing',
      icon: faVideo,
      items: [
        'Brand storytelling videos',
        'Product demos & tutorials',
        'Event coverage & highlights',
        'Short-form content (TikTok, Reels, YouTube Shorts)',
      ],
    },
    {
      title: 'Email & Direct Marketing',
      icon: faEnvelope,
      items: [
        'Email campaign setup & automation',
        'Newsletters',
        'Personalized outreach campaigns',
        'List segmentation & lead nurturing',
      ],
    },
    {
      title: 'Search & SEO Services',
      icon: faBullseye,
      items: [
        'On-page SEO optimization',
        'Keyword strategy',
        'Content SEO (blogs, landing pages, copy)',
        'Local SEO for small businesses',
      ],
    },
    {
      title: 'Event Marketing',
      icon: faCalendar,
      items: [
        'Virtual & physical event promotion',
        'Event branding & content',
        'Speaking opportunities & PR',
        'Post-event content (recaps, videos, case studies)',
      ],
    },
    {
      title: 'Paid Media & Performance Marketing',
      icon: faChartBar,
      items: [
        'PPC campaigns (Google Ads, Bing, etc.)',
        'Retargeting campaigns',
        'Affiliate & influencer partnerships',
        'Conversion rate optimization',
      ],
    },
    {
      title: 'Photography & Visual Content',
      icon: faCamera,
      items: [
        'Corporate & brand photography',
        'Lifestyle & product photography',
        'Portraits for professionals',
        'Content packs for campaigns',
      ],
    },
    {
      title: 'Analytics & Reporting',
      icon: faChartPie,
      items: [
        'Campaign performance dashboards',
        'ROI tracking',
        'Content audits',
        'Insights for continuous improvement',
      ],
    },
  ];

  bonusServices = [
    {
      title: 'Podcast Production & Marketing',
      icon: faHeadphones,
      items: [
        'Podcast setup & editing',
        'Guest outreach & booking',
        'Distribution to platforms (Spotify, Apple, Google)',
        'Promotion strategy to grow listeners',
      ],
    },
    {
      title: 'Affiliate Marketing Campaigns',
      icon: faUsers,
      items: [
        'Partnership strategy & recruitment',
        'Influencer collaborations',
        'Affiliate content creation',
        'Performance tracking & reporting',
      ],
    },
    {
      title: 'Public Speaking Coaching & Representation',
      icon: faMicrophone,
      items: [
        'Speaker profile development',
        'Training in presentation & storytelling',
        'Securing speaking opportunities',
        'Event representation & PR',
      ],
    },
  ];

  pricingPlans = [
    {
      name: 'Starter',
      tagline: 'Build Your Presence',
      bestFor: 'Small businesses, startups, personal brands',
      features: [
        'Brand identity',
        '5-page SEO website',
        '4 social posts/mo',
        '2 blog posts/mo',
        'Basic photography',
        'Monthly report',
      ],
      price: {
        min: { monthly: 650, yearly: 600 },
        max: { monthly: 1000, yearly: 900 },
      },
      custom: false,
      useRange: true,
      button: 'Subscribe',
      highlighted: false,
    },
    {
      name: 'Growth',
      tagline: 'Engage & Attract',
      bestFor: 'Growing businesses that want visibility & leads',
      features: [
        'Everything in Starter',
        'Strategy',
        '8 social posts/mo',
        '4 blogs/mo',
        '1 branded video',
        'Email campaigns',
        'SEO',
        'Quarterly event support',
      ],
      price: {
        min: { monthly: 1200, yearly: 1100 },
        max: { monthly: 2000, yearly: 1900 },
      },
      custom: false,
      useRange: true,
      button: 'Subscribe',
      highlighted: true,
    },
    {
      name: 'Premium',
      tagline: 'Scale & Dominate',
      bestFor: 'Established businesses ready to scale',
      features: [
        'Everything in Growth',
        'Full campaign calendar',
        '12 social posts/mo',
        '6 blogs/mo',
        '2 pro videos',
        'Paid ads management',
        'Advanced analytics',
      ],
      price: {
        min: { monthly: 2500, yearly: 2400 },
        max: { monthly: 4500, yearly: 4400 },
      },
      custom: false,
      useRange: true,
      button: 'Subscribe',
      highlighted: false,
    },
    {
      name: 'Enterprise',
      tagline: 'Custom Solutions',
      bestFor: 'Corporates, nonprofits, large enterprises',
      features: [
        'Fully tailored strategy',
        'Multi-channel campaigns',
        'Event marketing & promotion',
        'Dedicated content team',
      ],
      price: { monthly: 5000, yearly: 4900 },
      custom: true,
      useRange: false,
      button: 'Subscribe',
      highlighted: false,
    },
  ]

  testimonials = [
    {
      text: "SÍMBÍÀTÚÚ completely transformed our brand presence. As a growing wellness business, we struggled to get noticed online. The team at SÍMBÍÀTÚÚ not only designed a stunning website for us but also created content that truly tells our story. Within just three months, we've seen a 40% increase in customer engagement. They don't just provide services—they become your growth partner.",
      author: 'Emma L.',
      position: 'Wellness Business Owner',
      location: 'Manchester, UK',
    },
    {
      text: 'Professional, creative, and results-driven. We partnered with SÍMBÍÀTÚÚ for social media and video marketing. Their storytelling approach connected perfectly with our audience, and the results were immediate. Engagement doubled, and we gained more qualified leads than ever. Their passion and attention to detail set them apart from other agencies.',
      author: 'James R.',
      position: 'Tech Startup Founder',
      location: 'Liverpool, UK',
    },
    {
      text: 'They understood our challenges and delivered beyond expectations. As a small charity, we needed affordable but impactful marketing support. SÍMBÍÀTÚÚ provided branding, event promotion, and content that helped us raise awareness and connect with donors. What impressed us most was their heart—their commitment to our mission felt as strong as ours.',
      author: 'Sophie K.',
      position: 'Non-Profit Director',
      location: 'Leeds, UK',
    },
  ];

  certifications = [
    'Certified Content Marketing Starter',
    'Certified Social Media Associate',
    'Certified SEO & Visibility Specialist',
    'Certified Branding Fundamentals',
  ];
}
