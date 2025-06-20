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
        'What types of businesses do you typically support?',
      answer:
        'I work primarily with small to mid-sized enterprises (SMEs) across diverse industries including health, wellness, technology, lifestyle, hospitality, non-profits, and real estate. Whether a business is in the launch phase, scaling, or undergoing a strategic rebrand, my approach is tailored to meet its specific growth objectives.',
      open: true,
    },
    {
      question:
        "How do your marketing services differ from traditional agencies?",
      answer:
        'My services combine strategic insight with compelling storytelling and full-stack marketing execution. As both a marketer and entrepreneur, I understand the challenges businesses face from the inside out. This perspective allows me to develop holistic, results-driven solutions that not only enhance visibility but also strengthen brand trust and long-term positioning.',
      open: false,
    },
    {
      question: 'Do you offer support for businesses that are still defining their brand identity?',
      answer:
        'Yes. I frequently work with clients who are seeking greater clarity around their brand voice, positioning, and narrative. Through structured brand discovery and messaging strategy sessions, I help organizations articulate a clear, consistent identity that resonates with their target audience and aligns with their core mission.',
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
