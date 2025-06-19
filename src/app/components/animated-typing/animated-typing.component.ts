import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-animated-typing',
  imports: [],
  templateUrl: './animated-typing.component.html',
  styleUrl: './animated-typing.component.css',
})
export class AnimatedTypingComponent implements OnInit {
  
  @Input() phrases: string[] = [];
  currentPhraseIndex = 0;
  animatedText = '';
  isDeleting = false;
  typingSpeed = 100; // speed in ms
  pauseBetweenPhrases = 1000; // pause before deleting
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.typePhrase(); // Only run on client
    }
  }

  typePhrase(): void {
    const currentPhrase = this.phrases[this.currentPhraseIndex];
    const fullLength = currentPhrase.length;

    if (this.isDeleting) {
      this.animatedText = currentPhrase.substring(
        0,
        this.animatedText.length - 1
      );
    } else {
      this.animatedText = currentPhrase.substring(
        0,
        this.animatedText.length + 1
      );
    }

    let timeout = this.typingSpeed;

    // Pause at the end of full phrase
    if (!this.isDeleting && this.animatedText === currentPhrase) {
      timeout = this.pauseBetweenPhrases;
      this.isDeleting = true;
    }

    // Move to next phrase after deleting
    else if (this.isDeleting && this.animatedText === '') {
      this.isDeleting = false;
      this.currentPhraseIndex =
        (this.currentPhraseIndex + 1) % this.phrases.length;
      timeout = this.typingSpeed;
    }

    setTimeout(() => this.typePhrase(), timeout);
  }
}
