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
      name: 'Gur Singh',
      role: 'Co-Founder, CodeRabbit',
      quote:
        'From SEO audits to paid acquisition, Stackmatix brings a level of thoughtfulness and precision that’s rare. They’re one of the best decisions we’ve made as a startup.',
      image: 'assets/people/gur.jpg', // Adjust with real path or use base64/image URL
    },
    {
      name: 'Luke Wilson',
      role: 'Founder & CEO, ManageXR',
      quote:
        "We've had a great experience with Stackmatix over the last 3 years! They've been a trusted partner as we've experimented and refined our strategy for all types of digital ads, from search to display to social.",
      image: 'assets/people/luke.jpg',
    },
    {
      name: 'Joe Guo',
      role: 'Founder & CEO, ACE Studio',
      quote:
        'Stackmatix combines sharp strategy with deep technical know-how. They don’t just execute — they help us make smarter decisions across our entire growth funnel.',
      image: 'assets/people/joe.jpg',
    },
    {
      name: 'Leslie Tyler',
      role: 'CMO, Pinwheel',
      quote:
        'Stackmatix helped us find scale without sacrificing efficiency. They’re hands-on, strategic, and genuinely invested in our success.',
      image: 'assets/people/leslie.jpg',
    },
  ];

}
