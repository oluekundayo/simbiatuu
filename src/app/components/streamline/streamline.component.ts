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

  people = [
    
    { img: 'simbi.jpg', rotate: -8, translateY: 5, scale: 0.98 },
    { img: 'simbi1.jpg', rotate: -4, translateY: 10, scale: 0.95 },
    { img: 'simbi2.jpg', rotate: -2, translateY: 5,  scale: 0.98 },
    { img: 'simbi3.jpg', rotate: 0,  translateY: 0,  scale: 1 },
    // { img: 'simbi4.jpg', rotate: 2,  translateY: 5,  scale: 0.98 },
    // { img: 'simbi5.jpg', rotate: 4,  translateY: 10, scale: 0.95 },
    // { img: 'madam.jpg', rotate: 8,  translateY: 20, scale: 0.9 },
  ];

  send() {
    this._router.navigateByUrl('/contact')
  }

  images = [
    'simbi.jpg',
    'forbes.jpg',
    'madam.jpg',
    'simbi.jpg',
    'madam.jpg',
    'madam.jpg',
    'simbi.jpg',
    'forbes.jpg',
    'madam.jpg',
    'simbi.jpg',
    'madam.jpg',
    'madam.jpg',
  ];

  getImagePositionClass(index: number) {
    // Creates a staggered/curved effect
    const offsets = ['translate-y-4', '-translate-y-2', 'translate-y-6', 'translate-y-0'];
    return offsets[index % offsets.length];
  }
}
