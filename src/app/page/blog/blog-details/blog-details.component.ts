import { Component, inject } from '@angular/core';
import { BlogAuthorComponent } from "./blog-author/blog-author.component";
import { RelatedPostsComponent } from "./related-posts/related-posts.component";
import { BlogSidebarComponent } from "./blog-sidebar/blog-sidebar.component";
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { FooterComponent } from "../../../components/footer/footer.component";
import { HeaderComponent } from "../../../components/header/header.component";

@Component({
  selector: 'app-blog-details',
  imports: [BlogAuthorComponent, RelatedPostsComponent, BlogSidebarComponent, NgFor, FooterComponent, HeaderComponent],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent {
  
  router = inject(Router);
  details: any

  constructor() {
    const navigation = this.router.getCurrentNavigation();
    this.details = navigation?.extras?.state?.["e"];
    console.log("Savings ID:", this.details);
    if (!this.details) {
      console.warn('No savingsId found in navigation state!');
      // this.onBack()
      // Optional: redirect or fetch default data
      // this.router.navigate(['/some-safe-page']);
    } else {
      // console.log('Received savingsId:', savingsId);
    }
  }

  blog = {
    title: "The Mini-Me Denim Guide: The Best Gift for Stylish Kids",
    image: "blog2.jpg",
    content: `
      <p class="mb-4">Mini-me fashion is trending again! Whether it’s denim jackets or cute jeans, this guide will help you find the best gift ideas for the little fashionistas in your life.</p>
      <p class="mb-4">Denim is durable, stylish, and always in season. Here’s why it makes the perfect gift.</p>
      <p class="mb-4">Let’s dive into styling tips, brands to shop, and the must-haves for every stylish kid’s wardrobe.</p>
    `,
    author: {
      name: "Aisha Bello",
      image: "blog2.jpg",
      bio: "Fashion mom, blogger, and minimalist stylist."
    },
    tags: ['kidswear', 'fashion', 'denim', 'gift guide']
  };
}
