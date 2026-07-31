export const brand = {
  name: 'Appdoers',
  legalName: 'Appdoers Limited',
  tagline: 'Websites & online tools for New Zealand clients',
  metaTitle: 'Appdoers | Websites & Online Tools for New Zealand',
  metaDescription:
    'Professional websites for New Zealand businesses, churches, and organisations. Appdoers Limited — clear pricing, hosting included, and direct team support from Ashburton and Taranaki.',
  siteUrl: 'https://appdoers.co.nz',
  location: 'New Zealand',
  email: 'contact@appdoers.co.nz',
  phone: '+64 22 5060 870',
  address: '49 Braebrook Drive, Netherby, Ashburton 7700',
  nzbn: '9429052210952',
  nzbnUrl: 'https://www.nzbn.govt.nz/mynzbn/nzbndetails/9429052210952/',
  year: 2026,
  social: {
    linkedin: 'https://www.linkedin.com/company/appdoers-limited/',
  },
};

export const hero = {
  headline: 'A professional website without the headache.',
  subheadline:
    'We build fast, easy-to-use websites for New Zealand clients. Clear pricing, and you always speak directly with the Appdoers team.',
  primaryCta: 'Start Your Project',
  secondaryCta: 'View Our Work',
  demoUrl: 'https://jornadadeinsights.com',
};

/** Benefits shown on the homepage marquee */
export const clientBenefits = [
  'Loads fast on phones',
  'We handle hosting & security',
  'Clear monthly pricing',
  'Direct Appdoers team access',
  'NZ-based company',
  'Updates when you need them',
  'Responsive support',
  'You own your domain',
];

/** Core service offerings — aligned with pricing plans */
export const products = [
  {
    slug: 'basic-website',
    href: '/basic-website',
    title: 'Basic Website',
    badge: 'Simple & professional',
    summary:
      'A polished public website that looks great on phones — no admin tools or logins to manage.',
    description:
      'We build straightforward websites for New Zealand trades, cafés, churches, clubs, and small organisations who want to look professional online and turn visitors into enquiries, without learning any technical tools.',
    idealFor:
      'Trades, cafés, small churches, clubs, and anyone who wants a simple, trustworthy brochure site.',
    audienceTags: ['Trades & cafés', 'Churches', 'Clubs & groups'],
    recommendedTier: 'starter-website',
    tierLabel: 'Basic Website plan',
    icon: 'basic' as const,
    highlights: [
      'Fast loading on phones and computers',
      'Hosting, security, and updates included',
      'YouTube and contact form built in',
      'We look after the technical side; you focus on your work',
      'Request content changes when you need them',
    ],
    deliverables: [
      'Planning call and page list',
      'Design that works on all screen sizes',
      'Your finished website, live on the web',
      'Secure hosting and launch support',
      'Basic Google setup so people can find you',
    ],
  },
  {
    slug: 'full-website',
    href: '/full-website',
    title: 'Full Website',
    badge: 'Most popular',
    summary:
      'Team tools, member areas, events, and donations — built for churches and growing businesses.',
    description:
      'When you need more than a brochure site — member logins, events, rosters, prayer requests, online giving, or a shop — we build it and keep it running. Churches and businesses across New Zealand use our Full Website plan.',
    idealFor:
      'Churches with rosters, prayer requests, and giving — and businesses that need member portals, shops, or a team admin area.',
    audienceTags: ['Churches', 'Businesses', 'Schools & nonprofits'],
    audienceExamples: {
      churches: ['Sermon libraries & YouTube', 'Prayer requests & events', 'Rosters, groups & giving'],
      businesses: ['Member portals & logins', 'Online shops & bookings', 'Team admin area'],
    },
    recommendedTier: 'full-website',
    tierLabel: 'Full Website plan',
    icon: 'full' as const,
    highlights: [
      'Private area for your team to manage the site',
      'Member-only section with logins',
      'Events, newsletters, prayer requests, and directories',
      'Online donations and YouTube catalogue',
      'Rosters, groups, and who-can-log-in controls',
    ],
    deliverables: [
      'Discovery call and feature plan',
      'Public site plus team and member areas',
      'Secure logins for leaders and members',
      'Events, content tools, and giving setup',
      'Hosting, security, and ongoing support',
    ],
  },
] as const;

