import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { FaqComponent } from "../../components/faq/faq.component";
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";
import { ServicesComponent } from "../../components/services/services.component";
import { AnimatedTypingComponent } from "../../components/animated-typing/animated-typing.component";
import { HeaderComponent } from "../../components/header/header.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-serivce',
  imports: [FooterComponent, FaqComponent, TestimonialsComponent, ServicesComponent, HeaderComponent, RouterLink],
  templateUrl: './serivce.component.html',
  styleUrl: './serivce.component.css'
})
export class SerivceComponent {
  categories = ['All', 'E-Commerce', 'Marketing', 'Health', 'cloud computing', 'Vending', 'wash'];
  selectedCategory = 'All';

  caseStudies = [
    {
      title: 'BraveWoman Collections by SÍMBÍÀTÚÚ',
      type: 'E-Commerce',
      description:
        ' Online Boutique for fashionable moms who love a blend of simplicity and modernization. Clothes Built for the boss mom who owns her  story.',
      image: 'collections.jpg',
    },
    {
      title: '6fig+Marketing by  SÍMBÍÀTÚÚ',
      type: 'Marketing',
      description:
        'Comprehensive global full-stack marketing company based in the United Kingdom. Focused on health, wellness, tech, lifestyle, non-profits and hospitality sectors. Pioneer of 6figmoms Academy Full-stack Marketing and business coaching academy for struggling moms in the United Kingdom.',
      image: 'sixfig.jpg',
    },
    {
      title: 'SÍMBÍÀTÚÚ Dines',
      type: 'Dining',
      description:
        'A cute Nigerian family dining restaurant,natural  drinks, a Nigerian food and dessert corner for eat-in, takeaways and events. ',
      image: 'simbiatuu-ding.png',
    },
    {
      title: 'SÍMBÍÀTÚÚ Luxury Homes',
      type: 'E-Commerce',
      description:
        'Luxury Real Estate Business based in Lagos and England. Solely focused on the sales of houses and running an Airbnb.',
      image: 'coming-soon.png',
    },
    {
      title: 'SÍMBÍÀTÚÚ Cares Agency',
      type: 'Health',
      description:
        '5000%+ growth and 45% reduction in CAC in less than 1 month with Backblaze.',
      image: 'coming-soon.png',
    },
    {
      title: 'SÍMBÍÀTÚÚ Cloud',
      type: 'cloud computing',
      description:
        'An Online learning platform for individuals and companies seeking knowledge on how to become experts in cloud computing.',
      image: 'coming-soon.png',
    },
    {
      title: 'SÍMBÍÀTÚÚ Vends',
      type: 'Vending',
      description:
        'Vending Business in England, UK',
      image: 'coming-soon.png',
    },
    {
      title: 'SÍMBÍÀTÚÚ Mental Health Foundation',
      type: 'Health',
      description:
        'Non-profit foundation focused on sensitizing women on emotional wellness and female empowerment schemes for struggling immigrant  mothers in Nigeria & United Kingdom',
      image: 'coming-soon.png',
    },
    {
      title: 'Mylifyhealth by SÍMBÍÀTÚÚ',
      type: 'Health',
      description:
        'Health/Nutritional/wellness retail shop for postpartum moms and women who want to lose weight naturally - The store is both online and physical',
      image: 'coming-soon.png',
    },
    {
      title: 'Hand CarWash by SÍMBÍÀTÚÚ',
      type: 'wash',
      description:
        'Hand Car wash business in North England, UK',
      image: 'coming-soon.png',
    },
  ];

  get filteredStudies() {
    if (this.selectedCategory === 'All') return this.caseStudies;
    return this.caseStudies.filter(
      (cs) => cs.type.toLowerCase() === this.selectedCategory.toLowerCase()
    );
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }
}
