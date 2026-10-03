import React from 'react';
import { 
  Globe2, 
  Video, 
  ShieldCheck, 
  FileCheck, 
  Smartphone, 
  Plane, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Sparkles
} from 'lucide-react';

interface DiasporaSectionProps {
  onJoinWaitlist: () => void;
}

export const DiasporaSection: React.FC<DiasporaSectionProps> = ({ onJoinWaitlist }) => {
  const hubs = [
    { city: 'London, UK', flag: '🇬🇧', timeDiff: '+0h / -1h' },
    { city: 'Toronto, Canada', flag: '🇨🇦', timeDiff: '-5h' },
    { city: 'Houston, USA', flag: '🇺🇸', timeDiff: '-6h' },
    { city: 'Atlanta, USA', flag: '🇺🇸', timeDiff: '-5h' },
    { city: 'Manchester, UK', flag: '🇬🇧', timeDiff: '+0h / -1h' },
    { city: 'Dublin, Ireland', flag: '🇮🇪', timeDiff: '+0h / -1h' },
  ];

  const diasporaPerks = [
    {
      icon: Video,
      title: 'Full 4K Uncut Video Walkthrough',
      description: 'No misleading wide-angle tricks. Our inspector walks the entire street, tests the taps, flips breaker switches, and records uninterrupted 4K video.',
    },
    {
      icon: ShieldCheck,
      title: 'Independent Title & Landlord Vetting',
      description: 'We physically confirm the owner\'s identity and land registry records, safeguarding you from the rampant diaspora double-letting scams.',
    },
    {
      icon: FileCheck,
      title: 'Digital Forensic Inspection Report',
      description: 'Receive an exhaustive digital report covering dampness meters, water salinity, mobile reception, and compound generator schedule.',
    },
    {
      icon: Smartphone,
      title: 'Direct WhatsApp Concierge Updates',
      description: 'Get real-time updates and questions answered directly on WhatsApp before wiring any rental funds from abroad.',
    },
  ];

  return (
    <section id="diaspora" className="py-20 bg-[#08182B] text-white relative overflow-hidden border-b border-white/10">
      
      {/* Background glow and subtle globe grid */}
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#34D399] uppercase tracking-wider">
            <Globe2 className="w-4 h-4 text-[#10B981]" />
            <span>Built For Diaspora Nigerians</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Rent from 4,000 miles away. Without getting burnt.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Making big rental decisions from London, Houston, or Toronto usually means depending on photos from eager agents or relatives who can't inspect technical infrastructure. <strong className="text-white">VerifiRent acts as your unbiased eyes and ears on the ground.</strong>
          </p>
        </div>

        {/* Global Cities Connect Bar */}
        <div className="bg-[#050E1A] p-4 rounded-2xl border border-white/10 max-w-4xl mx-auto mb-12 flex flex-wrap items-center justify-around gap-4 text-xs">
          <span className="text-slate-400 font-mono uppercase text-[11px]">Connecting Diaspora Renters In:</span>
          {hubs.map((hub, idx) => (
            <div key={idx} className="flex items-center gap-1.5 font-medium text-slate-200">
              <span className="text-base">{hub.flag}</span>
              <span>{hub.city}</span>
            </div>
          ))}
        </div>

        {/* Main Content: The Diaspora Reality vs VerifiRent Concierge */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Column: Why Diaspora Get Targeted */}
          <div className="lg:col-span-5 bg-[#0D2138] p-6 sm:p-8 rounded-3xl border border-white/10 space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-mono text-rose-400 uppercase tracking-wider block">
                The Diaspora Dilemma
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Why remote renters pay the heaviest price 
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 space-y-1">
                <span className="font-semibold text-rose-300 block">The "Japa" & "Returnee" Markup:</span>
                <p className="text-slate-400">Agents identify foreign phone numbers and automatically inflate agency and legal fees by 30% to 50%.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 space-y-1">
                <span className="font-semibold text-rose-300 block">Hidden Heavy Generator Expenses:</span>
                <p className="text-slate-400">You land at Murtala Muhammed Airport ready to settle in, only to find the estate generator is broken and you have no power during the day.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 space-y-1">
                <span className="font-semibold text-rose-300 block">Dry Season Illusions:</span>
                <p className="text-slate-400">Leases negotiated in December hide the fact that July torrential downpours turn the estate gates into a navigable canal.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-200 text-xs">
              <span className="font-bold block text-white mb-0.5">The Bottom Line:</span>
              VerifiRent doesn't just show you the house. It shows you the ground reality behind it before you wire any money.
            </div>
          </div>

          {/* Right Column: The 4 Diaspora Perks */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {diasporaPerks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#050E1A] p-6 rounded-2xl border border-white/10 hover:border-[#10B981]/50 transition-all space-y-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#10B981]/15 text-[#34D399] flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#34D399] transition-colors">
                    {perk.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Diaspora CTA strip */}
        <div className="bg-gradient-to-r from-[#10B981]/20 via-[#0D2138] to-[#10B981]/20 p-6 sm:p-8 rounded-3xl border border-emerald-500/30 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            Planning a return, relocation, or renting for parents ?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Join the Diaspora priority tier to receive remote inspection video slots and guaranteed landlord deed verification before Q4 launch.
          </p>
          <div className="pt-2">
            <button
              onClick={onJoinWaitlist}
              className="bg-[#10B981] hover:bg-[#059669] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all inline-flex items-center gap-2 shadow-lg shadow-emerald-950/60 cursor-pointer border border-emerald-400/40"
            >
              <span>Join Diaspora Early Access Tier</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
