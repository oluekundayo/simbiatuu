import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

type DrawerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [NgClass],
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent {
  @Input() isOpen = false;
  @Input() title = '';
  @Input() arrow = false;
  @Input() arrowName = '';

  // sizes
  @Input() size: DrawerSize = 'md';
  @Input() mobileSize: DrawerSize = 'full';

  @Output() backNav = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  private sizeMap: Record<DrawerSize, string> = {
    sm: 'w-[20%]',
    md: 'w-[40%]',
    lg: 'w-[60%]',
    xl: 'w-[80%]',
    full: 'w-full',
  };

  // Order matters here
  private orderedSizes: DrawerSize[] = ['sm', 'md', 'lg', 'xl', 'full'];

  get responsiveSizeClass(): string {
    const mobileClass = this.sizeMap[this.mobileSize] || this.sizeMap['full'];
    const desktopClass = this.sizeMap[this.size] || this.sizeMap['md'];

    // find one size smaller for md breakpoint
    const currentIndex = this.orderedSizes.indexOf(this.size);
    const smallerIndex = Math.max(0, currentIndex - 1); // fallback to 'sm'
    const mdSize = this.orderedSizes[smallerIndex];
    const mdClass = this.sizeMap[mdSize];
    // console.log(
    //   'object :>> ',
    //   `${mobileClass} md:${mdClass} lg:${desktopClass}`
    // );
    return `${mobileClass} md:${mdClass} lg:${desktopClass}`;
  }

  closeDrawer(): void {
    this.isOpen = false;
    this.close.emit();
  }
  backNavDrawer(): void {
    this.backNav.emit();
  }
}
