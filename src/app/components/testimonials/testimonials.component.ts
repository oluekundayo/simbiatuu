import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Sarah O.',
      role: 'Founder, London',
      quote:
        'Simbíàtúú helped us transform our brand’s messaging. Her storytelling approach brought warmth and clarity to our content, and our engagement tripled within weeks.',
      image: 'assets/people/gur.jpg', // Adjust with real path or use base64/image URL
    },
    {
      name: 'James T',
      role: 'Tech Startup CEO',
      quote:
        "Professional, creative, and truly committed to our growth. From content to strategy, every deliverable exceeded expectations. Simbíàtúú doesn't just 'do marketing'—she brings vision, voice, and value.",
      image: 'assets/people/luke.jpg',
    },
    {
      name: 'Lola A.',
      role: ' Real Estate Entrepreneur',
      quote:
        'Her events are as powerful as her brand strategy.We partnered with Simbíàtúú for a launch event and ended up hiring her for full business development. She just gets it—her ideas are fresh and her execution is flawless.',
      image: 'assets/people/joe.jpg',
    },
  ];

}
