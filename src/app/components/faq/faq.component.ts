import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs = [
    {
      question:
        'What is affiliate marketing, and how can it benefit my business?',
      answer:
        'Affiliate marketing is a performance based marketing model where independent partners (affiliates) promote your products or services. You only pay them when they generate sales, leads, or traffic for you. This ensures cost effective growth and a higher return on investment.',
      open: true,
    },
    {
      question:
        "How do you find the right affiliates for my brand?",
      answer:
        'We carefully vet affiliates based on your target audience, niche, and campaign goals. Our network includes bloggers, influencers, media buyers, and content creators who are experienced in driving quality traffic that converts.',
      open: false,
    },
    {
      question: 'How much does it cost to run an affiliate program with you?',
      answer:
        'The cost depends on your business goals, commission structure, and level of management required. You’ll typically pay affiliates a percentage of each sale or a set amount per lead. We’ll work with you to design a program that fits your budget.',
      open: false,
    },
  ];

  toggleFaq(index: number) {
    this.faqs = this.faqs.map((faq, i) => ({
      ...faq,
      open: i === index ? !faq.open : false,
    }));
  }
}
