import React from 'react';
import { MapPin, Zap, Waves, Car, ArrowRight, ShieldCheck } from 'lucide-react';

interface NeighbourhoodsProps {
  onSelectNeighbourhood: (id: string) => void;
  onJoinWaitlist: () => void;
}

export const Neighbourhoods: React.FC<NeighbourhoodsProps> = ({ onSelectNeighbourhood, onJoinWaitlist }) => {
  const neighbourhoods = [
    {
      id: 'lekki-1',
      name: 'Lekki Phase 1',
      region: 'Island District',
      livabilityScore: 76,
      scoreColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-500/40',
      avg2Bed: '₦6.5M/yr',
      powerReality: '16.5 hrs grid; estate gen schedule essential',
      floodRisk: 'Moderate; inner Admiralty drains slow in July',
      commuteVI: '25 - 55 mins rush hour',
    },
    {
      id: 'yaba-tech',
      name: 'Yaba (Sabo Corridor)',
      region: 'Mainland District',
      livabilityScore: 82,
      scoreColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-500/40',
      avg2Bed: '₦3.5M/yr',
      powerReality: '17.8 hrs grid; Akoka 33kV dedicated feeder',
      floodRisk: 'Low; elevated natural continental ground',
      commuteVI: '20 - 35 mins via 3rd Mainland Bridge',
    },
    {
      id: 'ikeja-gra',
      name: 'Ikeja GRA',
      region: 'Mainland Central',
      livabilityScore: 89,
      scoreColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-500/40',
      avg2Bed: '₦7.5M/yr',
      powerReality: '20.5 hrs grid; Band A priority distribution',
      floodRisk: 'Zero flood risk; deep covered concrete ducts',
      commuteVI: '40 - 70 mins peak; 10 mins to airport',
    },
    {
      id: 'ajah-badore',
      name: 'Ajah (Badore Axis)',
      region: 'Island East',
      livabilityScore: 61,
      scoreColor: 'text-amber-400 bg-amber-950/60 border-amber-500/40',
      avg2Bed: '₦2.8M/yr',
      powerReality: '11.2 hrs grid; heavy personal fuel spend',
      floodRisk: 'High; unpaved secondary roads log water',
      commuteVI: '85 - 110 mins morning choke points',
    },
    {
      id: 'surulere-bode',
      name: 'Surulere (Bode Thomas)',
      region: 'Mainland District',
      livabilityScore: 78,
      scoreColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-500/40',
      avg2Bed: '₦3.2M/yr',
      powerReality: '15.5 hrs grid; active local transformer watch',
      floodRisk: 'Moderate around Akerele during torrential rain',
      commuteVI: '30 - 45 mins via Eko Bridge',
    },
    {
      id: 'magodo-2',
      name: 'Magodo Phase 2',
      region: 'Mainland North',
      livabilityScore: 84,
      scoreColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-500/40',
      avg2Bed: '₦5.0M/yr',
      powerReality: '18.0 hrs grid; strict gated CDA security',
      floodRisk: 'Low on ridges; valley areas require checks',
      commuteVI: '50 - 80 mins; quick to Alausa secretariat',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#059669] uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-[#10B981]" />
              <span>Neighbourhood Ground Truth</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#08182B] tracking-tight">
              Every district has its trade-offs. We tell you the ones agents omit.
            </h2>
          </div>

          <button
            onClick={onJoinWaitlist}
            className="bg-[#08182B] hover:bg-[#0D2138] text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition-all flex items-center gap-2 self-start md:self-auto cursor-pointer border border-slate-700 shadow-sm"
          >
            <span>Request New Area Audit</span>
            <ArrowRight className="w-4 h-4 text-[#34D399]" />
          </button>
        </div>

        {/* Neighbourhood Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {neighbourhoods.map((area) => (
            <div
              key={area.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-[#10B981] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">
                      {area.region}
                    </span>
                    <h3 className="text-xl font-bold text-[#08182B] tracking-tight mt-0.5">
                      {area.name}
                    </h3>
                  </div>

                  <div className={`px-3 py-1.5 rounded-xl border text-center font-mono ${area.scoreColor}`}>
                    <span className="text-lg font-black leading-none block">{area.livabilityScore}</span>
                    <span className="text-[9px] uppercase tracking-wider opacity-80">Score</span>
                  </div>
                </div>

                <div className="text-xs text-slate-500 pb-2 border-b border-slate-100 flex items-center justify-between">
                  <span>Median 2-Bed Rent:</span>
                  <span className="font-bold text-slate-800 font-mono">{area.avg2Bed}</span>
                </div>

                {/* Micro indicators */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600">
                      <strong className="text-slate-800">Power:</strong> {area.powerReality}
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <Waves className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600">
                      <strong className="text-slate-800">Flood:</strong> {area.floodRisk}
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <Car className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600">
                      <strong className="text-slate-800">VI Commute:</strong> {area.commuteVI}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onSelectNeighbourhood(area.id)}
                  className="w-full text-left text-xs font-bold text-[#065F46] hover:text-[#047857] flex items-center justify-between group cursor-pointer"
                >
                  <span>Inspect 6 Verified Dimensions</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
