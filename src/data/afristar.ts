// Single source of truth for AfriStar Connect

export const IMAGES = {
    hero: 'https://d64gsuwffb70l.cloudfront.net/6a3eafb177207d3a19bc987c_1782493187872_d70c1baa.png',
    founders: [
      'https://d64gsuwffb70l.cloudfront.net/6a3eafb177207d3a19bc987c_1782493205034_bd69c903.jpg',
      'https://d64gsuwffb70l.cloudfront.net/6a3eafb177207d3a19bc987c_1782493216659_01d778e9.png',
      'https://d64gsuwffb70l.cloudfront.net/6a3eafb177207d3a19bc987c_1782493225034_e78f4ac3.png',
      'https://d64gsuwffb70l.cloudfront.net/6a3eafb177207d3a19bc987c_1782493219884_8222e61f.png',
      'https://d64gsuwffb70l.cloudfront.net/6a3eafb177207d3a19bc987c_1782493217615_b9f3f9e3.png',
      'https://d64gsuwffb70l.cloudfront.net/6a3eafb177207d3a19bc987c_1782493211094_f47aa26d.jpg',
    ],
    stories: [
      'https://d64gsuwffb70l.cloudfront.net/6a3eafb177207d3a19bc987c_1782493261241_c07a3031.png',
      'https://d64gsuwffb70l.cloudfront.net/6a3eafb177207d3a19bc987c_1782493266898_c334f80b.png',
      'https://d64gsuwffb70l.cloudfront.net/6a3eafb177207d3a19bc987c_1782493249932_5787b7b1.jpg',
    ],
  };
  
  export interface Stat { label: string; value: number; prefix?: string; suffix?: string; }
  export const STATS: Stat[] = [
    { label: 'Funding Requested', value: 48, prefix: '$', suffix: 'M+' },
    { label: 'Verified Businesses', value: 800, suffix: '+' },
    { label: 'Global Investors', value: 2000, suffix: '+' },
    { label: 'Countries Reached', value: 70, suffix: '+' },
    { label: 'African Nations', value: 24, suffix: '' },
  ];
  
  export interface Sector { name: string; icon: string; count: number; color: string; }
  export const SECTORS: Sector[] = [
    { name: 'Agriculture', icon: 'sprout', count: 142, color: 'from-emerald-500 to-green-600' },
    { name: 'Healthcare', icon: 'heart-pulse', count: 98, color: 'from-rose-500 to-red-600' },
    { name: 'FinTech', icon: 'landmark', count: 176, color: 'from-emerald-500 to-teal-600' },
    { name: 'AI', icon: 'brain', count: 64, color: 'from-violet-500 to-purple-600' },
    { name: 'Education', icon: 'graduation-cap', count: 87, color: 'from-blue-500 to-indigo-600' },
    { name: 'Construction', icon: 'building-2', count: 52, color: 'from-amber-500 to-orange-600' },
    { name: 'Logistics', icon: 'truck', count: 73, color: 'from-cyan-500 to-blue-600' },
    { name: 'Retail', icon: 'shopping-bag', count: 91, color: 'from-pink-500 to-rose-600' },
    { name: 'Energy', icon: 'zap', count: 68, color: 'from-yellow-500 to-amber-600' },
    { name: 'Creative Arts', icon: 'palette', count: 45, color: 'from-fuchsia-500 to-pink-600' },
    { name: 'Tourism', icon: 'plane', count: 38, color: 'from-sky-500 to-cyan-600' },
    { name: 'Manufacturing', icon: 'factory', count: 56, color: 'from-slate-500 to-gray-600' },
  ];
  
  export const COUNTRIES = ['Nigeria', 'Kenya', 'Ghana', 'South Africa', 'Egypt', 'Rwanda', 'Tanzania', 'Senegal', 'Morocco', 'Ethiopia'];
  export const STAGES = ['Pre-Seed', 'Seed', 'Series A', 'Series B', 'Growth'];
  
  export interface Startup {
    id: string;
    name: string;
    tagline: string;
    founder: string;
    founderImg: string;
    country: string;
    sector: string;
    stage: string;
    target: number;      // funding goal USD
    raised: number;      // raised so far USD
    verified: boolean;
    femaleLed: boolean;
    youthLed: boolean;
    risk: 'Low' | 'Medium' | 'High';
    pitchScore: number;
    revenue: string;
    sdg: string[];
    description: string;
    problem: string;
    solution: string;
    market: string;
    model: string;
    traction: string;
  }
  
  const f = IMAGES.founders;
  export const STARTUPS: Startup[] = [
    { id: 'agriflow', name: 'AgriFlow', tagline: 'Smart irrigation for smallholder farms', founder: 'Amara Okeke', founderImg: f[0], country: 'Nigeria', sector: 'Agriculture', stage: 'Seed', target: 500000, raised: 320000, verified: true, femaleLed: true, youthLed: true, risk: 'Low', pitchScore: 92, revenue: '$180K ARR', sdg: ['Zero Hunger', 'Clean Water'], description: 'IoT-driven irrigation cutting water use 40% for 12,000 farmers.', problem: 'Smallholder farmers lose up to 50% of yield to inconsistent water management and have no access to data.', solution: 'Solar-powered IoT sensors plus an SMS dashboard automate irrigation and predict optimal planting windows.', market: '$23B African agritech market growing 18% YoY.', model: 'Hardware lease + SaaS subscription ($9/mo per farm).', traction: '12,000 farms onboarded, 40% water savings, 3 government partnerships.' },
    { id: 'medilink', name: 'MediLink', tagline: 'Telehealth for rural clinics', founder: 'Kwame Mensah', founderImg: f[1], country: 'Ghana', sector: 'Healthcare', stage: 'Series A', target: 1200000, raised: 760000, verified: true, femaleLed: false, youthLed: false, risk: 'Low', pitchScore: 88, revenue: '$420K ARR', sdg: ['Good Health'], description: 'Connecting 240 rural clinics to specialists via low-bandwidth video.', problem: 'Rural populations travel hours for basic specialist care that often is unavailable.', solution: 'A low-bandwidth telehealth platform plus AI triage that routes patients to the right specialist.', market: '$11B Sub-Saharan digital health opportunity.', model: 'Per-consultation fee + clinic SaaS licenses.', traction: '240 clinics, 90K consultations, NHS-Ghana pilot.' },
    { id: 'paykit', name: 'PayKit', tagline: 'Cross-border payments API', founder: 'Zainab Diallo', founderImg: f[2], country: 'Senegal', sector: 'FinTech', stage: 'Series A', target: 2000000, raised: 1450000, verified: true, femaleLed: true, youthLed: false, risk: 'Medium', pitchScore: 90, revenue: '$1.1M ARR', sdg: ['Decent Work'], description: 'One API for instant payments across 14 African currencies.', problem: 'Cross-border payments in Africa are slow, expensive and fragmented across rails.', solution: 'A single API abstracting mobile money, bank and card rails with instant settlement.', market: '$40B African cross-border payments flow.', model: 'Transaction fee (0.9%) + enterprise plans.', traction: '$60M processed, 320 merchants, 14 currencies live.' },
    { id: 'lumina-ai', name: 'Lumina AI', tagline: 'Local-language LLM assistants', founder: 'Tendai Moyo', founderImg: f[3], country: 'Kenya', sector: 'AI', stage: 'Seed', target: 800000, raised: 410000, verified: true, femaleLed: false, youthLed: true, risk: 'Medium', pitchScore: 85, revenue: '$95K ARR', sdg: ['Quality Education', 'Industry & Innovation'], description: 'Voice AI assistants fluent in Swahili, Hausa and Yoruba.', problem: 'Global AI models underperform in African languages, excluding millions.', solution: 'Fine-tuned local-language models powering voice assistants for businesses and government.', market: '$6B African language-tech market emerging fast.', model: 'API usage + enterprise deployment licenses.', traction: '3 languages live, 40K monthly active users.' },
    { id: 'edubridge', name: 'EduBridge', tagline: 'Offline-first learning platform', founder: 'Fatima Bello', founderImg: f[4], country: 'Nigeria', sector: 'Education', stage: 'Pre-Seed', target: 350000, raised: 120000, verified: true, femaleLed: true, youthLed: true, risk: 'Low', pitchScore: 87, revenue: '$32K ARR', sdg: ['Quality Education'], description: 'Curriculum-aligned lessons that work without internet.', problem: 'Over 60% of students lack reliable internet for digital learning.', solution: 'An offline-first app that syncs lessons and assessments when connectivity is available.', market: '$5B African edtech market.', model: 'School site licenses + B2C subscriptions.', traction: '180 schools, 45K learners, 92% completion rate.' },
    { id: 'solargrid', name: 'SolarGrid', tagline: 'Pay-as-you-go solar microgrids', founder: 'David Achebe', founderImg: f[5], country: 'Tanzania', sector: 'Energy', stage: 'Series B', target: 3500000, raised: 2600000, verified: true, femaleLed: false, youthLed: false, risk: 'Low', pitchScore: 94, revenue: '$2.4M ARR', sdg: ['Affordable Energy', 'Climate Action'], description: 'Bringing clean power to 80,000 off-grid homes.', problem: 'Over 600M Africans lack reliable electricity access.', solution: 'Modular solar microgrids with mobile-money pay-as-you-go metering.', market: '$24B off-grid energy market.', model: 'Energy-as-a-service monthly payments.', traction: '80K homes powered, 14 microgrids, profitable in 3 regions.' },
    { id: 'cargolink', name: 'CargoLink', tagline: 'Freight matching marketplace', founder: 'Amara Okeke', founderImg: f[0], country: 'Kenya', sector: 'Logistics', stage: 'Seed', target: 700000, raised: 280000, verified: true, femaleLed: false, youthLed: true, risk: 'Medium', pitchScore: 83, revenue: '$140K ARR', sdg: ['Industry & Innovation'], description: 'Uber-style matching for trucks and cargo across East Africa.', problem: 'Trucks run 35% empty while shippers struggle to find capacity.', solution: 'A real-time marketplace matching verified cargo with available trucks.', market: '$180B African logistics market.', model: 'Commission per matched load.', traction: '2,400 trucks, 18K loads moved, 4 corridors.' },
    { id: 'shopstack', name: 'ShopStack', tagline: 'E-commerce OS for SMEs', founder: 'Zainab Diallo', founderImg: f[2], country: 'South Africa', sector: 'Retail', stage: 'Series A', target: 1500000, raised: 900000, verified: true, femaleLed: true, youthLed: false, risk: 'Low', pitchScore: 89, revenue: '$680K ARR', sdg: ['Decent Work'], description: 'Storefront, payments and logistics in one dashboard.', problem: 'African SMEs juggle 5+ tools to sell online and lose customers in the gaps.', solution: 'An all-in-one commerce OS with storefront, payments, inventory and delivery.', market: '$30B African e-commerce enablement.', model: 'SaaS tiers + payment take rate.', traction: '14K merchants, $22M GMV, 8 countries.' },
    { id: 'biotrace', name: 'BioTrace', tagline: 'Supply-chain traceability', founder: 'Kwame Mensah', founderImg: f[1], country: 'Ghana', sector: 'Manufacturing', stage: 'Seed', target: 600000, raised: 210000, verified: true, femaleLed: false, youthLed: false, risk: 'Medium', pitchScore: 81, revenue: '$76K ARR', sdg: ['Responsible Consumption'], description: 'Blockchain traceability for cocoa and coffee exporters.', problem: 'Exporters cannot prove ethical sourcing, losing premium contracts.', solution: 'QR + blockchain traceability from farm to port with audit-ready records.', market: '$8B traceability & certification market.', model: 'Per-shipment SaaS + certification fees.', traction: '60 exporters, 1.2M units traced.' },
    { id: 'careconnect', name: 'CareConnect', tagline: 'Insurance for the informal economy', founder: 'Fatima Bello', founderImg: f[4], country: 'Egypt', sector: 'FinTech', stage: 'Pre-Seed', target: 400000, raised: 95000, verified: true, femaleLed: true, youthLed: true, risk: 'High', pitchScore: 78, revenue: '$18K ARR', sdg: ['Good Health', 'Reduced Inequalities'], description: 'Micro-insurance bundled with mobile airtime.', problem: '90% of informal workers have no insurance coverage.', solution: 'Affordable micro-insurance purchased in airtime-sized increments via USSD.', market: '$14B African insurtech opportunity.', model: 'Premium share + partner distribution fees.', traction: '22K policies, 3 telco partners.' },
    { id: 'greenbuild', name: 'GreenBuild', tagline: 'Recycled construction materials', founder: 'David Achebe', founderImg: f[5], country: 'Rwanda', sector: 'Construction', stage: 'Seed', target: 900000, raised: 340000, verified: true, femaleLed: false, youthLed: false, risk: 'Medium', pitchScore: 84, revenue: '$210K ARR', sdg: ['Sustainable Cities', 'Climate Action'], description: 'Affordable bricks from recycled plastic waste.', problem: 'Construction costs and plastic waste are both soaring across cities.', solution: 'Durable, low-cost bricks manufactured from recycled plastic and sand.', market: '$12B affordable housing materials market.', model: 'Material sales + B2B contracts.', traction: '1.4M bricks sold, 6 developer partnerships.' },
    { id: 'wanderafrica', name: 'WanderAfrica', tagline: 'Curated travel marketplace', founder: 'Tendai Moyo', founderImg: f[3], country: 'Morocco', sector: 'Tourism', stage: 'Seed', target: 650000, raised: 300000, verified: true, femaleLed: false, youthLed: true, risk: 'Medium', pitchScore: 82, revenue: '$160K ARR', sdg: ['Decent Work'], description: 'Booking platform for authentic African experiences.', problem: 'Travellers struggle to find and trust authentic local experiences.', solution: 'A curated, verified marketplace of local hosts and experiences with secure booking.', market: '$39B African tourism market.', model: 'Booking commission + premium listings.', traction: '900 hosts, 24K bookings, 12 countries.' },
  ];
  
  export interface Testimonial { name: string; role: string; quote: string; img: string; }
  export const TESTIMONIALS: Testimonial[] = [
    { name: 'Amara Okeke', role: 'Founder, AgriFlow', quote: 'AfriStar connected us with three lead investors in two weeks. The verification badge gave us instant credibility.', img: IMAGES.founders[0] },
    { name: 'Helena Voss', role: 'Partner, Sahara Ventures', quote: 'The deal flow quality is unmatched. AI matching surfaces startups I would never have found otherwise.', img: IMAGES.founders[2] },
    { name: 'Kwame Mensah', role: 'Founder, MediLink', quote: 'The pitch scoring helped us refine our deck. We closed our Series A 30% faster than expected.', img: IMAGES.founders[1] },
    { name: 'Robert Chen', role: 'Angel Investor, Singapore', quote: 'Finally a trusted gateway into African markets. Documentation and due-diligence are world class.', img: IMAGES.founders[3] },
  ];
  
  export interface Story { title: string; excerpt: string; img: string; tag: string; raised: string; }
  export const STORIES: Story[] = [
    { title: 'SolarGrid lights up 80,000 homes after $3.5M round', excerpt: 'How a Tanzanian microgrid startup became East Africa\'s fastest-growing clean energy company.', img: IMAGES.stories[0], tag: 'Energy', raised: '$3.5M raised' },
    { title: 'PayKit processes $60M as cross-border demand surges', excerpt: 'Senegal\'s payments API now powers merchants in 14 countries after closing Series A.', img: IMAGES.stories[1], tag: 'FinTech', raised: '$2M raised' },
    { title: 'AgriFlow doubles farmer yields across Nigeria', excerpt: 'Smart irrigation meets smallholder agriculture in a story of climate-resilient growth.', img: IMAGES.stories[2], tag: 'Agriculture', raised: '$500K raised' },
  ];
  
  export const PARTNERS = ['Sahara Ventures', 'Baobab Bank', 'Nairobi Accelerator', 'Atlas Capital', 'Kigali Incubator', 'UN Africa Fund', 'Cairo University', 'GreenSeed NGO'];
  
  export const HOW_STEPS = [
    { title: 'Submit', desc: 'Entrepreneurs create a profile and submit their pitch with our AI-guided builder.', icon: 'send' },
    { title: 'Review', desc: 'Our analysts and AI engine score business clarity, market and investment readiness.', icon: 'search-check' },
    { title: 'Verification', desc: 'Documents, financials and identity are verified to earn the trusted badge.', icon: 'shield-check' },
    { title: 'Published', desc: 'Approved startups go live to a curated network of vetted global investors.', icon: 'rocket' },
    { title: 'Connection', desc: 'Investors express interest, message founders and schedule meetings directly.', icon: 'handshake' },
  ];
  
  export const MAP_NODES = [
    { region: 'Africa', x: 52, y: 56, businesses: 800, primary: true },
    { region: 'Europe', x: 50, y: 30, investors: 640 },
    { region: 'North America', x: 22, y: 34, investors: 720 },
    { region: 'Asia', x: 74, y: 40, investors: 410 },
    { region: 'Middle East', x: 60, y: 44, investors: 230 },
  ];
  
  export function fmtMoney(n: number): string {
    if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`;
    if (n >= 1000) return `$${Math.round(n / 1000)}K`;
    return `$${n}`;
  }
  