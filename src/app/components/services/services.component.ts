import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
 

  sections = [
    {
      id: 'wallet',
      title: 'Portrait Photography/ Personal Branding',
      subtitle: 'I help businesses and entrepreneurs capture compelling story-led visuals that not only showcase their brand but also define their voice, connect emotionally with their audience, and build lasting trust both online and offline.',
      features: [
        'Easy expense management',
        'Budget tracking and analytics',
        'Secure payment processing',
        'Real-time notifications'
      ],
      phoneContent: 'wallet',
      gradient: 'bg-gradient-to-br from-blue-50 to-indigo-100',
      img:'002.jpg'
    },
    {
      id: 'analytics',
      title: 'Storytelling Content Creation & Marketing',
      subtitle: 'From visuals to voice, I create content that brings your brand to life. Using a strategic storytelling approach, I help you communicate your message clearly, creatively, and consistently so your audience isn’t just scrolling.',
      features: [
        'Advanced spending analytics',
        'Personalized insights and tips',
        'Goal tracking and progress',
        'Custom financial reports'
      ],
      phoneContent: 'analytics',
      gradient: 'bg-gradient-to-br from-emerald-50 to-green-100',
      img:'003.jpg'
    },
    {
      id: 'cards',
      title: 'Affiliate Marketing',
      subtitle: 'Let me help you promote your products with authenticity. As an affiliate marketer, I spotlight your brand to my engaged audience organically and with impact.',
      features: [
        'Multiple card management',
        'Instant card controls',
        'Contactless payments',
        'Enhanced security features'
      ],
      phoneContent: 'cards',
      gradient: 'bg-gradient-to-br from-purple-50 to-violet-100',
      img:'004.jpg'
    }
  ];

}
