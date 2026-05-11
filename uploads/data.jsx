// All proposal content lives here so it's easy to tweak.

const STATS = [
  { value: 7, suffix: '', label: 'Active Communities in Niagara' },
  { value: 700, suffix: '+', label: 'Homes Under Development' },
  { value: 279, prefix: '$', suffix: 'M', label: 'Gross Revenue Pipeline' },
  { value: 302, suffix: 'K+', label: 'Social Media Followers' },
];

const ADVANTAGES = [
  { m5v: '2%', industry: '5%', label: 'In-house sales commission', note: 'vs. industry standard' },
  { m5v: '0.75%', industry: '2%', label: 'In-house marketing spend', note: 'reinvested into brand' },
  { m5v: '232K+', industry: '—', label: 'Instagram followers, organic' },
  { m5v: '70K+', industry: '—', label: 'TikTok followers, high-engagement' },
  { m5v: '2M+', industry: '—', label: 'Monthly organic reach, all platforms' },
  { m5v: '50K+', industry: '—', label: 'Qualified leads in owned buyer database' },
];

const PROPERTIES = [
  { id: 'falls-p2',  name: 'The Falls — Niagara Phase 2', type: 'Mid-rise Condo',    units: '40+', proximity: 4, x: 38, y: 52 },
  { id: 'mcleod',    name: 'Niagara Phase 3 — McLeod Rd', type: 'Low-rise Towns',    units: '39',  proximity: 5, x: 46, y: 60 },
  { id: 'le-falls',  name: 'Le Falls — 7640 Kalar Rd',    type: 'Boutique Condo',    units: 'TBD', proximity: 6, x: 28, y: 46 },
  { id: 'lundys',    name: 'Niagara Lundy\u2019s Lane',   type: 'Mixed-use',         units: 'TBD', proximity: 5, x: 41, y: 44 },
  { id: 'rebstock',  name: 'Niagara Rebstock',            type: 'Freehold Towns',    units: 'TBD', proximity: 7, x: 52, y: 38 },
  { id: 'muskoka',   name: 'The Muskoka / Lone Pine',     type: 'Vacant Land Condo', units: '22',  proximity: '—', x: 78, y: 22, far: true, region: 'Georgian Bay' },
  { id: 'kleinburg', name: '8 Main Street, Kleinburg',    type: 'Luxury Estate Lot', units: '1',   proximity: '—', x: 82, y: 78, far: true, region: 'GTA' },
];

const DEMOGRAPHICS = [
  { trait: 'Household Income',     m5v: '$150K – $300K+',                stk: '$120K – $250K+' },
  { trait: 'Age Range',            m5v: '32 – 54',                       stk: '28 – 55' },
  { trait: 'Origin Market',        m5v: 'Greater Toronto Area',          stk: 'Urban professionals / tourists' },
  { trait: 'Lifestyle Orientation',m5v: 'Upscale dining, travel, fitness', stk: 'Upscale dining, events, celebrations' },
  { trait: 'Purchase Intent',      m5v: 'Primary residence + investment',stk: 'Special occasions + regular dining' },
  { trait: 'Decision Profile',     m5v: 'High-consideration, brand-aware',stk: 'Experience-driven, value-conscious' },
];

const MEDIA_VALUE = [
  { item: 'Dedicated IG feed post',          audience: '232K audience',        low: 2500,  high: 5000,  basis: 'HypeAuditor 2024, macro-influencer tier' },
  { item: 'IG Story set (5-frame sequence)', audience: 'Organic + event',      low: 800,   high: 1500,  basis: 'Creator IQ benchmark, real estate vertical' },
  { item: 'TikTok dedicated video',          audience: '70K audience',         low: 1000,  high: 3000,  basis: 'Influencer Marketing Hub TikTok rate guide' },
  { item: 'Email blast',                     audience: '50K+ buyer database',  low: 1500,  high: 4000,  basis: 'Klaviyo B2C, $30-80 CPM verified list' },
  { item: 'Event co-brand mention',          audience: 'On-site, 100 guests',  low: 2000,  high: 3500,  basis: 'Industry hospitality co-sponsorship' },
];

const M5V_DELIVERS = [
  { item: 'Dedicated IG feed post featuring STK',         freq: '2× per month',     value: '$5,000 – $10,000' },
  { item: 'IG Stories featuring STK (event + organic)',   freq: '4× per month',     value: '$3,200 – $6,000' },
  { item: 'TikTok featuring STK event content',           freq: '1× per month',     value: '$1,000 – $3,000' },
  { item: 'Email blast to M5V buyer database',            freq: '1× per month',     value: '$1,500 – $4,000' },
  { item: 'Event co-branding — closings & launches',     freq: 'Per event',         value: '$2,000 – $3,500' },
  { item: 'STK logo on all Niagara event collateral',     freq: 'All events',       value: 'Included' },
  { item: 'STK callout in all M5V Niagara Reels',         freq: 'Ongoing',          value: 'Included' },
  { item: 'Buyer community intro — Secret Word program',  freq: 'Ongoing',          value: 'Trackable' },
];

const STK_DELIVERS = [
  'Designation as M5V\u2019s Official Event Venue in Niagara',
  'Preferred pricing on all private event bookings (15-20% off F&B; minimums)',
  'Dedicated event liaison for all M5V bookings',
  'First right of refusal on all M5V Niagara events (12-month rolling)',
  'Customized menu packages for closing events and buyer dinners',
  'Reserved sections / buy-out options at preferred partner rate',
  'Participation in the M5V Secret Word referral program',
  'Co-marketing assets featured in STK\u2019s own digital and venue channels',
];

const EVENTS = [
  { name: 'Niagara Phase 3 Closing Event',  when: 'Mid-June 2026', guests: '100',  budget: '$100,000', objective: '20-30 unit APS closings' },
  { name: 'STK Niagara Launch Dinner',      when: 'Q3 2026',       guests: '40-60', budget: '$25,000',  objective: 'VIP buyer community intro' },
  { name: 'Le Falls Lender Presentation',   when: 'Q3 2026',       guests: '15-20', budget: '$8,000',   objective: 'Investor briefing' },
  { name: 'Niagara Phase 4 Preview Event',  when: 'Q4 2026',       guests: '75-100',budget: '$50,000',  objective: 'Phase 4 pre-sales launch' },
  { name: 'Annual Buyer Appreciation Night',when: 'Dec 2026',      guests: '150+',  budget: '$75,000',  objective: 'Retention + referrals' },
  { name: '7 Community Tour Event',         when: '2027 (ongoing)',guests: 'TBD',   budget: 'TBD',      objective: 'Regional brand consolidation' },
];

const ASK = [
  'Official designation: M5V\u2019s Preferred Event Venue, Niagara',
  '15-20% reduction on F&B; minimums for all M5V-booked events',
  'A dedicated event contact at STK for direct booking access',
  'Participation in the M5V Secret Word program (defined welcome offering)',
  'First right of refusal on all M5V Niagara events, rolling 12-month basis',
  'STK co-branding featured in M5V event materials and promotional content',
];

Object.assign(window, {
  STATS, ADVANTAGES, PROPERTIES, DEMOGRAPHICS, MEDIA_VALUE,
  M5V_DELIVERS, STK_DELIVERS, EVENTS, ASK,
});
