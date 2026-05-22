export const brand = {
  name: 'Appdoers',
  tagline: 'Custom Web Solutions & AI Integration',
  location: 'New Zealand / Remote',
  email: 'contact@appdoers.co.nz',
  phone: '+64 22 5060 870',
  address: '89a Creek Road, Allenton-Ashburton, 7700 NZ',
  year: 2026,
};

export const hero = {
  headline: 'Web Development at the Speed of Ambition.',
  subheadline:
    'We transition New Zealand businesses into the future. High-velocity websites, seamless digital ecosystems, and engineering-grade reliability built to dominate local markets.',
  primaryCta: 'Start Your Project',
  secondaryCta: 'View Our Work',
  demoUrl: 'https://jornadadeinsights.com',
};

export const techStack = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'GSAP',
  'Node.js',
  'Python',
  'OpenAI API',
  'Vercel',
  'AWS',
  'Supabase',
];

/** Core service offerings */
export const products = [
  {
    slug: 'websites',
    href: '/websites',
    title: 'High-Performance Web',
    badge: '<1s Load Speed',
    summary:
      'Speed is the new currency. Mobile-first websites that load in under one second.',
    description:
      'We build mobile-first, edge-optimized websites for New Zealand businesses that need to rank locally, convert visitors, and stay fast on every device.',
    idealFor: 'Trades, cafés, local services, and brands starting on the Launch tier.',
    recommendedTier: 'launch',
    tierLabel: 'Launch · Growth · Scale',
    icon: 'web' as const,
    highlights: [
      'Sub-second load targets on mobile',
      'Static architecture with managed hosting',
      'Essential SEO & Google Business setup',
      '100% passive tech—we manage the code',
      'Conversion-focused layouts',
    ],
    deliverables: [
      'Discovery & sitemap',
      'Mobile-first UI design',
      'Next.js / static build',
      'Launch, SSL, and monitoring',
      'Google Business integration',
    ],
  },
  {
    slug: 'digital-systems',
    href: '/digital-systems',
    title: 'Digital Systems & E-Commerce',
    badge: '99.9% Uptime',
    summary:
      'Built for growth. Robust booking systems, online stores, and customer dashboards that work while you sleep.',
    description:
      'When a brochure site is not enough, we engineer booking flows, online stores, member areas, and integrations that keep running with 99.9% uptime.',
    idealFor: 'Growing brands, retailers, and operators ready for Scale-tier systems.',
    recommendedTier: 'scale',
    tierLabel: 'Scale tier (includes Growth + Launch)',
    icon: 'systems' as const,
    highlights: [
      'Stripe & Shopify store integration',
      'Booking & scheduling systems',
      'Customer dashboards & login',
      'Interactive 3D elements',
      'VIP 24-hour support SLA',
    ],
    deliverables: [
      'Systems architecture map',
      'Store or booking implementation',
      'User auth & role dashboards',
      'Payment & fulfillment flows',
      'Ongoing performance monitoring',
    ],
  },
  {
    slug: 'ministry',
    href: '/ministry',
    title: 'Ministry & Community',
    badge: 'Zero Maintenance',
    summary:
      'Digital connection. Zero-maintenance platforms specifically designed for Churches and Non-Profits.',
    description:
      'Empowering New Zealand missions with zero-maintenance platforms—admin tools for leaders and member dashboards for events, prayer requests, newsletters, and more.',
    idealFor: 'Churches and non-profits on the Community tier (12-month contract).',
    recommendedTier: 'community',
    tierLabel: 'Community tier — Ministry Protocol',
    icon: 'ministry' as const,
    highlights: [
      'Sermons synced with your YouTube',
      'Secure giving via Stripe',
      'Events & prayer request portals',
      'Newsletter & member dashboards',
      'Zero maintenance for your team',
    ],
    deliverables: [
      'Leader admin dashboard',
      'Member-facing portal',
      'Giving & sermon integrations',
      'Event & prayer workflows',
      'Training & handover for volunteers',
    ],
  },
];

export const services = products.map((p) => ({
  title: p.title,
  description: p.summary,
  badge: p.badge,
  link: p.href,
}));

export type PortfolioProject = {
  category: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  link: string;
  slug: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  stack: string[];
  externalUrl: string;
  /** Shopify and some hosts block iframes — use false and show open-site panel */
  embeddable?: boolean;
};

