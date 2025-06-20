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
        'What makes Stackmatix the best marketing agency for venture-backed startups?',
      answer:
        'Stackmatix is purpose-built to help venture-backed startups scale fast. We’ve worked with 200+ startups backed by top-tier VCs like a16z, Sequoia, HFO and YCombinator, driving results across paid media, analytics, SEO, and growth strategy. Our team of startup marketers knows how to balance efficiency with speed, making us the ideal partner for early-stage companies looking to grow quickly and responsibly.',
      open: true,
    },
    {
      question:
        "Do you specialize in working with Seed to Pre-IPO or even IPO'd startups/scaleups?",
      answer:
        'Yes! We work across all funding stages—from Seed through Pre-IPO—and support IPO-ready teams looking to scale performance channels or prep for exit.',
      open: false,
    },
    {
      question: 'Do you have experience in our industry?',
      answer:
        'We’ve worked with companies across SaaS, fintech, healthtech, marketplace, and more. Our industry-agnostic approach is grounded in deep channel expertise and testing frameworks.',
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
