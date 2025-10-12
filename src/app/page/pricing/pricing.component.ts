import { Component, inject, input, signal } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { StreamlineComponent } from "../../components/streamline/streamline.component";
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";
import { FaqComponent } from "../../components/faq/faq.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Router } from '@angular/router';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-pricing',
  imports: [DecimalPipe],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  plans = input<any>();
  _router = inject(Router);
  billingCycle = signal<'monthly' | 'yearly'>('monthly');

  currentPlans() {
    return this.plans();
  }

  isObjectPrice(price: any): boolean {
    return typeof price === 'object' && price !== null;
  }

  send() {
    this._router.navigateByUrl('/contact')
  }
}
