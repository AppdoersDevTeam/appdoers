export const audienceSegments = [
  { id: 'churches', label: 'Churches' },
  { id: 'businesses', label: 'Businesses' },
  { id: 'schools', label: 'Schools & nonprofits' },
  { id: 'shops', label: 'Shops & retail' },
  { id: 'trades', label: 'Trades & services' },
] as const;

export type AudienceId = (typeof audienceSegments)[number]['id'];

export type AudienceProductCopy = {
  summary: string;
  description: string;
  idealFor: string;
  highlights: readonly string[];
  recommendedPlan: 'basic-website' | 'full-website';
};

export type AudienceSpotlight = {
  title: string;
  description: string;
  example: string;
  link: string;
  linkLabel: string;
};

export const audienceSpotlights: Record<AudienceId, AudienceSpotlight> = {
  churches: {
    title: 'Trusted by churches across New Zealand',
    description:
      'From sermon libraries and prayer requests to rosters and online giving — we build websites churches use every week.',
    example: 'Journey of Insights — bilingual ministry platform with podcast, shop, and donations.',
    link: '/work#jornada-de-insights',
    linkLabel: 'See church work',
  },
  businesses: {
    title: 'Built for growing businesses',
    description:
      'Look professional online, capture enquiries, and add member tools or a shop when you are ready to grow.',
    example: 'NZ Modern School of Music — nationwide brand with online shop and lesson enquiries.',
    link: '/work#everybody-playing',
    linkLabel: 'See business work',
  },
  schools: {
    title: 'Schools & nonprofits we support',
    description:
      'Clear information for parents, members, and donors — with optional logins, events, and giving when you need them.',
    example: 'NZ Modern School of Music — lesson enquiries and resources for families across Aotearoa.',
    link: '/work#everybody-playing',
    linkLabel: 'See school work',
  },
  shops: {
    title: 'Online shops that stay simple',
    description:
      'Sell products or resources on a fast site — with checkout, enquiries, and hosting handled for you.',
    example: 'Journey of Insights — e-book shop and donations alongside podcast and community content.',
    link: '/work#jornada-de-insights',
    linkLabel: 'See shop example',
  },
  trades: {
    title: 'Local trades & service businesses',
    description:
      'Show what you do, make it easy to call or message, and look trustworthy on Google and mobile.',
    example: 'Clear contact forms and fast mobile pages — the basics done properly.',
    link: '/pricing',
    linkLabel: 'View pricing',
  },
};

export const audiencePlanCopy: Record<
  AudienceId,
  { basic: AudienceProductCopy; full: AudienceProductCopy }
