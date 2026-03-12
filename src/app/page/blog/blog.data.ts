export interface BlogAuthorProfile {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface BlogComment {
  name: string;
  role: string;
  avatar: string;
  publishedAt: string;
  message: string;
}

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogQuote {
  text: string;
  attribution: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  image: string;
  author: BlogAuthorProfile;
  introduction: string[];
  quote: BlogQuote;
  sections: BlogSection[];
  takeaways: string[];
  tags: string[];
  comments: BlogComment[];
}

export interface BlogCategorySummary {
  name: string;
  count: number;
}

const authors = {
  simbi: {
    name: 'Simbi Arowolo',
    role: 'Founder and Brand Director',
    bio: 'Simbi helps ambitious brands turn lived experience, strategy, and style into stories that move people to act.',
    avatar: 'simbi1.jpg',
  },
  maya: {
    name: 'Maya Okafor',
    role: 'Growth Marketing Lead',
    bio: 'Maya builds practical growth systems for lean teams that need clarity, cadence, and measurable momentum.',
    avatar: 'simbi2.jpg',
  },
  david: {
    name: 'David Cole',
    role: 'Community Partnerships Lead',
    bio: 'David works at the intersection of events, creators, and partnerships to help communities feel seen and involved.',
    avatar: 'olumide.jpg',
  },
  aisha: {
    name: 'Aisha Bello',
    role: 'Editorial and Content Strategist',
    bio: 'Aisha shapes editorial systems that keep brand voice consistent across campaigns, launches, and long-form content.',
    avatar: 'madam.jpg',
  },
} satisfies Record<string, BlogAuthorProfile>;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'founder-led-storytelling-that-actually-converts',
    title: 'Founder-led storytelling that actually converts',
    excerpt:
      'The strongest founder stories do not overshare. They frame a problem clearly, reveal the point of view behind the work, and move the reader toward one useful next step.',
    category: 'Brand Strategy',
    publishedAt: '12 Feb 2026',
    readTime: '6 min read',
    image: 'unsplash-2.jpg',
    author: authors.simbi,
    introduction: [
      'Founder-led content works when it sounds like a real person making a clear promise. The mistake most teams make is turning the founder into a mascot instead of a guide.',
      'The job of the story is not to mention every milestone. It is to connect the founder lived experience to the audience problem in a way that feels specific, credible, and useful.',
    ],
    quote: {
      text: 'The story that converts is usually the one that explains why you care before it explains what you sell.',
      attribution: 'Simbi Arowolo',
    },
    sections: [
      {
        heading: 'Start with the tension people already feel',
        paragraphs: [
          'Strong storytelling begins with the friction your audience already knows. If the first paragraph feels generic, the reader has no reason to trust the rest.',
          'Name the stuck point, show what it costs, and let the founder perspective explain why the team chose a different route.',
        ],
        bullets: [
          'Lead with the audience problem, not the company timeline.',
          'Use one point of view and one promise per piece.',
          'Let the founder voice sound human, not polished into nothing.',
        ],
      },
      {
        heading: 'Build proof into the narrative',
        paragraphs: [
          'Story alone is not enough. The narrative has to carry evidence: a result, a client shift, a lesson from the field, or a repeated pattern the founder keeps seeing.',
          'The best founder content moves between reflection and proof so the reader feels both emotional connection and practical confidence.',
        ],
      },
      {
        heading: 'End with a small next step',
        paragraphs: [
          'You do not need a hard sell at the end of every article. You need momentum. Invite the reader to reply, book, download, or continue to a related post.',
          'Conversion usually improves when the call to action matches the depth of the story. A thoughtful article deserves a thoughtful next step.',
        ],
      },
    ],
    takeaways: [
      'Make the audience problem more visible than the brand biography.',
      'Anchor personal stories in proof, not vague inspiration.',
      'Use a call to action that matches the trust level you just earned.',
    ],
    tags: ['storytelling', 'brand strategy', 'founder marketing', 'conversion'],
    comments: [
      {
        name: 'Tara Morgan',
        role: 'Startup founder',
        avatar: 'simbi3.jpg',
        publishedAt: '14 Feb 2026',
        message:
          'The point about using one promise per piece landed for me. We have been trying to say too much in every campaign and it keeps watering the offer down.',
      },
      {
        name: 'Kelvin Brown',
        role: 'Growth consultant',
        avatar: 'olumide.jpg',
        publishedAt: '15 Feb 2026',
        message:
          'I like the distinction between biography and proof. That is exactly where a lot of founder content starts to drift into self-focus.',
      },
    ],
  },
  {
    slug: 'planning-a-launch-campaign-with-a-lean-team',
    title: 'Planning a launch campaign with a lean team',
    excerpt:
      'A small team does not need more channels. It needs one campaign rhythm, a tighter brief, and a launch window that can actually be sustained.',
    category: 'Campaign Planning',
    publishedAt: '04 Feb 2026',
    readTime: '5 min read',
    image: 'market-01.jpg',
    author: authors.maya,
    introduction: [
      'Lean teams lose time when they mistake activity for coordination. A launch starts to feel heavy because the team is building the plane, the runway, and the boarding gate at the same time.',
      'A better campaign plan reduces decisions early. It defines the audience, one primary message, the conversion path, and the few assets that unlock the rest.',
    ],
    quote: {
      text: 'Most launch stress is not caused by pace. It is caused by unresolved decisions.',
      attribution: 'Maya Okafor',
    },
    sections: [
      {
        heading: 'Choose one campaign spine',
        paragraphs: [
          'Every launch needs a spine: one core message and one content angle that can be adapted across touchpoints.',
          'When the team knows the spine, copy gets faster, design feedback gets sharper, and approval cycles shrink.',
        ],
      },
      {
        heading: 'Map assets by purpose',
        paragraphs: [
          'Not every asset has equal value. Start with the landing page, hero message, launch email, founder note, and a short stack of social cutdowns.',
          'Everything else should support these pieces rather than compete with them for energy.',
        ],
        bullets: [
          'Clarify what drives awareness, trust, and conversion.',
          'Assign one clear owner to every core asset.',
          'Reuse the same message architecture across formats.',
        ],
      },
      {
        heading: 'Protect the post-launch week',
        paragraphs: [
          'The week after launch is where most campaigns underperform because the team is already onto something else.',
          'Reserve time for follow-up content, community replies, and light optimization. That is where a good launch becomes a better one.',
        ],
      },
    ],
    takeaways: [
      'Reduce decisions before production starts.',
      'Prioritize the assets that carry the campaign.',
      'Treat the first week after launch as part of the campaign, not an afterthought.',
    ],
    tags: ['launch planning', 'content ops', 'campaign strategy'],
    comments: [
      {
        name: 'Rina Patel',
        role: 'Marketing manager',
        avatar: 'madam.jpg',
        publishedAt: '06 Feb 2026',
        message:
          'This mirrors what went wrong in our last rollout. We had plenty of assets but no single spine tying them together.',
      },
      {
        name: 'Marcus Lee',
        role: 'Product marketer',
        avatar: 'simbi2.jpg',
        publishedAt: '07 Feb 2026',
        message:
          'Protecting post-launch time is the underrated part. That is usually when we stop paying attention.',
      },
    ],
  },
  {
    slug: 'affiliate-partnerships-without-the-guesswork',
    title: 'Affiliate partnerships without the guesswork',
    excerpt:
      'Affiliate partnerships work best when the offer is simple, the incentive is fair, and partners receive enough context to sell with confidence.',
    category: 'Partnerships',
    publishedAt: '30 Jan 2026',
    readTime: '4 min read',
    image: 'market-02.jpg',
    author: authors.david,
    introduction: [
      'Affiliate programs fail quietly when brands treat partners like a distribution shortcut. People still need context, positioning, and assets that make the recommendation easy to trust.',
      'The strongest programs are not the loudest. They are the easiest to understand and the easiest to repeat.',
    ],
    quote: {
      text: 'If a partner cannot explain the offer in one breath, the program is not ready.',
      attribution: 'David Cole',
    },
    sections: [
      {
        heading: 'Make the offer partner-friendly',
        paragraphs: [
          'Partners need a clean value proposition, a visible outcome, and a fair reward model. Confusing commission structures usually reduce participation instead of improving quality.',
          'Clarity attracts the right partners because they can see where they fit before they ever ask a question.',
        ],
      },
      {
        heading: 'Give partners usable tools',
        paragraphs: [
          'A simple partner pack goes a long way. Include product positioning, audience notes, approved talking points, examples, and basic performance guidance.',
          'The goal is not to script every word. It is to remove unnecessary friction.',
        ],
      },
      {
        heading: 'Measure trust, not just clicks',
        paragraphs: [
          'Short-term clicks matter, but partner quality is easier to spot through lead quality, retention, and the language customers use when they arrive.',
          'The partners who convert well usually understand the audience deeply enough to frame the offer well.',
        ],
      },
    ],
    takeaways: [
      'Simplify the offer before you recruit more partners.',
      'Give partners context, not just links.',
      'Look at customer quality alongside campaign traffic.',
    ],
    tags: ['affiliate marketing', 'partnerships', 'growth'],
    comments: [
      {
        name: 'Lydia Thomas',
        role: 'Ecommerce operator',
        avatar: 'simbi1.jpg',
        publishedAt: '31 Jan 2026',
        message:
          'The note about partner packs is useful. We launched ours with almost no enablement and spent weeks answering the same questions.',
      },
      {
        name: 'James Arthur',
        role: 'Brand partnerships manager',
        avatar: 'olumide.jpg',
        publishedAt: '01 Feb 2026',
        message:
          'Agree on measuring trust. We had a smaller creator set outperform the bigger one because the framing was stronger.',
      },
    ],
  },
  {
    slug: 'what-makes-an-event-feel-premium',
    title: 'What makes an event feel premium',
    excerpt:
      'Premium experiences are built through pacing, hospitality, and coherence. The details matter because they reduce uncertainty for the guest from arrival to goodbye.',
    category: 'Events',
    publishedAt: '22 Jan 2026',
    readTime: '5 min read',
    image: 'market-03.jpg',
    author: authors.david,
    introduction: [
      'An event does not feel premium because it is expensive. It feels premium when the guest experience is thoughtfully edited from the first invitation to the final follow-up.',
      'People remember how easy it was to arrive, how clearly the event moved, and whether the atmosphere reflected the promise they were sold.',
    ],
    quote: {
      text: 'Luxury is often the absence of confusion.',
      attribution: 'David Cole',
    },
    sections: [
      {
        heading: 'Arrival sets the emotional tone',
        paragraphs: [
          'The guest experience begins before the event starts. Directional messaging, check-in, transport notes, dress cues, and welcome energy all shape the first impression.',
          'When the arrival is calm and confident, the rest of the event has room to breathe.',
        ],
      },
      {
        heading: 'Design the pace, not just the decor',
        paragraphs: [
          'A premium event moves with intention. Guests should know where attention belongs without feeling managed every second.',
          'Transitions, sound, hosting, and service rhythm matter as much as the room styling.',
        ],
        bullets: [
          'Reduce dead space between key moments.',
          'Use hosts and signage to guide gently.',
          'Match the sensory tone to the audience and the brand.',
        ],
      },
      {
        heading: 'Follow-up completes the experience',
        paragraphs: [
          'The post-event message often decides whether the event becomes a memory or a relationship. Share recap moments, useful next steps, and a reason to stay connected.',
          'A premium finish feels considered instead of transactional.',
        ],
      },
    ],
    takeaways: [
      'Treat logistics as part of the brand experience.',
      'Curate the emotional pace of the room.',
      'Use follow-up to deepen the relationship after the event ends.',
    ],
    tags: ['events', 'experience design', 'brand hospitality'],
    comments: [
      {
        name: 'Nicole Grant',
        role: 'Event producer',
        avatar: 'simbi2.jpg',
        publishedAt: '24 Jan 2026',
        message:
          'The phrase luxury is the absence of confusion is exactly right. The best guest feedback we get is usually about how smooth everything felt.',
      },
      {
        name: 'Ade Martins',
        role: 'Brand manager',
        avatar: 'simbi3.jpg',
        publishedAt: '25 Jan 2026',
        message:
          'We focus too much on decor and not enough on pacing. This was a helpful reframing.',
      },
    ],
  },
  {
    slug: 'community-content-systems-for-busy-brands',
    title: 'Community content systems for busy brands',
    excerpt:
      'A sustainable content system captures what the community is already asking, turns it into repeatable formats, and gives the team a realistic publishing rhythm.',
    category: 'Content Systems',
    publishedAt: '16 Jan 2026',
    readTime: '4 min read',
    image: 'market-04.avif',
    author: authors.aisha,
    introduction: [
      'Busy brands do not need more random content ideas. They need a system that pulls from real conversations and turns them into useful formats over time.',
      'That system gets easier when the team stops asking what to post and starts asking what people keep needing help with.',
    ],
    quote: {
      text: 'Consistency gets cheaper when the system starts with real questions.',
      attribution: 'Aisha Bello',
    },
    sections: [
      {
        heading: 'Mine your existing conversations',
        paragraphs: [
          'Support emails, sales calls, comment threads, and event questions are a content goldmine. They reveal the language the audience uses when they are close to a decision.',
          'Build your content pillars from those recurring questions instead of from abstract brand values.',
        ],
      },
      {
        heading: 'Create repeatable content lanes',
        paragraphs: [
          'Once the pillars are clear, assign a format to each. One pillar may suit founder notes, another quick tips, another short case studies.',
          'The point is to create a pattern the team can maintain without reinventing every week.',
        ],
      },
      {
        heading: 'Measure resonance before reach',
        paragraphs: [
          'Reach matters, but it is easy to chase the wrong signal. Save the posts that drive replies, bookings, shares, or quality conversation and learn from them.',
          'A smaller but sharper community response is often the better growth signal.',
        ],
      },
    ],
    takeaways: [
      'Let repeated audience questions shape the content calendar.',
      'Pair each content pillar with a repeatable format.',
      'Watch for resonance signals, not vanity metrics alone.',
    ],
    tags: ['community', 'content operations', 'editorial planning'],
    comments: [
      {
        name: 'Susan Reid',
        role: 'Community lead',
        avatar: 'madam.jpg',
        publishedAt: '18 Jan 2026',
        message:
          'This is practical. We have plenty of source material but we are not turning it into a usable system yet.',
      },
      {
        name: 'Victor Hammond',
        role: 'Agency owner',
        avatar: 'olumide.jpg',
        publishedAt: '19 Jan 2026',
        message:
          'Measuring resonance before reach is the reminder we needed. The loudest posts are not always the most valuable ones.',
      },
    ],
  },
  {
    slug: 'how-to-brief-creators-for-better-campaign-output',
    title: 'How to brief creators for better campaign output',
    excerpt:
      'A strong creator brief protects the idea without flattening the creator voice. The best briefs clarify what must stay true and what can stay flexible.',
    category: 'Creator Marketing',
    publishedAt: '10 Jan 2026',
    readTime: '5 min read',
    image: 'market-05.avif',
    author: authors.maya,
    introduction: [
      'Bad creator briefs are usually either too vague or too controlling. Both produce average work because neither gives the creator a useful frame.',
      'A good brief defines the audience, the message, the non-negotiables, and the emotional tone. After that, the creator should still sound like themselves.',
    ],
    quote: {
      text: 'The brief should sharpen the creator voice, not replace it.',
      attribution: 'Maya Okafor',
    },
    sections: [
      {
        heading: 'Clarify the audience and the job',
        paragraphs: [
          'Before you mention shots or captions, explain who the piece is for and what shift you want in the viewer after they see it.',
          'When creators understand the job of the content, execution choices improve fast.',
        ],
      },
      {
        heading: 'Separate must-haves from inspiration',
        paragraphs: [
          'List the things that cannot change: legal lines, product claims, timeline, and offer details. Then keep examples and mood direction in a separate zone.',
          'That distinction keeps the creator from confusing references with rules.',
        ],
        bullets: [
          'State the message hierarchy in order.',
          'Give one audience insight the creator can build around.',
          'Avoid stacking too many content goals into one asset.',
        ],
      },
      {
        heading: 'Review against the strategy, not your taste',
        paragraphs: [
          'Feedback should measure the work against the brief. Personal preferences tend to pull the work away from the audience and toward internal opinion.',
          'A strategy-led review cycle protects both performance and partnership trust.',
        ],
      },
    ],
    takeaways: [
      'Explain the job of the content before the execution details.',
      'Keep non-negotiables separate from inspiration.',
      'Use the brief as the reference point during feedback.',
    ],
    tags: ['creator briefs', 'campaigns', 'social content'],
    comments: [
      {
        name: 'Helen Price',
        role: 'Influencer manager',
        avatar: 'simbi1.jpg',
        publishedAt: '11 Jan 2026',
        message:
          'The idea of reviewing against the strategy, not taste, is going into our next internal workflow doc.',
      },
      {
        name: 'Naomi Scott',
        role: 'UGC creator',
        avatar: 'simbi3.jpg',
        publishedAt: '12 Jan 2026',
        message:
          'This is the kind of brief that helps creators do better work instead of guess what the brand wants.',
      },
    ],
  },
  {
    slug: 'packaging-digital-offers-for-higher-conversion',
    title: 'Packaging digital offers for higher conversion',
    excerpt:
      'People buy clarity before they buy complexity. A digital offer converts better when the outcome, container, and timeline are easy to understand at a glance.',
    category: 'Offers',
    publishedAt: '05 Jan 2026',
    readTime: '5 min read',
    image: 'market-06.webp',
    author: authors.aisha,
    introduction: [
      'Many digital offers underperform because the audience cannot quickly tell what they are getting, who it is for, or what happens next.',
      'Packaging is not decoration. It is the structure that helps the buyer understand the promise fast enough to keep reading.',
    ],
    quote: {
      text: 'A clear offer does more selling than a clever headline ever will.',
      attribution: 'Aisha Bello',
    },
    sections: [
      {
        heading: 'Lead with the outcome',
        paragraphs: [
          'The first question a buyer asks is simple: what changes for me if I say yes? Put that answer high and keep it concrete.',
          'Specific outcomes reduce the need for persuasive filler lower on the page.',
        ],
      },
      {
        heading: 'Name the container and cadence',
        paragraphs: [
          'Tell people exactly what they are buying: a toolkit, workshop series, advisory sprint, membership, or done-for-you package.',
          'Then explain how it runs. Duration, delivery method, and access rules all shape conversion confidence.',
        ],
      },
      {
        heading: 'Reduce buyer uncertainty',
        paragraphs: [
          'Examples, timelines, frequently asked questions, and social proof all help the buyer picture themselves inside the offer.',
          'The offer page works best when it answers obvious concerns before the reader has to ask.',
        ],
      },
    ],
    takeaways: [
      'Put the buyer outcome at the top of the page.',
      'Explain what the offer is and how it runs.',
      'Use structure to reduce uncertainty before pushing urgency.',
    ],
    tags: ['offers', 'conversion', 'digital products'],
    comments: [
      {
        name: 'Lola Davis',
        role: 'Course creator',
        avatar: 'madam.jpg',
        publishedAt: '06 Jan 2026',
        message:
          'We changed our sales page structure after reading this and the offer already feels more understandable.',
      },
      {
        name: 'Peter Kane',
        role: 'Sales strategist',
        avatar: 'olumide.jpg',
        publishedAt: '08 Jan 2026',
        message:
          'Exactly right on naming the container. Buyers often need that before they can judge the value.',
      },
    ],
  },
  {
    slug: 'from-one-off-clients-to-long-term-retainers',
    title: 'From one-off clients to long-term retainers',
    excerpt:
      'Retainers are easier to win when the work is positioned around continuity, not just output. Clients stay when they understand the strategic thread across months.',
    category: 'Client Growth',
    publishedAt: '28 Dec 2025',
    readTime: '6 min read',
    image: 'market-07.webp',
    author: authors.simbi,
    introduction: [
      'One-off projects can be useful entry points, but they rarely build stable growth on their own. Retainers emerge when clients can clearly see the value of continuity.',
      'That means your offer needs to describe the rhythm of the relationship, not only the list of deliverables.',
    ],
    quote: {
      text: 'Clients keep what they can see evolving over time.',
      attribution: 'Simbi Arowolo',
    },
    sections: [
      {
        heading: 'Sell the operating model',
        paragraphs: [
          'A retainer is not just more tasks each month. It is an operating model: review, plan, execute, and refine.',
          'Clients buy retainers more confidently when they understand the cadence and the decisions your team will help them make.',
        ],
      },
      {
        heading: 'Anchor the work to business moments',
        paragraphs: [
          'The best retainers map to launches, seasonal pushes, campaigns, or community rhythms the client already cares about.',
          'That connection makes the monthly work feel strategic instead of ongoing by habit.',
        ],
      },
      {
        heading: 'Report in a way that supports trust',
        paragraphs: [
          'Reporting should show movement, not just activity. Summarize what changed, what was learned, and what is next.',
          'Retention grows when the client sees the relationship improving the quality of decisions month after month.',
        ],
      },
    ],
    takeaways: [
      'Position retainers as a decision-making rhythm, not a task bundle.',
      'Tie the work to real business moments the client recognizes.',
      'Use reporting to show progression and next moves clearly.',
    ],
    tags: ['retainers', 'client relationships', 'agency growth'],
    comments: [
      {
        name: 'Ben Foster',
        role: 'Studio founder',
        avatar: 'simbi2.jpg',
        publishedAt: '29 Dec 2025',
        message:
          'Selling the operating model is the framing I was missing. We have been pitching retainers as bigger project scopes.',
      },
      {
        name: 'Ella Moore',
        role: 'Brand consultant',
        avatar: 'simbi3.jpg',
        publishedAt: '30 Dec 2025',
        message:
          'The reporting section is strong. Clients stay longer when they can actually see the logic behind the work.',
      },
    ],
  },
  {
    slug: 'why-consistent-brand-voice-beats-more-content',
    title: 'Why consistent brand voice beats more content',
    excerpt:
      'Publishing more does not automatically build trust. A consistent voice lowers the effort required for the audience to recognize you, understand you, and remember you.',
    category: 'Brand Voice',
    publishedAt: '18 Dec 2025',
    readTime: '4 min read',
    image: 'simbi.jpg',
    author: authors.aisha,
    introduction: [
      'When brands feel inconsistent, the audience has to relearn them every time. That increases friction even when the content frequency looks healthy on paper.',
      'Voice is not a cosmetic layer. It is the operating tone that makes the brand recognizable across formats, teams, and campaigns.',
    ],
    quote: {
      text: 'Recognition compounds when the voice stays steady.',
      attribution: 'Aisha Bello',
    },
    sections: [
      {
        heading: 'Voice creates memory',
        paragraphs: [
          'The audience rarely remembers every detail. They remember how the brand sounds, what it emphasizes, and whether the tone feels coherent from one touchpoint to the next.',
          'Consistency turns scattered content into a connected body of work.',
        ],
      },
      {
        heading: 'Create simple voice rules',
        paragraphs: [
          'Voice guidelines do not need to be long. They should explain the tone, sentence style, key words, and what to avoid.',
          'Short, usable rules are more likely to survive real workflows than long brand documents nobody opens.',
        ],
        bullets: [
          'Define three to five voice traits.',
          'Show examples of the voice in action.',
          'Include examples of what the brand should not sound like.',
        ],
      },
      {
        heading: 'Audit before you publish more',
        paragraphs: [
          'If the voice is still unstable, adding volume usually creates more inconsistency. Run a quick audit, tighten the language system, and then scale.',
          'The fastest route to stronger content is often less production and better alignment.',
        ],
      },
    ],
    takeaways: [
      'Recognition improves when the brand sounds familiar every time.',
      'Simple voice rules are more useful than bloated guidelines.',
      'Fix tone inconsistency before pushing volume.',
    ],
    tags: ['brand voice', 'editorial', 'content strategy'],
    comments: [
      {
        name: 'Grace Lane',
        role: 'Copywriter',
        avatar: 'madam.jpg',
        publishedAt: '19 Dec 2025',
        message:
          'The point about relearning the brand every time is sharp. That is exactly what inconsistent channels feel like to a reader.',
      },
      {
        name: 'Nathan Brooks',
        role: 'Head of content',
        avatar: 'olumide.jpg',
        publishedAt: '20 Dec 2025',
        message:
          'We cut our guidelines down to one page this quarter and adoption improved immediately. This lines up with that experience.',
      },
    ],
  },
];

export const FEATURED_POST = BLOG_POSTS[0];

export const BLOG_CATEGORIES: BlogCategorySummary[] = Array.from(
  BLOG_POSTS.reduce((categoryMap, post) => {
    categoryMap.set(post.category, (categoryMap.get(post.category) ?? 0) + 1);
    return categoryMap;
  }, new Map<string, number>()).entries()
)
  .map(([name, count]) => ({ name, count }))
  .sort((left, right) => right.count - left.count || left.name.localeCompare(right.name));

export function findBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const currentPost = findBlogPostBySlug(slug);

  if (!currentPost) {
    return BLOG_POSTS.slice(1, limit + 1);
  }

  const sameCategory = BLOG_POSTS.filter(
    (post) => post.slug !== slug && post.category === currentPost.category
  );
  const remainingPosts = BLOG_POSTS.filter(
    (post) => post.slug !== slug && post.category !== currentPost.category
  );

  return [...sameCategory, ...remainingPosts].slice(0, limit);
}
