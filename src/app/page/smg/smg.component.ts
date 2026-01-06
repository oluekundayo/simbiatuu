import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-smg',
  standalone: true,
  templateUrl: './smg.component.html',
  styleUrl: './smg.component.css',
  imports: [HeaderComponent, ReactiveFormsModule, FooterComponent],
})
export class SmgComponent implements AfterViewInit {
  /* ================= DATA ================= */


  isSubmitted = false;
  isSubmitting = false;
  fb = inject(FormBuilder)
  
  form = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    country: ['', Validators.required],
    employment: ['', Validators.required],
    goals: ['', Validators.required],
    date: ['', Validators.required],
    readiness: ['', Validators.required],
  });

  painPoints = [
    'Salary too small to achieve big dreams',
    'No time for family or personal goals',
    'Living paycheck to paycheck',
    'Fear of job loss or lack of security',
    'Exhausted mentally and emotionally',
    'Knowing there is more, but feeling stuck',
  ];

  solutionPoints = [
    'Proven growth system',
    'Personal development focus',
    'Global business partnership',
  ];

  benefits = [
    {
      icon: '↑',
      title: 'Build Independent Income',
      desc: 'Create a profitable business asset alongside your 9-5.',
    },
    {
      icon: '🛡',
      title: 'Financial Stability',
      desc: 'Replace dependency with control over your financial future.',
    },
    {
      icon: '⏱',
      title: 'Time Freedom',
      desc: 'Work towards a lifestyle where you control your schedule.',
    },
    {
      icon: '👥',
      title: 'Structured Mentorship',
      desc: 'Never walk alone. Get 1-on-1 guidance and community support.',
    },
  ];

  testimonials = [
    {
      name: 'Sarah A.',
      location: 'United Kingdom',
      text: 'Before joining SMG, I was working long hours with no clear path to financial freedom. The 1-on-1 mentorship helped me finally understand how to build something meaningful while keeping my full-time job.',
    },
    {
      name: 'Michael O.',
      location: 'South Africa',
      text: 'I have been in several business trainings before, but SMG was different. The guidance is personal, practical, and supportive. For the first time, I feel like I have clarity and structure.',
    },
    {
      name: 'Jennifer K.',
      location: 'Canada',
      text: 'SMG challenged me to think bigger. I used to doubt myself a lot, but the mentorship helped me rebuild confidence, discipline, and belief. The community is amazing.',
    },
  ];

  /* ================= VIEW REFERENCES ================= */

  @ViewChild('leftBlock') leftBlock!: ElementRef<HTMLElement>;
  @ViewChild('rightBlock') rightBlock!: ElementRef<HTMLElement>;
  @ViewChildren('benefitEl') benefitEls!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('testimonialEl')
  testimonialEls!: QueryList<ElementRef<HTMLElement>>;

  /* ================= STATE ================= */

  leftVisible = false;
  rightVisible = false;
  benefitsVisible = false;
  testimonialsVisible = false;

  /* ================= LIFECYCLE ================= */

  ngAfterViewInit(): void {
    this.observe(this.leftBlock, () => (this.leftVisible = true));
    this.observe(this.rightBlock, () => (this.rightVisible = true));

    if (this.benefitEls.first) {
      this.observe(this.benefitEls.first, () => {
        this.benefitsVisible = true;
      });
    }

    if (this.testimonialEls.first) {
      this.observe(this.testimonialEls.first, () => {
        this.testimonialsVisible = true;
      });
    }
  }

  /* ================= HELPERS ================= */

  private observe(
    elementRef: ElementRef<HTMLElement>,
    callback: () => void
  ): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(elementRef.nativeElement);
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  openIndex: number | null = null;

  faqs = [
    {
      q: 'How does the mentorship work?',
      a: 'The mentorship is delivered through private 1-on-1 coaching, weekly follow-ups, and structured guidance designed around your schedule. You receive personalized strategies, mindset development, and practical steps to build a business while maintaining your 9–5 job.',
    },
    {
      q: 'Do I need to leave my job to get started?',
      a: 'No, you do not need to leave your job. SMG is designed specifically for working professionals who want to build a second income stream without risking their current financial stability.',
    },
    {
      q: 'Is this a get-rich-quick system?',
      a: 'No. SMG is not a shortcut to instant wealth. It is a structured mentorship that helps you build a real business, backed by personal development, proven systems, and guidance.',
    },
    {
      q: 'Why 1-on-1 coaching instead of group coaching?',
      a: 'Because transformation is personal. Every individual has unique goals, challenges, and strengths. 1-on-1 coaching ensures that you receive private attention, tailored strategies, and a safe space to grow at your own pace.',
    },
    {
      q: 'Do I need prior business experience?',
      a: 'Not at all. Many members join with no business background. SMG provides the education, leadership development, mindset training, and step-by-step guidance needed to build from the ground up.',
    },
  ];

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }



  submit(): void {
    if (this.form.invalid) return;

    this.isSubmitting = true;

    // simulate API call
    setTimeout(() => {
      this.isSubmitting = false;
      this.isSubmitted = true;
      this.form.reset();
    }, 1500);
  }

  reset(): void {
    this.isSubmitted = false;
  }
}
