import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  email: string = '';

  onSubscribe(): void {
    if (this.email) {
      console.log('Newsletter subscription for:', this.email);
      // Handle newsletter subscription logic here
      this.email = '';
      // You can add success message or API call here
    }
  }
}
