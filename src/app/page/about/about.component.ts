import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";

@Component({
  selector: 'app-about',
  imports: [HeaderComponent, FooterComponent, TestimonialsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