export const churchClientHighlight = {
  title: 'Trusted by churches across New Zealand',
  description:
    'From sermon libraries and prayer requests to rosters and online giving — we build websites churches actually use every week.',
  example: 'Journey of Insights — bilingual ministry platform with podcast, shop, and donations.',
  link: '/work#jornada-de-insights',
  linkLabel: 'See church work',
};

export const services = products.map((p) => ({
  title: p.title,
  description: p.summary,
  badge: p.badge,
  link: p.href,
  audienceTags: p.audienceTags,
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
  capabilities: string[];
  externalUrl: string;
  /** Shopify blocks live iframes; use false for a screenshot preview + open-site link */
  embeddable?: boolean;
  /** Local/static preview when remote screenshot services fail (e.g. Shopify) */
  previewImage?: string;
};

export const portfolio: PortfolioProject[] = [
  {
    category: 'Content & Ministry Platform',
    title: 'Journey of Insights',
    description:
      'A bilingual digital home for Patricia da Silva: podcast, e-book shop, donations, and community, unifying years of Bible teaching into one fast, managed platform.',
    metric: '50+',
    metricLabel: 'Podcast Episodes',
    link: '/work#jornada-de-insights',
    slug: 'jornada-de-insights',
    client: 'Patricia da Silva · jornadadeinsights.com',
    challenge:
      'Patricia’s ministry had grown across YouTube, Spotify, Instagram, and printed study materials, but audiences had no single place to listen, buy e-books, subscribe, or support the work. She needed English and Portuguese (Brazil) without juggling separate tools or slow, fragile DIY sites.',
    solution:
      'We built one website that brings everything together: featured episodes and e-books on the homepage, a full podcast library, a shop with cart and sign-in, online donations, an about timeline, and a switch between English and Portuguese. Patricia can update content herself while the design stays consistent and the site stays fast.',
    results: [
      'Podcast, shop, and giving all on one website',
      'English and Portuguese for listeners worldwide',
      '50+ episodes and 10+ e-books easy to find',
      'Fast, secure hosting with updates handled for her',
    ],
    capabilities: ['Podcast & shop', 'Online donations', 'English & Portuguese', 'Fast, secure hosting'],
    externalUrl: 'https://jornadadeinsights.com',
    embeddable: true,
  },
  {
    category: 'Education & E-Commerce',
    title: 'NZ Modern School of Music',
    description:
      'Everybody Playing is the online face of a nationwide music school (est. 1952), connecting students and tutors across Aotearoa with lessons, products, and regional enquiry flows.',
    metric: '54+',
    metricLabel: 'Years Teaching',
    link: '/work#everybody-playing',
    slug: 'everybody-playing',
    client: 'Gail Boswell · everybodyplaying.com',
    challenge:
      'The New Zealand Modern School of Music needed a modern storefront and lead engine: showcase decades of trust, list instruments and regions for one-to-one tuition, sell resources, and capture serious enquiries from parents and aspiring teachers, without losing the warmth of a community-led school.',
    solution:
      'We built an online shop and enquiry site with welcoming storytelling, curriculum and teacher sections, student stories from different regions, a product catalogue with cart, and a simple form to request lessons by instrument and location. Parents and teachers can find what they need without confusion.',
    results: [
      'Lesson enquiries from across New Zealand',
      'Online shop for school products',
      'Real student stories from Taranaki to Gisborne',
      'Clear paths for students and new music tutors',
    ],
    capabilities: ['Online shop', 'Lesson enquiries', 'Nationwide NZ', 'Easy product updates'],
    externalUrl: 'https://www.everybodyplaying.com',
    embeddable: false,
    previewImage: '/images/everybodyplaying-preview.jpg',
  },
  {
    category: 'Church Website',
    title: 'New Plymouth Community Church',
    description:
      'A welcoming church website for NPCC in Taranaki: Sunday worship, weekly ministries, sermon audio, newsletter sign-up, and clear ways to find the church.',
    metric: '8+',
    metricLabel: 'Weekly ministries',
    link: '/work#np-community-church',
    slug: 'np-community-church',
    client: 'New Plymouth Community Church · npcommunitychurch.org',
    challenge:
      'New Plymouth Community Church needed a clear online home for worship times, ministries for all ages, and sermon media—so visitors and members could find activities, listen to teaching, and subscribe to news without hunting across social platforms.',
    solution:
      'We built a church website that highlights Sunday worship at 50 Vivian Street, organises weekly activities from kids programs to connect groups, hosts sermon audio, offers newsletter sign-up, and provides find-us details for New Plymouth visitors.',
    results: [
      'Sunday service times and location easy to find',
      'Weekly ministries and activities grouped clearly',
      'Sermon audio and media on the site',
      'Newsletter sign-up for regular updates',
    ],
    capabilities: ['Sunday & ministries', 'Sermon media', 'Newsletter', 'Find us & contact'],
    externalUrl: 'https://www.npcommunitychurch.org/',
    embeddable: false,
  },
  {
    category: 'Church Platform',
    title: 'Ashburton Baptist Church',
    description:
      'A modern church website for Ashburton Baptist: Sunday services, sermon streaming, events, prayer, giving, and a member login for the congregation.',
    metric: '1',
    metricLabel: 'Church home online',
    link: '/work#ashburton-baptist',
    slug: 'ashburton-baptist',
    client: 'Ashburton Baptist Church · ashburtonbaptist.co.nz',
    challenge:
      'Ashburton Baptist Church needed a welcoming digital home that reflected their community — service times, sermons, events, prayer, and giving — while giving members a simple way to log in and stay connected beyond Sunday.',
    solution:
      'We built a church platform with a clear public site for visitors (watch online, find us, events, prayer, and giving) and member access for people already part of the congregation. Content stays easy to update so the church can keep ministries and announcements current.',
    results: [
      'Sunday worship and location easy to find',
      'Sermons and events in one place',
      'Prayer and giving paths for visitors and members',
      'Member login for the church community',
    ],
    capabilities: ['Sermons & events', 'Prayer & giving', 'Member login', 'Visitor-friendly home'],
    externalUrl: 'https://ashburtonbaptist.co.nz/',
    embeddable: false,
    previewImage: '/images/ashburtonbaptist-preview.jpg',
  },
  {
    category: 'Retail & E-Commerce',
    title: 'Motoculture',
    description:
      'An online motorcycle showroom for a New Plymouth workshop: bikes, apparel, helmets, parts, and accessories with clear paths to shop and get in touch.',
    metric: 'NP',
    metricLabel: 'Based in New Plymouth',
    link: '/work#motoculture',
    slug: 'motoculture',
    client: 'Motoculture · motoculture.co.nz',
    challenge:
      'Motoculture needed an online storefront that matched their New Plymouth showroom and workshop — sell motorcycles and riding gear, showcase brands, and make it easy for riders to browse, buy, or call for service.',
    solution:
      'We delivered a Shopify storefront with shop-first navigation across motorcycles, apparel, helmets, boots, luggage, parts, and accessories, plus clear contact details and opening hours for the workshop. Riders can shop online or reach the team for repairs and advice.',
    results: [
      'Online shop for bikes and riding gear',
      'Clear categories from apparel to parts',
      'Showroom and workshop contact easy to find',
      'Brand-led product browsing for Taranaki riders',
    ],
    capabilities: ['Online shop', 'Motorcycles & gear', 'Workshop contact', 'Brand catalogues'],
    externalUrl: 'https://www.motoculture.co.nz/',
    embeddable: false,
    previewImage: '/images/motoculture-preview.jpg',
  },
];

export const stats = [
  { value: 8, suffix: ' wks', prefix: '', label: 'Typical build time' },
  { staticDisplay: '<1s', label: 'Mobile load target' },
  { staticDisplay: '100%', label: 'Appdoers-led delivery' },
  { staticDisplay: 'NZ', label: 'Based in New Zealand' },
];

export const testimonials = [
  {
    name: 'Patricia da Silva',
    role: 'Journey of Insights',
    text: 'Appdoers brought our podcast, shop, and donations into one website. They kept us updated at every step and we always knew what was happening.',
    rating: 5,
  },
  {
    name: 'Gail Boswell',
    role: 'NZ Modern School of Music',
    text: 'We needed a site that felt warm and trustworthy for families across New Zealand. The team made the process straightforward and the result speaks for itself.',
    rating: 5,
  },
] as const;

export type PlanFeature = {
  label: string;
  detail: string;
};

export const allPlanFeatures: PlanFeature[] = [
  {
    label: 'As many pages as you need',
    detail:
      'There is no page limit. We can build home, about, ministries, contact, and any other pages your organisation needs.',
  },
  {
    label: 'Looks great on phones, tablets, and computers',
    detail:
      'Your site automatically adjusts to any screen size so visitors get a clear, easy experience on mobile, tablet, or desktop.',
  },
  {
    label: '3 rounds of design feedback included; extra changes are $49/hour',
    detail:
      'While we build your site, you get three rounds of feedback to refine the design. After that, or for changes once live, we bill at $49 per hour.',
  },
  {
    label: 'Basic setup so Google can find you',
    detail:
      'We handle the essentials so search engines can discover and list your site: titles, descriptions, and the technical basics for local search.',
  },
  {
    label: 'Your site ready in about 8 weeks',
    detail:
      'Most projects are ready to launch around eight weeks from when we start. We keep you updated throughout the build.',
  },
  {
    label: 'Your domain name, security certificate, and hosting included',
    detail:
      'Your web address, secure browsing (the padlock in the browser), and reliable hosting are all part of the plan, with no separate hosting bill from us.',
  },
];

export const pricingTiers = [
  {
    id: 'full-website',
    name: 'Full Website',
    audience: 'Churches and businesses that need team tools, member areas, and admin features.',
    audienceTags: ['Churches', 'Businesses', 'Schools & nonprofits'],
    monthly: 199,
    developmentFee: 2999,
    minDevelopmentPayment: 1199,
    includedEmail: {
      storage: '20GB',
      users: 5,
    },
    termOptions: [
      {
        months: 12,
        monthly: 199,
        yearly: 2388,
        label: '1-year plan',
      },
      {
        months: 24,
        monthly: 179.1,
        yearly: 2149.2,
        label: '2-year plan',
      },
      {
        months: 48,
        monthly: 159.2,
        yearly: 1910.4,
        label: '4-year plan',
      },
    ],
    features: [
      {
        label: 'Private management area for your team',
        detail:
          'A password-protected area where leaders and staff can manage the site, content, and members without calling us for every small change.',
      },
      {
        label: 'Member-only area on your site',
        detail:
          'A signed-in section where members can view events, prayer requests, newsletters, and other content meant just for them.',
      },
      {
        label: 'Manage events, newsletters, and prayer requests',
        detail:
          'Publish upcoming events, upload newsletters, and add or manage prayer requests, all from one place in the admin area.',
      },
      {
        label: 'Directory for staff, members, and attendees',
        detail:
          'Keep a searchable directory of staff, members, and attendees with the contact details and information you choose to show.',
      },
      {
        label: 'Upload and assign rosters, and manage groups',
        detail:
          'Upload serving rosters, assign people to roles or teams, and organise members into groups for communication or scheduling.',
      },
      {
        label: 'Control who can log in',
        detail:
          'You decide who can access the member area, who can help manage the site, and you can add or remove people yourself.',
      },
      {
        label: 'YouTube link to display your video catalogue',
        detail:
          'Connect your YouTube channel so sermons, teachings, or other videos appear on your site and stay in sync with what you publish.',
      },
      {
        label: 'Contact form',
        detail:
          'Visitors can send you a message straight from your site without you needing to publish your email address publicly.',
      },
      {
        label: 'Online donations (setup billed at $49/hour, usually about 3 hours)',
        detail:
          'Accept secure online giving. Connecting your payment account is billed at our hourly rate and usually takes around three hours.',
      },
    ],
    cta: 'Get Full Website',
    popular: true,
    badge: 'Most popular',
  },
  {
    id: 'starter-website',
    name: 'Basic Website',
    audience: 'Trades, cafés, churches, and anyone who wants a simple public site without admin tools.',
    audienceTags: ['Trades & cafés', 'Churches', 'Clubs & groups'],
    monthly: 106.8,
    developmentFee: 1499,
    minDevelopmentPayment: 799,
    includedEmail: {
      storage: '5GB',
      users: 5,
    },
    termOptions: [
      {
        months: 12,
        monthly: 106.8,
        yearly: 1281.6,
        label: '1-year plan',
      },
      {
        months: 24,
        monthly: 97.9,
        yearly: 1174.8,
        label: '2-year plan',
      },
      {
        months: 48,
        monthly: 89,
        yearly: 1068,
        label: '4-year plan',
      },
    ],
    features: [
      {
        label: 'Customer-facing site with fixed content; request any changes you need',
        detail:
          'A polished public website with content we design and build for you. After launch, send us a request when you need text, images, or pages updated.',
      },
      {
        label: 'YouTube link to display your video catalogue',
        detail:
          'Connect your YouTube channel so sermons, teachings, or other videos appear on your site and stay in sync with what you publish.',
      },
      {
        label: 'Contact form',
        detail:
          'Visitors can send you a message straight from your site without you needing to publish your email address publicly.',
      },
    ],
    cta: 'Get Basic Website',
    popular: false,
  },
];

export const freeEmailTermMonths = 48;

export const maxEmailMailboxes = 30;

export const emailAddOns = [
  {
    label: 'Basic email',
    storageNote: '5GB per mailbox',
    prices: { 12: 3, 24: 2.5, 48: 2 },
  },
  {
    label: 'Standard email',
    storageNote: '20GB per mailbox',
    prices: { 12: 6.5, 24: 6, 48: 5.5 },
  },
  {
    label: 'Premium email',
    storageNote: '50GB per mailbox',
    prices: { 12: 12.5, 24: 11.5, 48: 10.5 },
  },
] as const;

export const pricingFaq = [
  {
    q: 'What is the difference between Full Website and Basic Website?',
    a: 'Full Website includes private areas for your team and members: events, newsletters, prayer requests, directories, rosters, groups, logins, YouTube, contact forms, and online donations — popular with churches and growing businesses. Basic Website is a simpler public site with fixed content, YouTube, and a contact form; any changes are requested through us.',
  },
  {
    q: 'How do the 1-year, 2-year, and 4-year plans work?',
    a: 'You choose how long you want to stay with us. Longer plans show a Save % badge vs the 1-year rate. On a 1-year plan, paying more setup upfront lowers your monthly bill (shown as −$/mo) — your total price stays the same.',
  },
  {
    q: 'What counts as a design feedback round?',
    a: 'Each plan includes 3 rounds of feedback while we build your site. After that, or for changes once your site is live, we bill at $49 NZD per hour.',
  },
  {
    q: 'What is your hourly rate?',
    a: 'Extra work outside your plan is billed at $49 NZD per hour. That includes design changes beyond your 3 included rounds, updates after launch, setting up online donations (usually about 3 hours), and other one-off requests. See the billing & terms section on the pricing page for full details.',
  },
  {
    q: 'How long until my site is ready?',
    a: 'We aim to develop your site within 8 weeks from when we start. We will keep you updated along the way. If delays are caused by you not providing information or content when we need it, we are not liable for those delays.',
  },
  {
    q: 'How does the setup fee work?',
    a: 'Every plan has a one-time setup fee: $2,999 for Full Website and $1,499 for Basic Website. You choose how much to pay upfront (minimum $1,199 or $799). Your setup fee is due within 7 days of signing up. Anything you do not pay upfront is spread evenly across your monthly payments for the length of your plan.',
  },
  {
    q: 'When does my monthly fee start?',
    a: 'Your first monthly bill is due at the end of the 8-week development period, or within 7 days of launch if your site is ready sooner. All ongoing bills are paid monthly or annually in advance; you choose which when you sign up.',
  },
  {
    q: 'What happens when my contract ends?',
    a: 'Your commitment term runs from your launch date. When it ends, you can sign up for another chosen term. Open-ended terms are not offered. If you have not chosen a new term within 30 days of your contract ending, your site will be suspended.',
  },
  {
    q: 'Can I cancel during my contract?',
    a: 'Yes, with 30 days written notice. If you terminate while still in contract, you must pay out the remainder: months remaining × your monthly price. On termination we return your personal details, user information, copywriting, images, and domain. We do not hand over the behind-the-scenes website files, your site is taken offline, and another provider cannot simply copy our build.',
  },
  {
    q: 'What is not included?',
    a: 'We do not design logos, edit photos, create or edit videos, run ads, run ongoing Google search campaigns, manage social media, or build phone apps. All written content and images must be supplied to us ready to use.',
  },
  {
    q: 'Can I add more business email accounts?',
    a: 'Both plans include free business email on 4-year (48-month) contracts: Full Website gets 20GB for up to 5 people, Basic Website gets 5GB for up to 5 people. Additional mailboxes use the same contract length as your website (12, 24, or 48 months). Choose any number of mailboxes up to 30. Basic is $3/$2.50/$2 per mailbox per month, Standard is $6.50/$6/$5.50, and Premium is $12.50/$11.50/$10.50 for 12-, 24-, and 48-month terms respectively.',
  },
];

export const hourlyPricing = {
  rate: 49,
  title: 'Hourly rate for extra work',
  summary:
    'Your plan includes 3 design feedback rounds while we build. After that, or for any changes once your site is live, we bill at our hourly rate.',
  examples: [
    'Extra design or layout changes beyond 3 included rounds',
    'Text, image, or page updates after your site is live',
    'Setting up online donations (usually about 3 hours)',
    'One-off requests outside what your plan includes',
  ],
} as const;

export const pricingPolicySections = [
  {
    title: 'When payments start',
    summary: 'Setup fee within 7 days of signing. First monthly bill after your 8-week build (or within 7 days of early launch).',
    items: [
      'Your setup fee is due within 7 days of signing up.',
      'Your first monthly bill is due at the end of the 8-week development period, or within 7 days of launch if your site is ready sooner.',
      'All bills are paid for the month or year in advance.',
      'You can choose to pay monthly or annually.',
    ],
  },
  {
    title: 'End of contract',
    summary: 'Your term runs from launch day. Renew for another term, or your site is suspended 30 days after contract end.',
    items: [
      'Your commitment term runs from your launch date.',
      'When your contract ends, you can sign up for another commitment term of your choice.',
      'Open-ended terms are not permitted. If no new term is chosen within 30 days of your contract ending, your site will be suspended.',
    ],
  },
  {
    title: 'Cancelling your plan',
    summary: '30 days written notice required. Early exit means paying out remaining months at your monthly price.',
    items: [
      'All terminations require 30 days written notice.',
      'If you terminate while still in contract, you must pay out the remainder of your contract: months remaining × your monthly price.',
      'On termination we will return your personal details, user information, copywriting, images, and domain.',
      'We do not hand over the behind-the-scenes website files. Your site will be taken offline and another provider cannot simply copy our build.',
    ],
  },
  {
    title: 'What we do not include',
    summary: 'No logos, photo editing, videos, ads, search campaigns, social media, or phone apps. You supply content ready to use.',
    items: [
      'We do not design logos.',
      'We do not edit photos.',
      'All content must be provided to us ready to use.',
      'We do not create or edit videos.',
      'We do not run ads or manage ongoing Google search campaigns.',
      'We do not manage social media.',
      'We aim to develop your site within 8 weeks. We are not liable for delays caused by you not providing information when we need it.',
      'We do not build phone apps (iPhone/Android).',
    ],
  },
] as const;

export const tierComparison = [
  { feature: 'Unlimited pages', fullWebsite: true, starterWebsite: true },
  { feature: 'Works on all devices', fullWebsite: true, starterWebsite: true },
  { feature: 'Domain, security & hosting', fullWebsite: true, starterWebsite: true },
  { feature: 'Basic Google setup', fullWebsite: true, starterWebsite: true },
  { feature: '3 design feedback rounds', fullWebsite: true, starterWebsite: true },
  { feature: 'YouTube video catalogue', fullWebsite: true, starterWebsite: true },
  { feature: 'Contact form', fullWebsite: true, starterWebsite: true },
  { feature: 'Private area for your team', fullWebsite: true, starterWebsite: false },
  { feature: 'Member-only area', fullWebsite: true, starterWebsite: false },
  { feature: 'Events, newsletters & prayer requests', fullWebsite: true, starterWebsite: false },
  { feature: 'Directory, rosters & groups', fullWebsite: true, starterWebsite: false },
  { feature: 'Manage who can log in', fullWebsite: true, starterWebsite: false },
  { feature: 'Online donations', fullWebsite: true, starterWebsite: false },
  { feature: 'Fixed content; changes on request', fullWebsite: false, starterWebsite: true },
  { feature: 'Free business email on 4-year plan (Full: 20GB/5 people, Basic: 5GB/5 people)', fullWebsite: true, starterWebsite: true },
];

export const aboutContent = {
  mission:
    'We help New Zealand clients get a professional website that works: fast to load, easy to understand, and looked after by us so you can focus on your audience.',
  vision:
    'To be the website partner our clients trust: clear pricing and no surprises.',
  values: [
    {
      title: 'Speed',
      text: 'Your site should load quickly on phones. Slow sites lose visitors. We take that seriously.',
    },
    {
      title: 'Transparency',
      text: 'Clear pricing, honest timelines, and straight answers when you need them.',
    },
    {
      title: 'We handle the technical side',
      text: 'Hosting, security, and updates are our job. You focus on your work; we keep the site running.',
    },
  ],
};

export const pageIntros = {
  work: {
    eyebrow: 'Portfolio',
    title: 'Selected Work',
    subtitle:
      'Real client websites, from a ministry platform with podcast and shop to a nationwide music school and a Taranaki community church.',
  },
  pricing: {
    eyebrow: 'Simple & clear',
    title: 'Website Pricing',
    subtitle:
      'Two plans. Pick your length, set your setup fee, and see exactly what you pay.',
  },
  services: {
    eyebrow: 'What We Build',
    title: 'Our Services',
    subtitle:
      'Basic and Full website plans for businesses, churches, and organisations — with clear pricing.',
  },
  about: {
    eyebrow: 'About Us',
    title: 'About Appdoers',
    subtitle:
      'Appdoers Limited is a New Zealand website company helping businesses, churches, and organisations get online with clear pricing and hands-on delivery.',
  },
};

export const protocol = [
  {
    step: '01',
    title: 'We listen',
    description:
      'We start with a conversation about you, who you serve, and what you need the website to do.',
  },
  {
    step: '02',
    title: 'We plan',
    description:
      'We agree on pages, features, timeline, and price before we build. You know what you are getting and what it costs.',
  },
  {
    step: '03',
    title: 'We build & launch',
    description:
      'We design and build your site, keep you updated with feedback rounds, and launch when you are happy with the result.',
  },
  {
    step: '04',
    title: 'We support',
    description:
      'After launch we host, secure, and maintain your site. Need a change? Request it or use your plan tools if included.',
  },
];

export const foundersIntro = {
  eyebrow: 'The Appdoers Team',
  title: 'Founder-led delivery',
  lead:
    'Appdoers Limited is a New Zealand website company with teams in Ashburton and New Plymouth. We design, build, host, and support websites for clients across Aotearoa — with clear pricing and direct access to the people doing the work.',
  partnership:
    'From your first enquiry through launch and beyond, you work with the Appdoers team — not a call centre or a rotating account manager.',
};

export const founders = [
  {
    id: 'fabiano',
    badge: 'Founder',
    name: 'Fabiano Da Silva',
    photo: '/images/1663654614457.jpg',
    photoPosition: 'center 20%',
    role: 'Founder · Client Strategy',
    location: 'Ashburton, New Zealand',
    bio: 'Appdoers client strategy starts every project with the right questions: who you serve, what you need the site to do, and how it fits your budget and timeline.',
    extendedBio:
      'Appdoers leads discovery calls, pricing conversations, and project planning. Clients work with us to choose the right plan, understand contract terms, and prioritise features that move things forward. We keep projects on track when content or decisions are needed from your side.',
    focus: [
      'Discovery, scoping, and feature prioritisation',
      'Transparent pricing and partnership terms',
      'Conversion-focused site structure and messaging',
      'Your main point of contact from enquiry to launch',
    ],
    skills: ['Product Strategy', 'Client Partnerships', 'Growth & Conversion', 'Project Leadership'],
    quote: 'A great website is only great if it helps your organisation grow.',
  },
  {
    id: 'sara',
    badge: 'Tech',
    name: 'Sara Da Silva',
    photo: '/images/1750225143186.jpg',
    photoPosition: 'center 15%',
    role: 'Technical Lead',
    location: 'New Plymouth, New Zealand',
    bio: 'Appdoers technical delivery covers design, build, hosting, and support — from simple public sites to private member areas, email, donations, and online shops.',
    extendedBio:
      'The Appdoers team makes sure your site loads quickly on phones, sets up your web address, security, and hosting, and builds the tools your organisation needs. Online payments, shops, and member logins are built and maintained by Appdoers.',
    focus: [
      'Designing and building your website',
      'Fast loading, hosting, and security setup',
      'Private team areas, logins, and member sections',
      'Online payments, shops, and connected tools',
    ],
    skills: ['Website design & build', 'Hosting & security', 'Member areas & logins', 'Online shops & payments'],
    quote: 'A fast, reliable website is how we respect your visitors and your brand.',
  },
];

export const homeCta = {
  headline: 'Ready for a website that just works?',
  subheadline: 'Call us, email us, or send your quote through the contact form.',
  cta: 'Contact Us',
};

export const contactPage = {
  metaTitle: 'Contact Us | Appdoers',
  metaDescription:
    'Call, email, or send your project details and pricing quote through our contact form. We reply within 2 business days.',
  heading: 'Contact Us',
  subheadline:
    'Call us, email us, or use the form below. Built a quote on our pricing page? Your plan details will appear here automatically.',
  formHeading: 'Send a message',
  formQuoteHint:
    'To include a pricing quote, build one on our pricing page first, then click “Send this quote”.',
  pricingLinkLabel: 'Build a quote on pricing',
  sendQuoteLabel: 'Send this quote',
};

export type Product = (typeof products)[number];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const privacyPolicy = {
  title: 'Privacy Policy',
  updated: 'June 2026',
  sections: [
    {
      heading: 'Who we are',
      body: 'This website is operated by Appdoers Limited, a New Zealand company (NZBN 9429052210952). Registered address: 49 Braebrook Drive, Netherby, Ashburton 7700. Contact: contact@appdoers.co.nz.',
    },
    {
      heading: 'Information we collect',
      body: 'When you contact us through our website form, email, or phone, we may collect your name, email address, phone number, organisation details, and any message you send us. If you become a client, we also hold information needed to deliver your website and support your account.',
    },
    {
      heading: 'How we use your information',
      body: 'We use your information to respond to enquiries, prepare quotes, deliver website services, send invoices, and provide ongoing support. We do not sell your personal information to third parties.',
    },
    {
      heading: 'Form submissions',
      body: 'Contact form submissions are emailed to contact@appdoers.co.nz. Please do not send sensitive payment details through the contact form.',
    },
    {
      heading: 'Cookies and analytics',
      body: 'Our website uses essential cookies for basic functionality. We use Vercel Web Analytics to understand aggregate traffic (page views, referrers, countries, and devices). This is not used for advertising and does not track you across other websites. You can control cookies through your browser settings.',
    },
    {
      heading: 'Data retention',
      body: 'We keep enquiry and client records for as long as needed to provide services, meet legal obligations, and resolve disputes. You may ask us to update or delete your contact details where appropriate.',
    },
    {
      heading: 'Your rights',
      body: 'Under New Zealand privacy law, you may request access to personal information we hold about you and ask us to correct it if it is inaccurate. Contact us at contact@appdoers.co.nz for any privacy request.',
    },
    {
      heading: 'Changes',
      body: 'We may update this policy from time to time. The latest version will always be published on this page.',
    },
  ],
};

export const termsOfService = {
  title: 'Terms of Service',
  updated: 'June 2026',
  intro:
    'These terms apply to your use of the Appdoers website and to website services provided by Appdoers Limited (NZBN 9429052210952). Specific pricing, contract length, and deliverables are agreed in your signed plan.',
  sections: [
    {
      heading: 'Website services',
      body: 'Appdoers Limited provides website design, development, hosting, security, and support under the Basic Website or Full Website plans described on our pricing page. Scope, timelines, and fees are confirmed before work begins.',
    },
    {
      heading: 'Pricing and payment',
      body: 'Setup fees are due within 7 days of signing up. Monthly or annual fees are billed in advance. Your first monthly bill is due at the end of the 8-week development period, or within 7 days of launch if your site is ready sooner. Extra work outside your plan is billed at $49 NZD per hour unless otherwise agreed.',
    },
    {
      heading: 'Contract length and renewal',
      body: 'Your commitment term runs from your launch date. When it ends, you may sign up for another chosen term. Open-ended terms are not offered. If no new term is chosen within 30 days of your contract ending, your site may be suspended.',
    },
    {
      heading: 'Cancellation',
      body: 'All terminations require 30 days written notice. If you terminate while still in contract, you must pay out the remainder of your contract at your monthly price. On termination we return your personal details, user information, copywriting, images, and domain as agreed.',
    },
    {
      heading: 'Content and ownership',
      body: 'You supply written content and images ready to use. We do not design logos, edit photos, create videos, run ads, manage social media, or build phone apps unless separately agreed. Website source files remain with Appdoers Limited; another provider cannot simply copy our build.',
    },
    {
      heading: 'Acceptable use',
      body: 'You agree not to use our services for unlawful content or activity. We may suspend services if a site is used in a way that creates legal, security, or reputational risk.',
    },
    {
      heading: 'Limitation of liability',
      body: 'We aim to develop your site within 8 weeks and are not liable for delays caused by you not providing information when needed. Our liability is limited to the extent permitted by New Zealand law for services of this kind.',
    },
    {
      heading: 'Contact',
      body: 'Questions about these terms? Email contact@appdoers.co.nz or call +64 22 5060 870.',
    },
  ],
};
