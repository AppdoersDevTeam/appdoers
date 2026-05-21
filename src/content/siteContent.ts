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

/** v1 website — only these three offerings */
export const v1Products = [
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

/** @deprecated use v1Products — kept for components that import `services` */
export const services = v1Products.map((p) => ({
  title: p.title,
  description: p.summary,
  badge: p.badge,
  link: p.href,
}));

export const products = v1Products;

export const portfolio = [
  {
    category: 'AI SaaS Platform',
    title: 'MindLink',
    description:
      'AI-driven metadata extraction tool for enterprise document management.',
    metric: '+40%',
    metricLabel: 'Efficiency Increase',
    link: '/work#mindlink',
    slug: 'mindlink',
    client: 'Enterprise Document Management',
    challenge:
      'Manual tagging of thousands of legal and compliance documents slowed teams and introduced costly errors.',
    solution:
      'Built a Next.js SaaS front-end with OpenAI-powered metadata extraction, batch processing, and role-based admin dashboards.',
    results: ['40% faster document processing', 'Reduced manual tagging by 85%', 'SOC2-ready audit trails'],
    stack: ['Next.js', 'TypeScript', 'OpenAI API', 'Supabase', 'Vercel'],
    externalUrl: 'https://jornadadeinsights.com',
  },
  {
    category: 'High-Performance Web',
    title: 'Gym Website',
    description: 'Ultra-fast Next.js website optimized for conversion and SEO.',
    metric: '<1s',
    metricLabel: 'Load Speed',
    link: '/work#gym-website',
    slug: 'gym-website',
    client: 'Fitness & Wellness Brand',
    challenge:
      'Legacy WordPress site scored poorly on mobile Core Web Vitals and leaked leads from slow booking flows.',
    solution:
      'Rebuilt on static Next.js with edge caching, streamlined class schedules, and Google Business integration.',
    results: ['Sub-1s LCP on mobile', '2.4× increase in trial sign-ups', 'Top-3 local map pack within 90 days'],
    stack: ['Next.js', 'Tailwind CSS', 'Vercel', 'Stripe'],
  },
  {
    category: 'E-Commerce',
    title: 'Sneakers Store',
    description: 'Custom Shopify layout with 3D product visualization.',
    metric: '$20k',
    metricLabel: 'Monthly Revenue',
    link: '/work#sneakers-store',
    slug: 'sneakers-store',
    client: 'Direct-to-Consumer Retail',
    challenge:
      'Generic Shopify theme failed to showcase premium products and support high-AOV checkout experiences.',
    solution:
      'Custom theme with 3D product viewers, size-guide UX, and abandoned-cart automation tied to email flows.',
    results: ['$20k monthly revenue in month three', '18% higher average order value', '35% cart recovery rate'],
    stack: ['Shopify', 'React', 'Three.js', 'Klaviyo'],
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
      'Case studies from AI platforms, high-performance marketing sites, and e-commerce experiences—built for measurable outcomes.',
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

export type V1Product = (typeof v1Products)[number];

export function getProductBySlug(slug: string): V1Product | undefined {
  return v1Products.find((p) => p.slug === slug);
}
