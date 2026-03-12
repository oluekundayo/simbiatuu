import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { LucideAngularModule, ArrowDown } from 'lucide-angular';

@Component({
  selector: 'app-smg',
  standalone: true,
  templateUrl: './smg.component.html',
  styleUrl: './smg.component.css',
  imports: [HeaderComponent, ReactiveFormsModule, LucideAngularModule],
})
export class SmgComponent {
  readonly brandName = 'S\u00cdMB\u00cd\u00c0T\u00da\u00da';
  readonly programName = `${this.brandName} Mentorship Pathway`;
  readonly founderName = 'Simbiat Atinuke Awe';
  readonly currentYear = new Date().getFullYear();

  readonly heroStats = [
    {
      value: '9-5 Friendly',
      label: 'Build with structure while keeping your career intact.',
    },
    {
      value: '1-on-1 Guidance',
      label: 'Private mentorship with accountability and support.',
    },
    {
      value: 'Long-Term Focus',
      label: 'A pathway built for sustainable growth, not quick fixes.',
    },
    {
      value: 'Global Network',
      label: 'Connected to a wider mentorship and business education system.',
    },
  ];

  readonly pathwayHighlights = [
    {
      title: 'Structured Wealth Building',
      description:
        'Explore financial independence beyond salary dependency through a guided and ethical process.',
    },
    {
      title: 'Business Education',
      description:
        'Learn how income, systems, mindset, and leadership work together over the long term.',
    },
    {
      title: 'Informed Decisions',
      description:
        'Move with clarity, transparency, and support instead of hype or pressure.',
    },
  ];

  readonly servePoints = [
    'Are employed full-time and value stability',
    'Feel limited by a fixed income structure',
    'Want long-term financial independence, not quick fixes',
    'Value education, mentorship, and personal growth',
    'Are willing to be guided, coached, and accountable',
    'Want to build something meaningful alongside their career',
  ];

  readonly challengePoints = [
    'Income ceilings despite years of experience',
    'Rising living costs with limited income flexibility',
    'Little time to explore alternative income paths',
    'Fear of job insecurity or future uncertainty',
    'Lack of financial education beyond earning a salary',
    'Knowing there is more, but not knowing the right path',
  ];

  readonly approachPoints = [
    'Building independent income streams',
    'Developing financial intelligence',
    'Strengthening mindset and leadership capacity',
    'Creating options beyond employment dependency',
    'Designing a long-term transition toward financial independence',
  ];

  readonly differentiators = [
    {
      title: 'Professional and Transparent Guidance',
      description:
        'SMP is not hype-driven. We focus on clarity, honesty, and informed decision-making.',
    },
    {
      title: 'Structured Mentorship System',
      description:
        'Members are introduced to an established global mentorship and business education framework with proven longevity.',
    },
    {
      title: 'Selective Process',
      description:
        'We work with individuals who are coachable, disciplined, and serious about long-term growth.',
    },
    {
      title: 'Supportive Community',
      description:
        'Participants gain access to like-minded professionals committed to personal and financial development.',
    },
    {
      title: 'Leadership Development',
      description:
        'Because sustainable wealth begins with mindset, character, discipline, and consistent action.',
    },
    {
      title: 'Values-Aligned Growth',
      description:
        'The pathway is designed to support progress without compromising integrity, family, faith, or values.',
    },
  ];

  readonly selectionTraits = [
    'Serious about change',
    'Willing to learn and be coached',
    'Committed to consistency',
    'Emotionally mature and growth-oriented',
  ];

  readonly selectionSteps = [
    {
      step: '01',
      title: 'Discovery Session',
      description:
        'We begin with a private conversation to understand your goals, current direction, and questions.',
    },
    {
      step: '02',
      title: 'Fit Assessment',
      description:
        'We determine whether the pathway is a suitable match for your mindset, schedule, and level of commitment.',
    },
    {
      step: '03',
      title: 'Guided Onboarding',
      description:
        'If selected, you are guided step-by-step through the process with clarity, structure, and support.',
    },
  ];

  readonly gains = [
    'Business and financial education',
    'Personal development and mindset training',
    'Time management and productivity skills',
    'Leadership growth opportunities',
    'A clear pathway to build alongside a 9-5',
    'Support from mentors and a global community',
  ];

  readonly consultationIncludes = [
    'Assessment of your current financial situation',
    'Clarity on your long-term goals',
    'Personalized insight into the mentorship pathway',
    'Answers to your questions in a no-pressure conversation',
  ];

