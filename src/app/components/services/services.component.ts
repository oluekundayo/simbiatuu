import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    {
      title: 'Social Media Marketing',
      description:
        'I help businesses build strong, story-led social media strategies that drive engagement, grow visibility and build trust with the right audience.',
      icon: 'archive-tick.svg',
      iconBg: 'bg-blue-500',
    },
    {
      title: 'Content Creation & Marketing',
      description:
        'From visuals to voice, I create content that brings your brand to life. Using a strategic storytelling approach, I help you communicate your message clearly, creatively, and consistently so your audience isn’t just scrolling.',
      icon: 'cpu-charge.svg',
      iconBg: 'bg-pink-400',
    },
    {
      title: 'Affiliate Marketing',
      description:
        'Let me help you promote your products with authenticity. As an affiliate marketer, I spotlight your brand to my engaged audience organically and with impact.',
      icon: 'sound.svg',
      iconBg: 'bg-blue-500',
    },
    {
      title: 'Personal Branding',
      description:
        'Stand out with confidence. I help entrepreneurs define their voice, craft their narrative, and show up powerfully online and offline.',
      icon: 'note-2.svg',
      iconBg: 'bg-pink-400',
    },
    {
      title: 'Event Planning & Coordination',
      description:
        'From wellness and tech activations, your name,  to product launches, I plan experiences that tell your brand story and leave lasting impressions.',
      icon: 'shop.svg',
      iconBg: 'bg-blue-500',
    },
    {
      title: 'Public Speaking',
      description:
        'I speak on marketing, entrepreneurship, personal branding, motherhood and resilience—sharing insight-rich, story-driven talks that spark action and connection.',
      icon: 'volume-high.svg',
      iconBg: 'bg-pink-400',
    },
  ];
}
