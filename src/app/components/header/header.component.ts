import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DrawerComponent } from '../drawer/drawer.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, NgTemplateOutlet, DrawerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menu: boolean = false;
  iscreateOpen = false; // already there for opening/closing drawer
  isSolutionsOpen = false; // new state for "Our solutions"
  _router = inject(Router);
  arrow: boolean = false;
  arrowName: any;

  toggleMenu() {
    this.menu = !this.menu;
  }

  toggleCreate() {
    this.iscreateOpen = !this.iscreateOpen;
    if (!this.iscreateOpen) {
      this.isSolutionsOpen = false; // reset submenu when drawer closes
    }
  }

  toggleSolutions(name?: string) {
    this.arrowName = name;
    this.arrow = !this.arrow;
    this.isSolutionsOpen = !this.isSolutionsOpen;
  }
  send() {
    this._router.navigateByUrl('/contact');
  }

  mainServices = [
    { title: 'Home', link: '/home' },
    { title: 'About us', link: '/about' },
    // { title: 'Services', link: '/service' },
    { title: 'Our solutions', click: () => this.toggleSolutions('Our solutions') },
    { title: 'Blog', link: '/blog' },
    { title: 'Pricing', link: '/pricing' },
    { title: 'Contact us', link: '/contact' },
  ];

  services = [
    {
      title: 'Affiliate Marketing',
      description: 'Build new revenue streams.',
      link: '/affiliate',
    },
    {
      title: 'Couture',
      description: 'Style-driven solutions for brands & consumers.',
      link: '/Couture',
    },
    {
      title: 'Charity & Non-Profit Support',
      description: 'Strategies with purpose.',
      link: '/charity',
    },
    {
      title: 'Events & Styling',
      description: 'Memorable experiences that connect.',
      link: '/events',
    },
    {
      title: '360 Content Marketing',
      description: 'Strategy, storytelling, and execution.',
      link: '/360Content',
    },
    {
      title: 'Gift Shop',
      description: 'Curated gifting for every occasion.',
      link: '/gift',
    },
    // {
    //   title: 'Cloud Academy',
    //   description: 'Digital learning for modern growth.',
    //   link: '/cloud',
    // },
    // {
    //   title: 'Digital Products',
    //   description: 'Scalable, future-ready solutions.',
    //   link: '/digital',
    // },
    // {
    //   title: 'Food & Dining',
    //   description: 'Culinary ventures that delight and inspire.',
    //   link: '/food',
    // },
    // {
    //   title: 'Care Agency',
    //   description: 'Trusted, people-first care services.',
    //   link: '/care',
    // },
    // {
    //   title: 'Photography',
    //   description: 'Visual storytelling that captures impact.',
    //   link: '/photo',
    // },
    // {
    //   title: 'Public Speaking',
    //   description: 'Inspiring talks that spark change.',
    //   link: '/public',
    // },
    // {
    //   title: 'Real Estate',
    //   description: 'Smarter property solutions.',
    //   link: '/real',
    // },
    // {
    //   title: 'Vending Services',
    //   description: 'Convenience that works anywhere.',
    //   link: '/vending',
    // },
  ];
}
