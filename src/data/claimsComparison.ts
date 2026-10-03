export interface ClaimComparison {
  id: string;
  category: 'Electricity' | 'Flooding' | 'Water' | 'Commute' | 'Legal/Title' | 'Security';
  agentClaim: string;
  agentClaimDetail: string;
  confirmedReality: string;
  inspectorEvidence: string;
  status: 'debunked' | 'partially-true' | 'verified-true';
  financialImpact: string;
  propertySnippet: string;
  location: string;
}

export const REAL_RENTAL_CLAIMS: ClaimComparison[] = [
  {
    id: 'claim-1',
    category: 'Electricity',
    agentClaim: '"24/7 uninterrupted light, no need to touch your gen!"',
    agentClaimDetail: 'Promised central 24-hr diesel generator included in standard service charge.',
    confirmedReality: 'Estate generator runs 7:00 PM – 6:00 AM only (11 hours max). Night-only policy.',
    inspectorEvidence: 'Audited estate facility schedule logbook & diesel meter. Monthly supplemental fuel levy of ₦140,000 required to run day generators.',
    status: 'debunked',
    financialImpact: '₦1,680,000/yr unexpected generator fuel burden',
    propertySnippet: '3-Bed Serviced Apartment, Agungi, Lekki',
    location: 'Agungi, Lekki Corridor',
  },
  {
    id: 'claim-2',
    category: 'Flooding',
    agentClaim: '"Never ever flooded since 1990! Dry land pure sandfill."',
    agentClaimDetail: 'Agent showed photos taken in January during dry season.',
    confirmedReality: 'High watermark tide stains found 18 inches up perimeter fence; street drainage blocked.',
    inspectorEvidence: 'Physical inspector photographed visible watermarks, moss growth on exterior foundation, and spoke to neighboring shopkeeper who confirmed access road impassable for sedans each June/July.',
    status: 'debunked',
    financialImpact: '₦450,000 car suspension damage + potential indoor property loss',
    propertySnippet: '4-Bed Semi-Detached Duplex, Ikate Elegushi',
    location: 'Ikate, Lekki',
  },
  {
    id: 'claim-3',
    category: 'Water',
    agentClaim: '"Clean pure treated borehole water. Drinkable from kitchen tap."',
    agentClaimDetail: 'Listing promised functional industrial reverse osmosis plant.',
    confirmedReality: 'Salinity TDS reading 710 ppm (brackish); treatment plant non-functional since 2024.',
    inspectorEvidence: 'Digital TDS meter read 710 ppm (WHO potable ceiling is 300 ppm). Salt membrane filters were disconnected. Brown sulfur deposits found inside toilet water cisterns.',
    status: 'debunked',
    financialImpact: '₦360,000/yr dedicated water filtration service or tanker haulage',
    propertySnippet: '2-Bed Modern Flat, Orchid Road, Lekki',
    location: 'Orchid Road, Chevron Tollgate',
  },
  {
    id: 'claim-4',
    category: 'Commute',
    agentClaim: '"Just 10 minutes to Victoria Island and Lekki Phase 1."',
    agentClaimDetail: 'Claimed "straight express run with zero traffic bottlenecks".',
    confirmedReality: 'Actual commute time is 78 minutes between 7:15 AM and 9:15 AM on weekdays.',
    inspectorEvidence: 'VerifiRent GPS rush-hour telemetry tracked 5 consecutive weekday mornings. Abraham Adesanya junction and 2nd Tollgate add an average of 62 minutes delay.',
    status: 'debunked',
    financialImpact: '320+ hours lost per year trapped in gridlock',
    propertySnippet: '3-Bed Terrace, Badore, Ajah',
    location: 'Badore, Ajah',
  },
  {
    id: 'claim-5',
    category: 'Legal/Title',
    agentClaim: '"Direct from the original Landlord. Pay caution deposit today to lock it."',
    agentClaimDetail: 'Agent claimed full power of attorney from owner living in London.',
    confirmedReality: 'Agent had expired informal mandate; property was simultaneously listed by 4 competing agents.',
    inspectorEvidence: 'VerifiRent legal team contacted the verified family solicitor in Ikeja. The house was already under an active lease deposit hold with another family. Caution fee would have been trapped.',
    status: 'debunked',
    financialImpact: '₦3,500,000 saved from double-letting advance fee fraud',
    propertySnippet: 'Detached 5-Bed House, Magodo Phase 2',
    location: 'Magodo Phase 2, Mainland',
  },
  {
    id: 'claim-6',
    category: 'Security',
    agentClaim: '"Ultra-secure gated community with 24/7 armed patrol."',
    agentClaimDetail: 'Stated uniform guards at dual gates with biometric scanner.',
    confirmedReality: 'Single manned gate with broken boom barrier; night patrol ceased 6 months ago.',
    inspectorEvidence: 'Physical inspector arrived at 10:30 PM unannounced. Gate was left open with no attendant on duty; broken boom barrier propped on concrete block.',
    status: 'debunked',
    financialImpact: 'Security risk & requirement for private compound CCTV upgrade (₦250k)',
    propertySnippet: 'Self-Contained Mini Flat, Gbagada Phase 1',
    location: 'Gbagada Phase 1',
  },
];
