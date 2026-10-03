import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Droplets, 
  Wifi, 
  Car, 
  Lock, 
  Waves, 
  Sparkles,
  Search,
  ExternalLink,
  MapPin,
  AlertTriangle
} from 'lucide-react';
import { SAMPLE_NEIGHBOURHOODS } from '../data/mockReports';

interface HeroProps {
  onFastSignup: (email: string, role: string) => void;
  onExploreScore: (neighbourhoodId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onFastSignup, onExploreScore }) => {
  const [email, setEmail] = useState('');
  const [selectedRole, setSelectedRole] = useState<'renter' | 'diaspora' | 'landlord'>('renter');
  const [activeAreaIndex, setActiveAreaIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const activeArea = SAMPLE_NEIGHBOURHOODS[activeAreaIndex];

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    onFastSignup(email, selectedRole);
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#08182B] via-[#0A1F36] to-[#08182B] text-white pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-white/10">
      {/* Background architectural grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      
      {/* Atmospheric lighting orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Mission, Pitch & Waitlist Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Value Proposition Badge (Clean typography, no pill slop) */}
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Neighbourhood Intelligence Platform</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.12]">
                Pretty photos hide ugly truths.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D399] via-emerald-300 to-white">
                  Know before you rent.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
                Renters pick a house from pretty photos and a convincing agent pitch — then move in and discover the power's unreliable, the street floods every rainy season, or the "5-minute commute" is a 90-minute slog. <strong className="text-white font-semibold">VerifiRent fixes that before you sign a lease.</strong>
              </p>
            </div>

            {/* Fast Email Signup Bar */}
            <div className="bg-[#050E1A]/90 p-5 rounded-2xl border border-white/15 shadow-2xl backdrop-blur-md max-w-xl">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="text-slate-300 font-medium">I am renting as:</span>
                <div className="flex items-center gap-1 bg-white/10 p-1 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setSelectedRole('renter')}
                    className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                      selectedRole === 'renter'
                        ? 'bg-[#10B981] text-white shadow-sm font-semibold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Everyday Renter
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedRole('diaspora')}
                    className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                      selectedRole === 'diaspora'
                        ? 'bg-[#10B981] text-white shadow-sm font-semibold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Diaspora / Abroad
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedRole('landlord')}
                    className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                      selectedRole === 'landlord'
                        ? 'bg-[#10B981] text-white shadow-sm font-semibold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Property Owner
                  </button>
                </div>
              </div>

              {!submitted ? (
                <form onSubmit={handleHeroSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email (e.g. adebayo@verifirent.ng)"
                      required
                      className="flex-1 bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all"
                    />
                    <button
                      type="submit"
                      className="bg-[#10B981] hover:bg-[#059669] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 cursor-pointer border border-emerald-400/30 whitespace-nowrap"
                    >
                      <span>Get Early Access</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>⚡ First 1,000 members receive 2 Free Livability Reports</span>
                    <span className="hidden sm:inline">No spam · Launch Coming Soon</span>
                  </div>
                </form>
              ) : (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#34D399] shrink-0" />
                  <div className="text-xs">
                    <p className="font-bold text-white">You're on the priority waitlist!</p>
                    <p className="text-slate-300">We've reserved your early access badge & 2 free neighbourhood reports.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Core Anti-Hallucination & Integrity Principles */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300 border-t border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0" />
                <span>Zero AI-guessed data</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0" />
                <span>6 Real Verified Vectors</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0" />
                <span>Vetted Field Inspectors</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Real-Time Livability Report Card Preview */}
          <div className="lg:col-span-5">
            <div className="bg-[#0D2138] rounded-2xl border border-white/15 p-6 shadow-2xl relative overflow-hidden backdrop-blur-lg">
              
              {/* Card Header & Location Switcher */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#34D399]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300">Live Sample Audit</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Ground-Truth Verified</span>
                </div>
              </div>

              {/* Area Selector Tabs */}
              <div className="grid grid-cols-4 gap-1 p-1 bg-black/40 rounded-xl mb-5 text-[11px] font-medium">
                {SAMPLE_NEIGHBOURHOODS.map((area, idx) => (
                  <button
                    key={area.id}
                    onClick={() => setActiveAreaIndex(idx)}
                    className={`py-1.5 px-1 rounded-lg text-center truncate transition-all cursor-pointer ${
                      activeAreaIndex === idx
                        ? 'bg-[#10B981] text-white font-bold shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {area.name.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Active Area Title & Overall Score */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{activeArea.name}</h3>
                  <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-2">
                    <span>{activeArea.axis}</span>
                    <span>·</span>
                    <span>Avg Rent: {activeArea.avgRent2Bed}</span>
                  </div>
                </div>

                {/* Livability Score Dial */}
                <div className="flex flex-col items-center bg-[#08182B] px-3.5 py-2 rounded-xl border border-white/10 shadow-inner">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-2xl font-black text-[#34D399]">{activeArea.overallScore}</span>
                    <span className="text-xs text-slate-400 font-mono">/100</span>
                  </div>
                  <span className="text-[10px] text-slate-300 font-medium whitespace-nowrap">Livability Score</span>
                </div>
              </div>

              {/* The 6 Verified Dimensions at a glance */}
              <div className="space-y-2.5 mb-5">
                <div className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                  <span>6 Ground-Truth Dimensions</span>
                  <span className="text-[10px] text-slate-400 font-normal">Real sensor & field logs</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  {/* Electricity */}
                  <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                    <div className="flex items-center justify-between text-slate-300 mb-1">
                      <div className="flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                        <span className="font-medium text-[11px]">Electricity</span>
                      </div>
                      <span className="font-mono font-bold text-amber-300">{activeArea.dimensions.electricity.score}%</span>
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">{activeArea.dimensions.electricity.headline}</div>
                  </div>

                  {/* Flood */}
                  <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                    <div className="flex items-center justify-between text-slate-300 mb-1">
                      <div className="flex items-center gap-1.5">
                        <Waves className="w-3.5 h-3.5 text-blue-400" />
                        <span className="font-medium text-[11px]">Flood Risk</span>
                      </div>
                      <span className={`font-mono font-bold ${
                        activeArea.dimensions.flood.score >= 75 ? 'text-emerald-400' : activeArea.dimensions.flood.score >= 55 ? 'text-amber-300' : 'text-rose-400'
                      }`}>
                        {activeArea.dimensions.flood.score}%
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">{activeArea.dimensions.flood.headline}</div>
                  </div>

                  {/* Network */}
                  <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                    <div className="flex items-center justify-between text-slate-300 mb-1">
                      <div className="flex items-center gap-1.5">
                        <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="font-medium text-[11px]">Mobile / 5G</span>
                      </div>
                      <span className="font-mono font-bold text-emerald-300">{activeArea.dimensions.network.score}%</span>
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">{activeArea.dimensions.network.headline}</div>
                  </div>

                  {/* Water */}
                  <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                    <div className="flex items-center justify-between text-slate-300 mb-1">
                      <div className="flex items-center gap-1.5">
                        <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="font-medium text-[11px]">Water Purity</span>
                      </div>
                      <span className={`font-mono font-bold ${
                        activeArea.dimensions.water.score >= 70 ? 'text-emerald-300' : 'text-amber-300'
                      }`}>
                        {activeArea.dimensions.water.score}%
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">{activeArea.dimensions.water.headline}</div>
                  </div>

                  {/* Safety */}
                  <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                    <div className="flex items-center justify-between text-slate-300 mb-1">
                      <div className="flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="font-medium text-[11px]">Security</span>
                      </div>
                      <span className="font-mono font-bold text-emerald-300">{activeArea.dimensions.safety.score}%</span>
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">{activeArea.dimensions.safety.headline}</div>
                  </div>

                  {/* Commute */}
                  <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                    <div className="flex items-center justify-between text-slate-300 mb-1">
                      <div className="flex items-center gap-1.5">
                        <Car className="w-3.5 h-3.5 text-orange-400" />
                        <span className="font-medium text-[11px]">Commute Bottleneck</span>
                      </div>
                      <span className={`font-mono font-bold ${
                        activeArea.dimensions.commute.score >= 70 ? 'text-emerald-300' : 'text-rose-400'
                      }`}>
                        {activeArea.dimensions.commute.score}%
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">{activeArea.dimensions.commute.headline}</div>
                  </div>
                </div>
              </div>

              {/* The AI Plain-English Explainer Layer Box (Explicit user brief adherence) */}
              <div className="bg-[#050E1A] p-3.5 rounded-xl border border-white/10 text-xs text-slate-300 relative">
                <div className="flex items-center gap-2 mb-1.5 text-emerald-400 font-semibold text-[11px]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Explainer Layer (Interpreting verified data only)</span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-300 italic">
                  "{activeArea.aiExplanation}"
                </p>
                <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
                  <span>Audited: {activeArea.lastAudited}</span>
                  <button
                    onClick={() => onExploreScore(activeArea.id)}
                    className="text-[#34D399] hover:underline font-medium flex items-center gap-1 cursor-pointer"
                  >
                    View Full Dimensions Audit <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