> = {
  churches: {
    basic: {
      recommendedPlan: 'basic-website',
      summary: 'A welcoming church website with sermons, service times, and a contact form — simple to manage.',
      description:
        'Ideal for smaller congregations or new church plants that need a polished public presence: YouTube sermons, key pages, and a way for visitors to get in touch — without member logins or admin tools.',
      idealFor: 'Small churches, new plants, or ministries that want a public site without a member portal.',
      highlights: [
        'YouTube sermon library on your site',
        'Service times, location, and about pages',
        'Contact form for enquiries and prayer requests',
        'Fast on phones — how most visitors browse',
        'Request text or image updates when you need them',
      ],
    },
    full: {
      recommendedPlan: 'full-website',
      summary: 'Member areas, events, rosters, prayer requests, and online giving — built for church life.',
      description:
        'For churches that need more than a brochure site: leaders manage content, members log in for newsletters and events, rosters go online, and you can accept giving securely.',
      idealFor: 'Active churches with teams, groups, rosters, and members who need a signed-in area.',
      highlights: [
        'Member-only area for newsletters and updates',
        'Events, prayer requests, and church calendar',
        'Rosters, groups, and staff directory',
        'Online donations (setup billed hourly)',
        'Team admin area — leaders update without calling us',
      ],
    },
  },
  businesses: {
    basic: {
      recommendedPlan: 'basic-website',
      summary: 'A professional business website that builds trust and turns visitors into enquiries.',
      description:
        'For businesses that need to look credible online: clear services, contact forms, and fast mobile pages — we handle hosting, security, and updates.',
      idealFor: 'Consultants, professional services, and local businesses that need a strong first impression.',
      highlights: [
        'Clear service pages that explain what you offer',
        'Contact and enquiry forms',
        'Basic Google setup so customers can find you',
        'Hosting, SSL, and speed included',
        'Content updates on request',
      ],
    },
    full: {
      recommendedPlan: 'full-website',
      summary: 'Member portals, team tools, bookings, or a shop — when your business outgrows a brochure site.',
      description:
        'When clients or staff need to log in, you sell online, or your team updates content themselves — Full Website adds the tools behind a professional public site.',
      idealFor: 'Growing businesses with repeat clients, memberships, or internal teams managing content.',
      highlights: [
        'Private team area to manage the site',
        'Member or client logins',
        'Online shop or booking flows',
        'Directory and grouped contacts',
        'YouTube or resource library integration',
      ],
    },
  },
  schools: {
    basic: {
      recommendedPlan: 'basic-website',
      summary: 'A clear public site for your school or nonprofit — events, news, and contact in one place.',
      description:
        'Help parents, donors, and the community find term dates, programmes, and how to reach you — without complex logins or admin panels.',
      idealFor: 'Small schools, charities, and community groups with mostly public information.',
      highlights: [
        'Term dates, programmes, and about pages',
        'News and announcements (we update on request)',
        'Enquiry and contact forms',
        'YouTube for assemblies or promotional videos',
        'Accessible on phones and tablets',
      ],
    },
    full: {
      recommendedPlan: 'full-website',
      summary: 'Member areas, events, groups, and giving — for schools and nonprofits with an active community.',
      description:
        'When staff, families, or members need signed-in access — events, newsletters, directories, rosters, and optional online giving — Full Website keeps everything in one managed platform.',
      idealFor: 'Schools, PTAs, and nonprofits with members, volunteers, or donors who need more than a public site.',
      highlights: [
        'Member or family login area',
        'Events, newsletters, and announcements',
        'Staff, volunteer, or group directories',
        'Rosters and role assignments',
        'Online donations when fundraising is part of your work',
      ],
    },
  },
  shops: {
    basic: {
      recommendedPlan: 'basic-website',
      summary: 'Showcase your products and brand online — with enquiries until you are ready for checkout.',
      description:
        'Start with a polished catalogue-style site and contact form. Good for small retailers building their online presence before adding a full shop.',
      idealFor: 'Boutiques and makers who want to display products and take enquiries first.',
      highlights: [
        'Product or collection pages',
        'Contact form for orders and questions',
        'Fast mobile browsing for shoppers',
        'YouTube for demos or lookbooks',
        'Upgrade path to Full Website with checkout',
      ],
    },
    full: {
      recommendedPlan: 'full-website',
      summary: 'Online shop with cart, checkout, and member tools — we build it and keep it running.',
      description:
        'Sell products or digital goods with secure checkout, optional customer accounts, and a team area to manage orders and content — without juggling separate platforms.',
      idealFor: 'Retailers, creators, and organisations selling products or resources online.',
      highlights: [
        'Online shop with cart and checkout',
        'Customer accounts (optional)',
        'Team admin to manage products and orders',
        'Enquiry forms alongside shop',
        'Hosting, security, and performance included',
      ],
    },
  },
  trades: {
    basic: {
      recommendedPlan: 'basic-website',
      summary: 'A no-fuss website for trades and local services — phone-friendly and easy for customers to use.',
      description:
        'Show your work, list your services, and make it simple to call or message you. Built for tradies, cleaners, tutors, and local operators who want more jobs from Google.',
      idealFor: 'Trades, cleaners, tutors, and local service providers who need enquiries, not complexity.',
      highlights: [
        'Services and gallery-style pages',
        'Click-to-call and contact forms',
        'Google-friendly setup for local search',
        'Loads fast on mobile',
        'We update copy and photos when you send them',
      ],
    },
    full: {
      recommendedPlan: 'full-website',
      summary: 'Bookings, client logins, or a small shop — when your trade business needs more than listings.',
      description:
        'Some trade and service businesses need booking requests, repeat-client portals, or product sales. Full Website adds those tools on top of a professional public site.',
      idealFor: 'Established operators with teams, repeat clients, or product lines beyond basic enquiries.',
      highlights: [
        'Booking or job enquiry workflows',
        'Client or team login area',
        'Optional small product shop',
        'Staff directory and job rosters',
        'Same hosting and support as all Appdoers plans',
      ],
    },
  },
};

export function getAudienceProductCopy(
  audienceId: AudienceId,
  planSlug: 'basic-website' | 'full-website'
): AudienceProductCopy {
  const copy = audiencePlanCopy[audienceId][planSlug === 'basic-website' ? 'basic' : 'full'];
  return copy;
}

export function isRecommendedPlanForAudience(
  audienceId: AudienceId,
  planSlug: 'basic-website' | 'full-website'
): boolean {
  return getAudienceProductCopy(audienceId, planSlug).recommendedPlan === planSlug;
}
