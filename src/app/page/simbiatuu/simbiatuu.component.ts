import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faBullseye,
  faCalendar,
  faChartBar,
  faEnvelope,
  faFileAlt,
  faMicrophone,
  faPalette,
  faShareAlt,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from "../../components/header/header.component";
// import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-simbiatuu',
  standalone: true,
  imports: [FaIconComponent, HeaderComponent],
  templateUrl: './simbiatuu.component.html',
  styleUrl: './simbiatuu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimbiatuuComponent {
  readonly brandName = 'S\u00cdMB\u00cd\u00c0T\u00da\u00da';
  readonly email = 'workwithsimbiatuu@gmail.com';
  readonly phone = '+447852304977';
  readonly phoneHref = 'tel:+447852304977';
  readonly mailHref = 'mailto:workwithsimbiatuu@gmail.com';
  readonly instagram = '@simbiatuu / @simaffiliates';

  readonly brandStoryParagraphs = [
    `${this.brandName} is not just a name - it is a declaration. Born from the lived experience of a single immigrant mother navigating the UK with nothing but faith, grit, and a relentless desire to rise, this brand is a testament to what becomes possible when a woman refuses to shrink.`,
    'She arrived carrying the weight of migration, then single motherhood, and financial uncertainty. Instead of breaking, she built - a body she is proud of, a spiritual foundation that anchors her, a love life she is intentionally curating, and multiple streams of digital income that work while she rests.',
    `${this.brandName} is the embodiment of becoming whole, becoming wealthy, and becoming aligned - after motherhood and beyond. Every piece of content, every product, every partnership carries this truth: <strong>your story is your most powerful asset.</strong>`,
  ];

  readonly journeySteps = [
    {
      number: '01',
      title: 'Becoming a single immigrant mother in the UK',
    },
    {
      number: '02',
      title: 'Began rebuilding body, faith, and finances simultaneously',
    },
    {
      number: '03',
      title: 'Built digital income streams and a coaching business',
    },
    {
      number: '04',
      title: 'Created a platform for women rising just like her',
    },
  ];

  readonly pillars = [
    {
      title: 'Mindset Revamp',
      description:
        'Shifting perspective, building resilience, and creating the mental clarity needed to rise with purpose.',
      image: 'simbi1.jpg',
    },
    {
      title: 'Body Restoration',
      description:
        'Postpartum recovery, exercise, nutrition, and reclaiming strength with discipline and self-respect.',
      image: 'simbi4.jpg',
    },
    {
      title: 'Financial Restoration',
      description:
        'Building multiple income streams and creating lasting financial freedom through digital systems.',
      image: 'madam.jpg',
    },
    {
      title: 'Faith & Spiritual Alignment',
      description:
        'A God-centered life that guides every decision. Spiritual grounding as the foundation of all growth - personal and professional.',
      image: 'simbi3.jpg',
    },
  ];

  readonly demographics = [
    {
      title: 'Primary Age Range',
      description: '25-65 years old',
    },
    {
      title: 'Location',
      description:
        'UK-based with a strong diaspora following across Europe, the US, and Africa',
    },
    {
      title: 'Identity',
      description:
        'Immigrant mothers, single mothers, women rebuilding after hardship or relationship breakdown',
    },
    {
      title: 'Faith Background',
      description:
        'Predominantly Christian - faith is a major purchase motivator',
    },
  ];

  readonly psychographics = [
    {
      title: 'Actively Investing in Self-Improvement',
      description:
        'Courses, coaching, wellness products, and spiritual resources',
    },
    {
      title: 'Financially Aspirational',
      description:
        'Seeking real, achievable routes to digital income and freedom',
    },
    {
      title: 'Community-Driven',
      description:
        'High trust in authentic voices - they buy from people they believe in',
    },
    {
      title: 'Emotionally Invested',
      description:
        'Deeply loyal to brands that see, understand, and speak to their lived experience',
    },
  ];

  readonly offers = [
    {
      title: 'Digital Products',
      description:
        'Workbooks, guides, planners, and frameworks for wellness, income building, and personal development - available globally, 24/7.',
      icon: faFileAlt,
    },
    {
      title: 'Personal Development Coaching',
      description:
        'One-on-one and group coaching for women ready to accelerate their transformation across body, spirit, relationships, and finances.',
      icon: faUsers,
    },
    {
      title: 'Online Income Education',
      description:
        'Step-by-step education for women building their first or next stream of digital income - practical, proven, and accessible.',
      icon: faChartBar,
    },
    {
      title: 'Affiliate Marketing',
      description:
        "Strategic partnerships with brands that align with the community's needs - authentic recommendations that convert with integrity.",
      icon: faShareAlt,
    },
    {
      title: 'Brand Partnerships',
      description:
        `Curated collaborations with brands whose values match the ${this.brandName} audience - wellness, faith, finance, lifestyle, and tech.`,
      icon: faBullseye,
    },
  ];

  readonly valueHighlights = [
    {
      title: 'Authentic, High-Trust Audience',
      description:
        `An engaged community that follows, believes in, and buys from ${this.brandName} because of deep personal resonance - not viral trends.`,
      icon: faUsers,
    },
    {
      title: 'Underrepresented Yet Lucrative Niche',
      description:
        'First-mover advantage for brands wanting to reach immigrant and single mothers with genuine, credible representation.',
      icon: faBullseye,
    },
    {
      title: 'Multi-Platform Presence',
      description:
        'Content distributed across social platforms, email lists, digital products, and live coaching - maximum touchpoints for your brand.',
      icon: faChartBar,
    },
    {
      title: 'Values-Aligned Influence',
      description:
        'Faith, wellness, and financial empowerment are not trends here - they are a lived lifestyle. Your brand benefits from that authentic alignment.',
      icon: faPalette,
    },
  ];

  readonly collaborationOpportunities = [
    {
      title: 'Sponsored Content',
      description:
        `Dedicated posts, reels, stories, and long-form content featuring your brand - scripted authentically in ${this.brandName}'s voice.`,
      icon: faShareAlt,
    },
    {
      title: 'Brand Ambassadorship',
      description:
        `Long-term, ongoing representation of your brand across all ${this.brandName} platforms - the highest-trust, highest-impact partnership tier.`,
      icon: faUsers,
    },
    {
      title: 'Product Integrations',
      description:
        'Seamless weaving of your product or service into daily content, tutorials, and transformation journeys.',
      icon: faBullseye,
    },
    {
      title: 'Speaking & Live Events',
      description:
        'Panel discussions, keynote appearances, brand events, and community activations - bringing her powerful story directly to your audience.',
      icon: faMicrophone,
    },
    {
      title: 'Co-Created Digital Products',
      description:
        `Joint workbooks, guides, or courses that carry both the brand's authority and ${this.brandName}'s trusted voice.`,
      icon: faFileAlt,
    },
  ];

  readonly testimonials = [
    {
      quote: 'She made me believe it was actually possible.',
      text: `${this.brandName} didn't just inspire me - she showed me the exact steps. I launched my first digital product within 30 days of following her. As an immigrant mum, I never thought this was for me. She proved it was.`,
      author: 'Community Member, UK',
    },
    {
      quote: 'Finally, someone who looks like me and lives like me.',
      text: 'Faith, money, motherhood, and healing - she covers it all without apology. I have never felt so seen by a content creator. I buy everything she recommends because I trust her completely.',
      author: 'Follower, London',
    },
    {
      quote: 'My body, my finances, and my faith all shifted.',
      text: `I came for the wellness content and stayed for everything. Three months in, I had lost weight, started my side income, and felt closer to God than ever. ${this.brandName} is the real deal.`,
      author: 'Coaching Client',
    },
  ];

  readonly stats = [
    {
      value: '5,000+',
      label: 'Followers & Growing',
      description: 'Loyal, engaged, faith-driven community',
    },
    {
      value: '790K+',
      label: 'Total Views',
      description: 'Massive organic reach across platforms',
    },
    {
      value: '25K+',
      label: 'Total Interactions',
      description: 'Comments, shares, saves & DMs',
    },
    {
      value: '3',
      label: 'Countries Reached',
      description: 'UK, Europe, and the global diaspora',
    },
  ];

  readonly contactChannels = [
    {
      title: 'Email',
      value: this.email,
      href: this.mailHref,
      description:
        `Send your partnership proposal or inquiry directly to the ${this.brandName} brand team for a response within 48 hours.`,
      icon: faEnvelope,
    },
    {
      title: 'Instagram & Social',
      value: this.instagram,
      href: 'https://www.instagram.com/simbiatuu/',
      description:
        'Connect via DM on Instagram or other social platforms for quick introductions and collaboration conversations.',
      icon: faShareAlt,
    },
    {
      title: 'Book a Discovery Call',
      value: this.phone,
      href: this.phoneHref,
      description:
        `Schedule a 30-minute strategy call to explore how ${this.brandName} and your brand can create something extraordinary together.`,
      icon: faCalendar,
    },
  ];

  readonly footerThemes = [
    'Wellness',
    'Faith',
    'Finance',
    'Relationships',
    'Legacy',
  ];
}