  readonly testimonials = [
    {
      name: 'Sarah A.',
      location: 'United Kingdom',
      text: 'Before joining SMP, I was working long hours with no clear path to financial freedom. The 1-on-1 mentorship helped me finally understand how to build something meaningful while keeping my full-time job. The growth in my mindset alone has been life-changing.',
    },
    {
      name: 'Michael O.',
      location: 'America',
      text: 'I have been in several business trainings before, but SMP was different. The guidance is personal, practical, and supportive. For the first time, I feel like I have clarity, structure, and someone genuinely invested in my success.',
    },
    {
      name: 'Jennifer K.',
      location: 'Canada',
      text: 'SMP challenged me to think bigger. I used to doubt myself a lot, but the mentorship helped me rebuild confidence, discipline, and belief. The community is amazing, uplifting, and filled with people who want to grow.',
    },
    {
      name: 'Adebola T.',
      location: 'United Kingdom',
      text: 'I joined while working full time and raising a family. I thought I had no time, but SMP helped me create a routine that works. I am now more focused, financially aware, and actively building something for my future.',
    },
  ];

  readonly faqs = [
    {
      q: 'How does the mentorship work?',
      a: 'The mentorship is delivered through private 1-on-1 coaching, weekly follow-ups, and structured guidance designed around your schedule. You receive personalized strategies, mindset development, and practical steps to build a business while maintaining your 9-5 job. You are never alone in the process because you grow with support, accountability, and direction.',
    },
    {
      q: 'Do I need to leave my job to get started?',
      a: 'No. SMP is designed specifically for working professionals who want to build a second income stream without risking their current financial stability. You grow gradually until you reach a point where you can choose to transition if you wish.',
    },
    {
      q: 'How long will it take before I start seeing results?',
      a: 'The timeline varies depending on commitment, consistency, and willingness to learn. The focus is on building a sustainable long-term business, not a quick-money scheme. Many participants begin noticing mindset shifts, stronger clarity, and practical business progress within their first few months.',
    },
    {
      q: 'Is this a get-rich-quick system?',
      a: 'No. SMP is not a shortcut to instant wealth. It is a structured mentorship pathway that helps you build a real business through personal development, proven systems, and consistent effort.',
    },
    {
      q: 'Why 1-on-1 coaching instead of group coaching?',
      a: 'Because transformation is personal. Every individual has unique goals, challenges, and strengths. Private coaching creates space for tailored strategies, direct feedback, and growth at your own pace.',
    },
    {
      q: 'Will I get support if I feel stuck or overwhelmed?',
      a: 'Yes. Constant support is a major part of the pathway. Whether the challenge is mindset, time management, business direction, or confidence, guidance is available along with a community that encourages you at every stage.',
    },
    {
      q: 'Is there a financial cost to joining?',
      a: 'Yes. There are standard operating expenses related to building and maintaining your business and staying actively engaged in the educational system. These are reviewed during the consultation so you understand them clearly before making a decision.',
    },
    {
      q: 'Will I have access to a community of like-minded people?',
      a: 'Yes. You become part of an inspiring and encouraging community of driven individuals working toward financial freedom, personal growth, and becoming the best version of themselves.',
    },
    {
      q: 'What if I decide later that it is not for me?',
      a: 'Participation in SMP is voluntary and you can step out at any time. We exist to support motivated individuals, but the decision remains yours throughout the journey.',
    },
    {
      q: 'Do I need prior business experience?',
      a: 'Not at all. Many members join with no business background. SMP provides the education, leadership development, mindset training, and step-by-step guidance needed to build from the ground up.',
    },
  ];

  readonly employmentOptions = [
    'Employed Full-time',
    'Employed Part-time',
    'Self-employed',
    'Between roles',
    'Student',
  ];

  readonly readinessOptions = [
    '10 - Ready now',
    '9',
    '8',
    '7',
    '6',
    '5 - Exploring seriously',
    '4',
    '3',
    '2',
    '1 - Just starting to consider it',
  ];

  isSubmitted = false;
  isSubmitting = false;
  openIndex = 0;

  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    country: ['', Validators.required],
    employment: ['', Validators.required],
    story: ['', Validators.required],
    goals: ['', Validators.required],
    consultationDateTime: ['', Validators.required],
    readiness: ['', Validators.required],
  });

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? -1 : index;
  }

  fieldInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!control && control.invalid && (control.touched || control.dirty);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    setTimeout(() => {
      this.isSubmitting = false;
      this.isSubmitted = true;
      this.form.reset();
    }, 1500);
  }

  reset(): void {
    this.isSubmitted = false;
    this.form.reset();
  }
}
