import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-streamline',
  imports: [],
  templateUrl: './streamline.component.html',
  styleUrl: './streamline.component.css'
})
export class StreamlineComponent {

  _router = inject(Router);

  // people = [
    
  //   { img: 'simbi.jpg', rotate: -8, translateY: 5, scale: 0.98 },
  //   { img: 'simbi1.jpg', rotate: -4, translateY: 10, scale: 0.95 },
  //   { img: 'simbi2.jpg', rotate: -2, translateY: 5,  scale: 0.98 },
  //   { img: 'simbi3.jpg', rotate: 0,  translateY: 0,  scale: 1 },
  //   // { img: 'simbi4.jpg', rotate: 2,  translateY: 5,  scale: 0.98 },
  //   // { img: 'simbi5.jpg', rotate: 4,  translateY: 10, scale: 0.95 },
  //   // { img: 'madam.jpg', rotate: 8,  translateY: 20, scale: 0.9 },
  // ];

  // send() {
  //   this._router.navigateByUrl('/contact')
  // }

  // images = [
  //   'simbi.jpg',
  //   'forbes.jpg',
  //   'madam.jpg',
  //   'simbi.jpg',
  //   'madam.jpg',
  //   'madam.jpg',
  //   'simbi.jpg',
  //   'forbes.jpg',
  //   'madam.jpg',
  //   'simbi.jpg',
  //   'madam.jpg',
  //   'madam.jpg',
  // ];

  // getImagePositionClass(index: number) {
  //   // Creates a staggered/curved effect
  //   const offsets = ['translate-y-4', '-translate-y-2', 'translate-y-6', 'translate-y-0'];
  //   return offsets[index % offsets.length];
  // }

  teamMembers = [
    {
      name: 'Awe Simbiat.',
      role: 'CEO',
      country: 'UK',
      skills: ['Founder', ''],
      image: 'simbi3.jpg'
    },
    {
      name: 'Olumide E.',
      role: 'Software Engineer',
      country: 'NG',
      skills: ['Engineer'],
      image: 'https://via.placeholder.com/300x400?text=Marley'
    },
    {
      name: 'Yalin E.',
      role: 'Fullstack Developer',
      country: '🇹u',
      skills: ['Designer', ''],
      image: 'https://via.placeholder.com/300x400?text=Yalin'
    },
    {
      name: 'Juan R.',
      role: 'DevOps Engineer',
      country: '🇪🇸',
      skills: ['Azure', 'Docker'],
      image: 'https://via.placeholder.com/300x400?text=Juan'
    },
    {
      name: 'Yalin E.',
      role: 'Fullstack Developer',
      country: '🇹🇷',
      skills: ['JavaScript', 'Java'],
      image: 'https://via.placeholder.com/300x400?text=Yalin'
    },
    {
      name: 'Juan R.',
      role: 'DevOps Engineer',
      country: '🇪🇸',
      skills: ['Azure', 'Docker'],
      image: 'https://via.placeholder.com/300x400?text=Juan'
    },
    {
      name: 'Yalin E.',
      role: 'Fullstack Developer',
      country: '🇹🇷',
      skills: ['JavaScript', 'Java'],
      image: 'https://via.placeholder.com/300x400?text=Yalin'
    },
    {
      name: 'Juan R.',
      role: 'DevOps Engineer',
      country: '🇪🇸',
      skills: ['Azure', 'Docker'],
      image: 'https://via.placeholder.com/300x400?text=Juan'
    }
  ];

  scrollLeft(container: HTMLElement) {
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight(container: HTMLElement) {
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
