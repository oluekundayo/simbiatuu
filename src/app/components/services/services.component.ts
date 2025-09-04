import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  sections = [
    {
      id: 'wallet',
      title: 'Unattached Affiliate Marketing',
      subtitle:
        'This is the fastest entry point. You don’t need an audience, a website, or a personal brand. All you do is run ads or share links that drive people directly to a product or service.',
      features: [
        'Want to test affiliate marketing without building a platform.',
        'Prefer paid advertising like Google Ads, Facebook Ads, or banner placements.',
        'Like the idea of promoting multiple products without being tied to a single niche.',
        'Real-time notifications',
      ],
      phoneContent: 'With this model, you’re free to explore, experiment, and earn without needing to be the “face” of the product.',
      gradient: 'bg-gradient-to-br from-blue-50 to-indigo-100',
      img: 'market-01.jpg',
    },
    {
      id: 'analytics',
      title: 'Related Affiliate Marketing',
      subtitle:
        'We lets you recommend products and services that fit naturally with your content, even if you don’t personally use them. By leveraging your influence and authority, you can connect your followers with solutions they’re already interested in.',
      features: [
        'Run a blog, YouTube channel, or social media page in a niche',
        'Want to earn by suggesting products that complement your content.',
        'Prefer to stay flexible without committing to using every product yourself.',
      ],
      phoneContent: 'This approach helps you monetize your platform while keeping your audience engaged with valuable recommendations that align with their interests.',
      gradient: 'bg-gradient-to-br from-emerald-50 to-green-100',
      img: 'market-02.jpg',
    },
    {
      id: 'cards',
      title: 'Involved Affiliate Marketing',
      subtitle:
        'This is all about promoting products you personally use and believe in. You share your genuine experiences, reviews, and results—making your recommendations far more authentic and convincing.Involved affiliate marketing is the most authentic and trust-driven type. Here, you actively use, test, and trust the product before recommending it. Your content is based on real experience, making your promotion highly believable.',
      features: [
        'Want to connect deeply with your audience through honesty.',
        'Prefer creating content like tutorials, case studies, or personal reviews.',
        'Believe in “showing, not just telling” when recommending products.',
      ],
      phoneContent: 'When your audience sees that you actually use what you promote, they’re much more likely to trust you—and take action through your links.',
      gradient: 'bg-gradient-to-br from-purple-50 to-violet-100',
      img: 'market-03.jpg',
    },
    {
      id: 'cards',
      title: 'Pay-Per-Click Affiliate Marketing',
      subtitle:
        'you can earn money every time someone clicks your affiliate link—no sales required. It’s all about generating clicks and sending visitors to the advertiser’s website.',
      features: [
        'Know how to run ads or drive large amounts of traffic',
        'Prefer quick results without waiting for sales.',
        'Want a low-barrier way to start earning commissions.',
      ],
      phoneContent: 'The more clicks you generate, the more you earn—making it an exciting option for traffic-focused marketers.',
      gradient: 'bg-gradient-to-br from-purple-50 to-violet-100',
      img: 'market-04.avif',
    },
    {
      id: 'cards',
      title: 'Pay-Per-Lead Affiliate Marketing',
      subtitle:
        'You can get paid whenever someone completes a simple action—like signing up for a newsletter, filling out a form, or registering for a free trial.',
      features: [
        'Target audiences who are curious but not ready to buy yet.',
        'Promote services that rely on sign-ups, free trials, or inquiries.',
        'Want faster conversions compared to traditional sales-based models.',
      ],
      phoneContent: 'This model rewards you for generating interest, making it a great way to build income even when people aren’t ready to make a purchase.',
      gradient: 'bg-gradient-to-br from-purple-50 to-violet-100',
      img: 'market-05.avif',
    },
    {
      id: 'cards',
      title: 'Pay-Per-Sale Affiliate Marketing',
      subtitle:
        'You can earn a commission every time someone makes a purchase through your affiliate link. Your earnings are usually a percentage of the sale, which means the more value you help generate, the more you earn.',
      features: [
        'Have an audience that trusts your recommendations.',
        'Enjoy creating content like reviews, comparisons, and tutorials.',
        'Want higher earning potential from each successful referral.',
      ],
      phoneContent: 'This model is the foundation of most affiliate programs and offers steady, scalable income for affiliates who know how to convert their traffic into buyers.',
      gradient: 'bg-gradient-to-br from-purple-50 to-violet-100',
      img: 'market-06.webp',
    },
    {
      id: 'cards',
      title: 'Two-Tier Affiliate Marketing',
      subtitle:
        'Hey, lets you make money on two levels: earn commissions from the sales you generate directly, and earn a smaller commission from the sales made by other affiliates you refer to the program',
      features: [
        'Enjoy building connections with other marketers.',
        'Want to grow a team or network that also earns for you.',
        'Like the idea of passive income from other affiliates’ efforts.',
      ],
      phoneContent: 'With this model, your success isn’t limited to your own work—you also benefit as your network grows and performs.',
      gradient: 'bg-gradient-to-br from-purple-50 to-violet-100',
      img: 'market-07.webp',
    },
    {
      id: 'cards',
      title: 'Recurring Affiliate Marketing',
      subtitle:
        'This will pay you every time your referred customer makes a repeat payment—usually for subscription-based products or memberships. Instead of earning once, you keep earning for as long as the customer stays subscribed.',
      features: [
        'Promote SaaS tools, online memberships, or subscription boxes.',
        'Want to grow steady, passive income over time.',
        'Prefer long-term rewards instead of one-time commissions.',
      ],
      phoneContent: 'With this model, one referral can pay you for months—or even years—making it one of the most powerful ways to earn as an affiliate.',
      gradient: 'bg-gradient-to-br from-purple-50 to-violet-100',
      img: '004.jpg',
    },
  ];
}
