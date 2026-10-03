export interface MetricDimension {
  id: string;
  name: string;
  score: number; // 0-100
  status: 'excellent' | 'good' | 'caution' | 'critical';
  headline: string;
  verifiedData: {
    label: string;
    value: string;
    verifiedMethod: string;
  }[];
  inspectorQuote: string;
}

export interface NeighbourhoodReport {
  id: string;
  name: string;
  axis: string;
  areaType: string;
  overallScore: number;
  badgeText: string;
  avgRent2Bed: string;
  lastAudited: string;
  verifiedInspectorsCount: number;
  aiExplanation: string;
  dimensions: {
    electricity: MetricDimension;
    flood: MetricDimension;
    network: MetricDimension;
    water: MetricDimension;
    safety: MetricDimension;
    commute: MetricDimension;
  };
}

export const SAMPLE_NEIGHBOURHOODS: NeighbourhoodReport[] = [
  {
    id: 'lekki-1',
    name: 'Lekki Phase 1 (Admiralty Axis)',
    axis: 'Island District / Eti-Osa',
    areaType: 'High-Density Residential & Commercial',
    overallScore: 76,
    badgeText: 'Moderate Risk Profile',
    avgRent2Bed: '₦5.5M - ₦8.5M / yr',
    lastAudited: '4 days ago by 3 verified field surveyors',
    verifiedInspectorsCount: 14,
    aiExplanation:
      'Lekki Phase 1 provides top-tier commercial proximity and security, but electricity varies drastically between self-serviced compounds and estate micro-grids. Key caution: Admiralty Way access roads flood during peak July rains, adding up to 45 minutes to the Lekki Tollgate choke point.',
    dimensions: {
      electricity: {
        id: 'electricity',
        name: 'Electricity Reliability',
        score: 72,
        status: 'good',
        headline: '16.5 hrs grid uptime + private estate generator schedules',
        verifiedData: [
          { label: 'Band A Grid Supply', value: '16.5 hrs/day average', verifiedMethod: 'EKEDC transformer logs & smart telemetry' },
          { label: 'Estate Generator Surcharge', value: '₦85,000 - ₦140,000 / mo', verifiedMethod: 'Estate association invoice audit' },
          { label: 'Transformer Load Ratio', value: '88% peak load', verifiedMethod: 'Field engineer inspection' },
        ],
        inspectorQuote: 'Compounds without 24-hr facility management experience 4-hour gaps between 1pm and 5pm.',
      },
      flood: {
        id: 'flood',
        name: 'Flood Risk & Drainage',
        score: 58,
        status: 'caution',
        headline: 'Surface waterlogging on secondary roads during heavy rain',
        verifiedData: [
          { label: 'Elevation Above Lagoon', value: '2.1m average', verifiedMethod: 'Topographic LiDAR mapping' },
          { label: 'Secondary Gutter Depth', value: '45cm (30% silted)', verifiedMethod: 'Physical surveyor tape measurement' },
          { label: 'Rainy Season Clearance', value: '4 - 6 hrs drainage delay', verifiedMethod: 'Resident logbook history' },
        ],
        inspectorQuote: 'Avoid ground floor apartments on Omorinre Johnson and inner Fola Osibo without elevated plinths.',
      },
      network: {
        id: 'network',
        name: 'Mobile Network & Internet',
        score: 94,
        status: 'excellent',
        headline: 'Full 5G coverage across MTN & Airtel; high fiber density',
        verifiedData: [
          { label: 'MTN 5G Speed', value: '240 Mbps down / 45 Mbps up', verifiedMethod: 'Speedtest Ookla field verification' },
          { label: 'Fiber To The Home (FTTH)', value: 'ipNX, FibreOne, Starlink', verifiedMethod: 'Physical cable connection check' },
          { label: 'Airtel 4G+ Latency', value: '28ms ping', verifiedMethod: 'Multi-sim cellular telemetry' },
        ],
        inspectorQuote: 'Ideal for tech remote workers. Direct fiber optic conduits in 92% of inspected apartments.',
      },
      water: {
        id: 'water',
        name: 'Water Reliability & Purity',
        score: 64,
        status: 'caution',
        headline: 'Heavy reliance on private reverse-osmosis filtration',
        verifiedData: [
          { label: 'Total Dissolved Solids (TDS)', value: '380 ppm (Pre-filter)', verifiedMethod: 'Calibrated digital TDS meter' },
          { label: 'Salinity Index', value: 'Mild brackish trace', verifiedMethod: 'Chemical reagent drop test' },
          { label: 'Industrial Water Delivery', value: '₦18,000 per 10k litres', verifiedMethod: 'Water tanker receipt audit' },
        ],
        inspectorQuote: 'Boreholes without secondary multi-stage carbon filters cause bathroom fixture staining within 3 months.',
      },
      safety: {
        id: 'safety',
        name: 'Safety & Security',
        score: 86,
        status: 'excellent',
        headline: 'Gated streets, estate patrol vehicles & CCTV coverage',
        verifiedData: [
          { label: 'Manned Security Gates', value: '24/7 armed private security', verifiedMethod: 'Physical checkpoint audit' },
          { label: 'Access Code Enforcement', value: 'Strict resident visitor code', verifiedMethod: 'Unannounced gate test entry' },
          { label: 'Night Streetlighting', value: '84% functional solar poles', verifiedMethod: 'Nighttime drone/visual survey' },
        ],
        inspectorQuote: 'Very low violent crime index; occasional pedestrian phone snatching along major express bus stops.',
      },
      commute: {
        id: 'commute',
        name: 'Commute & Traffic Reality',
        score: 65,
        status: 'caution',
        headline: 'Heavy bottlenecks at Lekki-Ikoyi Link Bridge & 1st Roundabout',
        verifiedData: [
          { label: 'Peak Morning VI Transit', value: '45 - 65 mins (7:30 - 9:00 AM)', verifiedMethod: 'GPS speed logging over 30 days' },
          { label: 'Off-Peak VI Transit', value: '12 - 18 mins', verifiedMethod: 'Average midday timing' },
          { label: 'Link Bridge Toll Cost', value: '₦500 per crossing', verifiedMethod: 'Toll tariff database' },
        ],
        inspectorQuote: 'Agent claimed 5 minutes to Victoria Island. Actual 8am morning rush takes 52 minutes on average.',
      },
    },
  },
  {
    id: 'yaba-tech',
    name: 'Yaba (Sabo / Commercial Ave)',
    axis: 'Mainland District',
    areaType: 'Tech Hub & Student / Professional Haven',
    overallScore: 82,
    badgeText: 'High Livability & Mobility',
    avgRent2Bed: '₦2.8M - ₦4.2M / yr',
    lastAudited: '2 days ago by 2 verified field surveyors',
    verifiedInspectorsCount: 9,
    aiExplanation:
      'Yaba excels in central connectivity, fiber internet density, and water quality relative to the Island. Mainland grid power through Akoka substations is above regional median. Flooding is confined to low-lying drainage gutters near Herbert Macaulay during torrential downpours.',
    dimensions: {
      electricity: {
        id: 'electricity',
        name: 'Electricity Reliability',
        score: 79,
        status: 'good',
        headline: '17.8 hrs grid uptime; stable feeder line distribution',
        verifiedData: [
          { label: 'Substation Connection', value: 'Akoka 33kV dedicated feeder', verifiedMethod: 'IKEDC distribution log' },
          { label: 'Unscheduled Outages', value: '1.2 per week', verifiedMethod: 'Resident monitoring network' },
          { label: 'Estate Generator Depend.', value: 'Medium (6 - 8 hrs backup needed)', verifiedMethod: 'Inspector fuel survey' },
        ],
        inspectorQuote: 'Significantly more reliable grid hours than Ajah or Sangotedo; lower diesel burden for residents.',
      },
      flood: {
        id: 'flood',
        name: 'Flood Risk & Drainage',
        score: 81,
        status: 'good',
        headline: 'Naturally elevated continental ground; fast rainwater run-off',
        verifiedData: [
          { label: 'Elevation Above Sea Level', value: '8.4m', verifiedMethod: 'Geographic survey datum' },
          { label: 'Main Drainage Canal', value: 'Open concrete conduits maintained', verifiedMethod: 'Field visual check' },
          { label: 'Flash Flood Receding Time', value: 'Under 45 minutes', verifiedMethod: 'Post-rain on-site measurement' },
        ],
        inspectorQuote: 'Zero structural water entry in 95% of audited properties during the 2025 rainy season.',
      },
      network: {
        id: 'network',
        name: 'Mobile Network & Internet',
        score: 96,
        status: 'excellent',
        headline: 'Highest fiber density in Mainland District; low latency 5G',
        verifiedData: [
          { label: 'MTN & Airtel 5G', value: 'Excellent 300+ Mbps', verifiedMethod: 'Ookla field benchmarks' },
          { label: 'MainOne / ipNX Fiber', value: 'Underground cables on main roads', verifiedMethod: 'Infrastructure route map' },
          { label: 'Latency to Cloud Servers', value: '22ms local ping', verifiedMethod: 'Network ping tests' },
        ],
        inspectorQuote: 'The tech capital for a reason. Remote workers rarely need secondary cellular failovers.',
      },
      water: {
        id: 'water',
        name: 'Water Reliability & Purity',
        score: 84,
        status: 'excellent',
        headline: 'Fresh water aquifer; zero coastal salinity issues',
        verifiedData: [
          { label: 'TDS Reading', value: '120 ppm (Pure freshwater range)', verifiedMethod: 'Digital TDS testing probe' },
          { label: 'pH Level', value: '7.1 (Balanced neutral)', verifiedMethod: 'Digital pH meter' },
          { label: 'Water Table Depth', value: '35m deep borehole standard', verifiedMethod: 'Drilling log verification' },
        ],
        inspectorQuote: 'Clear, odorless water directly from standard boreholes with basic sediment filtration.',
      },
      safety: {
        id: 'safety',
        name: 'Safety & Security',
        score: 75,
        status: 'good',
        headline: 'Active commercial streets; localized street gates close at 10 PM',
        verifiedData: [
          { label: 'Community Development Watch', value: 'Active neighborhood guards', verifiedMethod: 'CDA roster verification' },
          { label: 'Street Activity at Night', value: 'Vibrant till 11:30 PM', verifiedMethod: 'Nighttime foot traffic review' },
          { label: 'Police Division Proximity', value: '800m (Sabo Police Station)', verifiedMethod: 'Geospatial mapping' },
        ],
        inspectorQuote: 'Safe along major avenues; stick to well-lit streets late at night around Tejuosho/Rail line.',
      },
      commute: {
        id: 'commute',
        name: 'Commute & Traffic Reality',
        score: 78,
        status: 'good',
        headline: 'Central pivot: quick access to 3rd Mainland Bridge & Ikeja',
        verifiedData: [
          { label: 'Transit to Island via 3MB', value: '18 - 30 mins non-rush', verifiedMethod: 'Historical GPS logs' },
          { label: 'Transit to Ikeja Alausa', value: '25 - 40 mins', verifiedMethod: 'Route testing' },
          { label: 'Red Line Rail Station', value: 'Yaba Terminal in 500m', verifiedMethod: 'Transit proximity audit' },
        ],
        inspectorQuote: 'Exceptional mobility; the new train station offers traffic-free commute to Ikeja and Agbado.',
      },
    },
  },
  {
    id: 'ikeja-gra',
    name: 'Ikeja GRA (Isaac John Corridor)',
    axis: 'Mainland District / Capital District',
    areaType: 'Prime Low-Density Residential & Diplomatic',
    overallScore: 89,
    badgeText: 'Premium Livability Tier',
    avgRent2Bed: '₦6.0M - ₦10.0M / yr',
    lastAudited: 'Yesterday by Senior Surveyor Kolawole',
    verifiedInspectorsCount: 11,
    aiExplanation:
      'Ikeja GRA delivers the highest stability index on the Mainland. Direct power grid priority from Ikeja Electric headquarters, pristine paved roads with deep subterranean drainage, and zero coastal salinity. Airport proximity creates minor acoustic overhead, and evening restaurant traffic can slow Isaac John.',
    dimensions: {
      electricity: {
        id: 'electricity',
        name: 'Electricity Reliability',
        score: 91,
        status: 'excellent',
        headline: '20.5 hrs daily grid power; Band A priority feeder',
        verifiedData: [
          { label: 'Feeder Priority', value: 'Government House / Capital Grid', verifiedMethod: 'IKEDC distribution logs' },
          { label: 'Transformer Health', value: 'Redundant dual-substation feed', verifiedMethod: 'Substation telemetry' },
          { label: 'Monthly Gen Fuel Spend', value: 'Lowest  (₦35,000 avg)', verifiedMethod: 'Resident expense audit' },
        ],
        inspectorQuote: 'One of the rare places  where residents leave air conditioners on the national grid overnight.',
      },
      flood: {
        id: 'flood',
        name: 'Flood Risk & Drainage',
        score: 93,
        status: 'excellent',
        headline: 'Engineered closed subterranean drains; zero flood history',
        verifiedData: [
          { label: 'Elevation', value: '38m above sea level (Highest ridge)', verifiedMethod: 'Altimeter GPS reading' },
          { label: 'Drainage Infrastructure', value: 'Reinforced concrete covered ducts', verifiedMethod: 'Civil engineering inspection' },
          { label: 'Post-Storm Puddle Clearance', value: 'Immediate runoff (< 10 mins)', verifiedMethod: 'Rainy season field log' },
        ],
        inspectorQuote: 'Completely immune to flood waters. Sedans and low sports cars face zero hazard here.',
      },
      network: {
        id: 'network',
        name: 'Mobile Network & Internet',
        score: 90,
        status: 'excellent',
        headline: 'Complete coverage from all 4 telcos + Starlink line of sight',
        verifiedData: [
          { label: 'Airtel 5G & MTN 5G', value: 'Stable > 200 Mbps', verifiedMethod: 'Field cellular testing' },
          { label: 'Tree Canopy Interference', value: 'Mild in heavily wooded cul-de-sacs', verifiedMethod: 'Spectrum analyzer test' },
          { label: 'Starlink Obstruction Test', value: 'Zero blockage on 2-story roofs', verifiedMethod: 'Dishy diagnostic readout' },
        ],
        inspectorQuote: 'Very stable mobile signals. Heavy tree canopies require dish placement above roof ridge.',
      },
      water: {
        id: 'water',
        name: 'Water Reliability & Purity',
        score: 88,
        status: 'excellent',
        headline: 'Natural deep aquifer; potable after standard filtration',
        verifiedData: [
          { label: 'TDS Level', value: '95 ppm (Optimal drinking grade)', verifiedMethod: 'Laboratory water probe' },
          { label: 'Heavy Metals Test', value: 'Lead & Iron undetected', verifiedMethod: 'Spectrometry strip test' },
          { label: 'Pressure & Availability', value: 'Continuous 24/7 borehole yield', verifiedMethod: 'Pumping rate assessment' },
        ],
        inspectorQuote: 'Crystal clear water with no rust or odor. Filters last 3x longer than on Lekki corridor.',
      },
      safety: {
        id: 'safety',
        name: 'Safety & Security',
        score: 92,
        status: 'excellent',
        headline: 'Elite security presence, police patrol bases, CCTV streets',
        verifiedData: [
          { label: 'Police Station Response', value: 'Under 4 minutes', verifiedMethod: 'Emergency proximity benchmark' },
          { label: 'Perimeter Security', value: 'CCTV & regular armed mobile patrols', verifiedMethod: 'Night security audit' },
          { label: 'Diplomatic & State Escort Index', value: 'High surveillance density', verifiedMethod: 'Civic safety registry' },
        ],
        inspectorQuote: 'The safest mainland neighbourhood. You can jog safely at 6:00 AM or 9:30 PM.',
      },
      commute: {
        id: 'commute',
        name: 'Commute & Traffic Reality',
        score: 80,
        status: 'good',
        headline: '10 mins to MMA Airport; evening lounge traffic on Isaac John',
        verifiedData: [
          { label: 'MMA International Airport', value: '8 - 14 minutes', verifiedMethod: 'Recorded taxi routes' },
          { label: 'To Island via 3MB', value: '35 - 55 mins during morning rush', verifiedMethod: 'Traffic data logging' },
          { label: 'Local Commercial Choke', value: 'Isaac John corridor busy 7pm - 10pm', verifiedMethod: 'Traffic sensor count' },
        ],
        inspectorQuote: 'If your life revolves around the mainland, airport, or Alausa, this is the gold standard.',
      },
    },
  },
  {
    id: 'ajah-badore',
    name: 'Ajah (Badore / Abraham Adesanya)',
    axis: 'Island East / Ibeju Corridor',
    areaType: 'Fast-Growing Residential Suburb',
    overallScore: 61,
    badgeText: 'High Verification Needed',
    avgRent2Bed: '₦2.2M - ₦3.5M / yr',
    lastAudited: '3 days ago by 3 verified field surveyors',
    verifiedInspectorsCount: 8,
    aiExplanation:
      'Ajah offers newer builds and significantly lower rent than Lekki Phase 1, but severe trade-offs exist. The Ajah flyover and Jubilee bridge create major morning bottlenecks towards VI (up to 95 minutes). Saline water requires expensive filtration, and secondary drainage in interior Badore is unpaved.',
    dimensions: {
      electricity: {
        id: 'electricity',
        name: 'Electricity Reliability',
        score: 54,
        status: 'caution',
        headline: '11.2 hrs grid supply; heavy generator expenditure required',
        verifiedData: [
          { label: 'Grid Supply Average', value: '11.2 hrs/day', verifiedMethod: 'EKEDC local feeder logs' },
          { label: 'Estate Generator Cost', value: '₦110,000 - ₦180,000 / mo', verifiedMethod: 'Resident fuel logs' },
          { label: 'Low Voltage & Surges', value: 'Frequent (Stabilizer compulsory)', verifiedMethod: 'Voltage logger readout' },
        ],
        inspectorQuote: 'Do not move in without an inverter setup or budget for at least ₦120k monthly diesel.',
      },
      flood: {
        id: 'flood',
        name: 'Flood Risk & Drainage',
        score: 48,
        status: 'critical',
        headline: 'Severe waterlogging in unpaved access roads during July-Sept',
        verifiedData: [
          { label: 'Water Table Level', value: '0.9m below surface', verifiedMethod: 'Soil boring test' },
          { label: 'Road Infrastructure', value: 'Sandy unpaved interior streets', verifiedMethod: 'Surveyor road grade assessment' },
          { label: 'Flood Clearance Duration', value: 'Up to 3 days without sun', verifiedMethod: 'Rain gauge & water depth tracking' },
        ],
        inspectorQuote: 'Agents show properties during January dry season. By July, water reaches car tire rims on access paths.',
      },
      network: {
        id: 'network',
        name: 'Mobile Network & Internet',
        score: 82,
        status: 'good',
        headline: 'Strong MTN & Airtel 4G; Starlink unobstructed by tall buildings',
        verifiedData: [
          { label: 'MTN 4G+ Download', value: '75 Mbps average', verifiedMethod: 'Cellular field probe' },
          { label: 'Starlink Viability', value: '100% clear sky hemisphere', verifiedMethod: 'Satellite alignment test' },
          { label: 'Fiber Cable Access', value: 'Limited to main expressway', verifiedMethod: 'ISP coverage map check' },
        ],
        inspectorQuote: 'Starlink is the best bet here since FTTH fiber has not expanded into inner estates yet.',
      },
      water: {
        id: 'water',
        name: 'Water Reliability & Purity',
        score: 42,
        status: 'critical',
        headline: 'High salinity & iron content; specialized RO plants mandatory',
        verifiedData: [
          { label: 'TDS Salinity Score', value: '620 ppm (Salty / brackish)', verifiedMethod: 'Digital TDS meter' },
          { label: 'Iron Oxide Staining', value: 'Visible rust marks on sinks', verifiedMethod: 'Physical fixture check' },
          { label: 'Water Tanker Reliability', value: '₦14,000 / trip required', verifiedMethod: 'Vendor delivery history' },
        ],
        inspectorQuote: 'Agent claimed "water is treated". Inspector discovered the treatment plant had no media or salt bags.',
      },
      safety: {
        id: 'safety',
        name: 'Safety & Security',
        score: 72,
        status: 'good',
        headline: 'Gated private estates have private security; outer roads mixed',
        verifiedData: [
          { label: 'Estate Gate Security', value: 'Private security guards on duty', verifiedMethod: 'Physical gate inspection' },
          { label: 'Outer Road Pedestrian Safety', value: 'Caution advised past 9:00 PM', verifiedMethod: 'Local police report stats' },
          { label: 'Burglary Incident Rate', value: 'Moderate in isolated compounds', verifiedMethod: 'CDA crime log' },
        ],
        inspectorQuote: 'Stick to verified gated communities like Abraham Adesanya or Thomas Estate with active security.',
      },
      commute: {
        id: 'commute',
        name: 'Commute & Traffic Reality',
        score: 46,
        status: 'critical',
        headline: 'Heavy 90-minute bottleneck towards Victoria Island during rush hour',
        verifiedData: [
          { label: 'Peak 7:00 AM VI Commute', value: '85 - 115 minutes', verifiedMethod: 'GPS telemetry over 45 trips' },
          { label: 'Ajah Bridge Choke Point', value: '35 mins to clear 2km stretch', verifiedMethod: 'Intersection traffic monitor' },
          { label: 'Alternative Ferry Access', value: 'Badore Ferry Terminal available', verifiedMethod: 'State Waterways audit' },
        ],
        inspectorQuote: 'Agent claimed 20 minutes to Lekki Phase 1. Real peak commute is nearly an hour and a half.',
      },
    },
  },
];
