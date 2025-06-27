import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, NgTemplateOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menu: boolean = false;
  _router = inject(Router);

  toggleMenu() {
    this.menu = !this.menu;
  }
  send() {
    this._router.navigateByUrl('/contact')
  }
}
