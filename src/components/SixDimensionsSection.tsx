import React from 'react';
import { 
  Zap, 
  Waves, 
  Wifi, 
  Droplets, 
  Lock, 
  Car, 
  Check, 
  X, 
  ShieldAlert, 
  ShieldCheck, 
  Building2,
  Compass
} from 'lucide-react';

export const SixDimensionsSection: React.FC = () => {
  const dimensions = [
    {
      icon: Zap,
      title: 'Electricity Reliability',
      whatWeMeasure: 'Continuous daily grid supply (Band A vs B/C), transformer loading, and estate generator curfew schedules.',
      whyAgentsHideIt: 'Agents claim "24/7 power" without revealing the ₦150k monthly generator levy or 4-hour afternoon blackouts.',
      measurementTool: 'Feeder substation logs, smart current telemetry & resident utility audit.',
      accent: 'border-amber-200 text-amber-600 bg-amber-50',
    },
    {
      icon: Waves,
      title: 'Flood Risk & Drainage',
      whatWeMeasure: 'Street elevation, drainage gutter maintenance, retention time during heavy rain, and historical watermarks.',
      whyAgentsHideIt: 'Inspections are arranged in dry December. By July, the access road turns into a lake that swallows car exhausts.',
      measurementTool: 'LiDAR topographic elevation, physical silt depth probes & local dry/rainy photographic records.',
      accent: 'border-blue-200 text-blue-600 bg-blue-50',
    },
    {
      icon: Wifi,
      title: 'Mobile Network & 5G',
      whatWeMeasure: 'Real-world download/upload speeds on MTN, Airtel, and Glo, plus Starlink line of sight and FTTH fiber access.',
      whyAgentsHideIt: 'A modern flat with thick concrete can have zero mobile reception inside the bedroom, killing your remote work.',
      measurementTool: 'Multi-carrier field signal analyzers and fiber duct infrastructure verification.',
      accent: 'border-emerald-200 text-emerald-600 bg-emerald-50',
    },
    {
      icon: Droplets,
      title: 'Water Reliability & Purity',
      whatWeMeasure: 'Borehole TDS salinity, sulfur odor, heavy metal contamination, and active filtration equipment status.',
      whyAgentsHideIt: 'Brackish coastal water ruins bathroom tiles, corrodes plumbing, and costs thousands in weekly tanker deliveries.',
      measurementTool: 'Calibrated digital TDS probes, pH titration kits & treatment media inspection.',
      accent: 'border-cyan-200 text-cyan-600 bg-cyan-50',
    },
    {
      icon: Lock,
      title: 'Safety & Neighbourhood Security',
      whatWeMeasure: 'Estate gate strictness, visitor verification protocols, night patrol rosters, and historical incident rates.',
      whyAgentsHideIt: 'Gated entrance claims often mask broken barriers, absent night guards, and poorly lit boundary fences.',
      measurementTool: 'Surprise nighttime checkpoint audits and police/CDA liaison records.',
      accent: 'border-indigo-200 text-indigo-600 bg-indigo-50',
    },
    {
      icon: Car,
      title: 'Commute & Traffic Reality',
      whatWeMeasure: 'Actual morning and evening peak transit times, choke point bottlenecks, and wet-weather delay multiples.',
      whyAgentsHideIt: 'The classic "5 mins to Lekki-Ikoyi Link Bridge" agent pitch is routinely a 60-minute bumper-to-bumper nightmare.',
      measurementTool: 'GPS rush-hour drive tracking across 30 days and intersection speed monitoring.',
      accent: 'border-orange-200 text-orange-600 bg-orange-50',
    },
  ];

  return (
    <section id="six-dimensions" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#059669] uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#10B981]" />
            <span>The Six Ground-Truth Vectors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#08182B] tracking-tight">
            We don't take the agent's word for it. We measure the ground reality.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            A home is only as good as the infrastructure surrounding it. VerifiRent tests every property against the six realities that determine whether you love living there or regret signing.
          </p>
        </div>

        {/* 6 Dimensions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {dimensions.map((dim, idx) => {
            const Icon = dim.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50/70 rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-[#10B981]/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs ${dim.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">VECTOR 0{idx + 1}</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#08182B] group-hover:text-[#065F46] transition-colors">
                      {dim.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {dim.whatWeMeasure}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/80 space-y-2">
                    <div className="text-xs">
                      <span className="font-semibold text-rose-700">What agents conceal: </span>
                      <span className="text-slate-600">{dim.whyAgentsHideIt}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-medium">Verification Protocol:</span>
                  <span className="font-mono text-emerald-700 font-semibold">{dim.measurementTool.split(',')[0]}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contrast Table: Old Listing Sites vs. VerifiRent Intelligence Platform */}
        <div className="bg-[#08182B] rounded-3xl text-white p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono text-[#34D399] uppercase tracking-widest block mb-1">
              The Fundamental Difference
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Why we're not another listing site.
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Listing portals make money by helping agents advertise houses. We exist exclusively to protect the renter with unvarnished, independent ground truth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* The Listing Site Model */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold">
                  <X className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Traditional Property Portals</h4>
                  <p className="text-xs text-slate-400">Agent-driven advertisement models</p>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Curated wide-angle lens photos hiding damp walls, cracked tiles, and surrounding gutters.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Listing descriptions written to flatter, promising "serene executive bliss" next to a club.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>No data on estate power schedules, rainwater drainage clearance, or mobile reception.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Incentivized by transaction commissions and agent subscriptions to close the deal.</span>
                </li>
              </ul>
            </div>

            {/* The VerifiRent Model */}
            <div className="bg-[#050E1A] rounded-2xl p-6 border border-emerald-500/40 space-y-4 shadow-lg shadow-emerald-950/40">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-[#34D399] flex items-center justify-center font-bold">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">The VerifiRent Platform</h4>
                  <p className="text-xs text-emerald-400">Independent neighbourhood intelligence</p>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                  <span>Objective 0–100 Livability Score verified with physical tools (TDS meters, GPS logs, LiDAR).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                  <span>Vetted physical inspections that clearly separate what was claimed from what is physically true.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                  <span>Landlord and property deed validation to prevent double-letting scams and caution fee traps.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                  <span>100% independent. We never accept developer kickbacks or undisclosed agent pay-offs.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