export const portfolio: PortfolioProject[] = [
  {
    category: 'Content & Ministry Platform',
    title: 'Journey of Insights',
    description:
      'A bilingual digital home for Patricia da Silva—podcast, e-book shop, donations, and community—unifying years of Bible teaching into one fast, managed platform.',
    metric: '50+',
    metricLabel: 'Podcast Episodes',
    link: '/work#jornada-de-insights',
    slug: 'jornada-de-insights',
    client: 'Patricia da Silva · jornadadeinsights.com',
    challenge:
      'Patricia’s ministry had grown across YouTube, Spotify, Instagram, and printed study materials—but audiences had no single place to listen, buy e-books, subscribe, or support the work. She needed English and Portuguese (Brazil) without juggling separate tools or slow, fragile DIY sites.',
    solution:
      'We designed and built a custom React platform on Vercel: homepage with featured episodes and e-books, full podcast catalog, shop with cart and sign-in, donation flow, about timeline, and language switching. Content stays editable while layouts remain code-locked for brand consistency and performance.',
    results: [
      'Unified podcast, shop, and giving on one domain',
      'Bilingual EN / PT-BR experience for global listeners',
      '50+ episodes and 10+ e-books surfaced with clear CTAs',
      'Edge-hosted delivery with managed updates for zero maintenance',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vercel'],
    externalUrl: 'https://jornadadeinsights.com',
    embeddable: true,
  },
  {
    category: 'Education & E-Commerce',
    title: 'NZ Modern School of Music',
    description:
      'Everybody Playing — the online face of a nationwide music school (est. 1952), connecting students and tutors across Aotearoa with lessons, products, and regional enquiry flows.',
    metric: '54+',
    metricLabel: 'Years Teaching',
    link: '/work#everybody-playing',
    slug: 'everybody-playing',
    client: 'Gail Boswell · everybodyplaying.com',
    challenge:
      'The New Zealand Modern School of Music needed a modern storefront and lead engine: showcase decades of trust, list instruments and regions for one-to-one tuition, sell resources, and capture serious enquiries from parents and aspiring teachers—without losing the warmth of a community-led school.',
    solution:
      'We delivered a custom Shopify experience with hero storytelling, curriculum and teacher sections, student testimonials by region, product catalog, cart, and a structured enquiry form (instrument + location). The site positions Gail’s national network while making it easy to register for lessons or teacher opportunities.',
    results: [
      'Nationwide lesson enquiries by instrument and region',
      'Shopify cart and catalog for school products',
      'Social proof from students across Taranaki to Gisborne',
      'Clear paths for students and prospective music tutors',
    ],
    stack: ['Shopify', 'Liquid', 'Custom Theme', 'NZ Localization'],
    externalUrl: 'https://everybodyplaying.com',
    embeddable: false,
  },
];

export const stats = [
  { value: 2, suffix: 'M+', prefix: '$', label: 'Revenue Generated' },
  { value: 50, suffix: 'K+', prefix: '', label: 'Active Users' },
  { value: 99.9, suffix: '%', prefix: '', label: 'Uptime Guaranteed', decimals: 1 },
  { value: 25, suffix: '+', prefix: '', label: 'Products Launched' },
];

export const pricingTiers = [
  {
    id: 'launch',
    name: 'The Launch Tier',
    audience: 'Best for: Trades, Cafés, and Local Services.',
    monthly: 79,
    setup: '$599 One-time',
    features: [
      '100% Passive Tech (We manage code)',
      'Static Architecture',
      'Mobile-First Design',
      'Essential SEO & Google Business',
      'Support: 72-hour SLA (Email)',
    ],
    cta: 'Start Launch',
    popular: false,
  },
  {
    id: 'growth',
    name: 'The Growth Tier',
    audience: 'Best for: Content creators, Blogs, and Growing Brands.',
    monthly: 99,
    setup: '$599 ($299 w/ 12-mo commit)',
    features: [
      'Everything in Launch',
      'Content Control (Headless CMS)',
      'Safety Lock (Code-locked layouts)',
      'Monthly Analytics & Performance',
      'Support: Priority 48-hour SLA',
    ],
    cta: 'Start Growth',
    popular: true,
    badge: 'Popular',
  },
  {
    id: 'scale',
    name: 'The Scale Tier',
    audience: "Founder's Special Active — 12-mo Contract • Free Setup • Priority",
    monthly: 99,
    monthlyWas: 149,
    setup: 'Waived (12-mo lock)',
    features: [
      'Everything in Growth',
      'Store Integration (Stripe/Shopify)',
      'Interactive 3D Elements',
      'User Management (Login/Signup)',
      'Support: VIP 24-hour SLA',
    ],
    cta: 'Go Elite',
    popular: false,
    badge: '25 Spots Only',
  },
];

export const communityTier = {
  name: 'The Community Tier',
  label: 'Ministry Protocol — For Non-Profits',
  description:
    'Empowering New Zealand missions. Zero maintenance platforms with admin dashboards for your church leaders and user dashboards for your members to view events, prayers requests, newsletters and more.',
  monthly: 129,
  monthlyNote: '$0 Setup (12-month contract)',
  features: ['Sermons synced with your YouTube', 'Secure Giving (Stripe)'],
  cta: 'Empower Your Mission',
  footnote: '*Requires 12-month contract.',
};

export const pricingFaq = [
  {
    q: 'What is included in setup?',
    a: 'Setup covers discovery, design, build, launch, and handover. Scale tier waives setup with a 12-month contract. Community tier includes onboarding for church admins and member portals.',
  },
  {
    q: 'Can I upgrade tiers later?',
    a: 'Yes. Most partners start on Launch or Growth and move to Scale when they need stores, logins, or VIP support. We migrate your site without downtime.',
  },
  {
    q: 'Do you own the code?',
    a: 'On Launch and Growth we manage code as passive tech. Scale partners can request export options. Ministry Community sites remain fully managed for zero maintenance.',
  },
  {
    q: 'What are SLAs?',
    a: 'Launch: 72-hour email support. Growth: 48-hour priority. Scale: 24-hour VIP. Emergency outages are addressed immediately across all tiers.',
  },
  {
    q: 'Is there a contract?',
    a: 'Launch is month-to-month. Growth offers discounted setup with 12-month commit. Scale and Community tiers require 12-month agreements for waived or reduced setup.',
  },
];

export const tierComparison = [
  { feature: 'Managed hosting & code', launch: true, growth: true, scale: true },
  { feature: 'Headless CMS', launch: false, growth: true, scale: true },
  { feature: 'E-commerce / Stripe', launch: false, growth: false, scale: true },
  { feature: 'User login & dashboards', launch: false, growth: false, scale: true },
  { feature: 'Monthly analytics', launch: false, growth: true, scale: true },
  { feature: '3D / interactive elements', launch: false, growth: false, scale: true },
];

export const aboutContent = {
  mission:
    'We transition New Zealand businesses into the future with high-velocity websites, seamless digital ecosystems, and engineering-grade reliability.',
  vision:
    'To be the most trusted technical partner for ambitious NZ brands—from local trades to SaaS founders—who refuse to settle for slow, fragile web.',
  values: [
    {
      title: 'Velocity',
      text: 'Speed is a feature. Every build targets sub-second loads and fast iteration cycles.',
    },
    {
      title: 'Transparency',
      text: 'Clear pricing, honest timelines, and no hidden complexity in our partnerships.',
    },
    {
      title: 'Ownership',
      text: 'We manage the stack so you focus on customers—passive tech on every tier.',
    },
  ],
};

export const pageIntros = {
  work: {
    eyebrow: 'Portfolio',
    title: 'Selected Work',
    subtitle:
      'Real client builds—ministry and content platforms to nationwide education brands—engineered for speed, clarity, and conversion.',
  },
  pricing: {
    eyebrow: 'Partnerships',
    title: 'Elevated Pricing',
    subtitle:
      'Transparent tiers for trades, creators, scaling brands, and New Zealand missions. No hidden fees—choose the velocity that matches your ambition.',
  },
  services: {
    eyebrow: 'What We Build',
    title: 'Our Services',
    subtitle:
      'Three offerings from the Appdoers playbook—high-performance web, digital systems, and ministry platforms. Each maps to a clear pricing tier.',
  },
  about: {
    eyebrow: 'The Minds Behind',
    title: 'About Appdoers',
    subtitle:
      'A New Zealand digital agency founded on engineering precision and business strategy—led by Fabiano and Sara Da Silva.',
  },
};

export const protocol = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'We deep dive into your business logic, dissecting bottlenecks and identifying high-leverage opportunities for digital transformation.',
  },
  {
    step: '02',
    title: 'Architecture',
    description:
      'We design scalable systems, select the right stack, and map integrations so your platform performs under real-world load.',
  },
  {
    step: '03',
    title: 'Execution',
    description:
      'We ship with precision—performance-first builds, QA, and launch support so your site goes live without surprises.',
  },
  {
    step: '04',
    title: 'Evolution',
    description:
      'We monitor, optimize, and iterate so your digital presence keeps compounding results long after launch day.',
  },
];

export const founders = [
  {
    id: 'fabiano',
    badge: 'Biz',
    name: 'Fabiano Da Silva',
    role: 'The Strategist // Business & Vision',
    bio: 'Great code needs a great mission. My job is to ensure our innovations create real world value and sustainable growth for our partners.',
    skills: ['Product Strategy', 'Growth Dynamics', 'Systems Thinking'],
    quote: 'Innovation is the only sustainable competitive advantage.',
  },
  {
    id: 'sara',
    badge: 'Dev',
    name: 'Sara Da Silva',
    role: 'The Engineer // Tech & Innovation',
    bio: "I don't just write code; I craft digital engines. Every pixel and every millisecond of latency is a personal challenge to perfection.",
    skills: ['WebGL / Shaders', 'Next.js Arch', 'AI Integration'],
    quote: 'Efficiency is the highest form of elegance.',
  },
];

export const homeCta = {
  headline: 'Lacking Momentum?',
  subheadline: "Open to Opportunities — let's build something smart.",
  cta: 'Book A Call',
};

export type Product = (typeof products)[number];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
