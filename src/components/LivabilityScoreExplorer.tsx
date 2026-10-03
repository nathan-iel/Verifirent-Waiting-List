import React, { useState } from 'react';
import { 
  Zap, 
  Waves, 
  Wifi, 
  Droplets, 
  Lock, 
  Car, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Cpu, 
  FileCheck2,
  ChevronRight,
  Info
} from 'lucide-react';
import { SAMPLE_NEIGHBOURHOODS, NeighbourhoodReport, MetricDimension } from '../data/mockReports';

interface LivabilityScoreExplorerProps {
  selectedNeighbourhoodId?: string;
}

export const LivabilityScoreExplorer: React.FC<LivabilityScoreExplorerProps> = ({ selectedNeighbourhoodId }) => {
  const [selectedAreaId, setSelectedAreaId] = useState<string>(selectedNeighbourhoodId || 'lekki-1');
  const [activeDimensionKey, setActiveDimensionKey] = useState<'electricity' | 'flood' | 'network' | 'water' | 'safety' | 'commute'>('electricity');

  const currentArea = SAMPLE_NEIGHBOURHOODS.find(n => n.id === selectedAreaId) || SAMPLE_NEIGHBOURHOODS[0];
  const currentDimension: MetricDimension = currentArea.dimensions[activeDimensionKey];

  const dimensionIcons = {
    electricity: Zap,
    flood: Waves,
    network: Wifi,
    water: Droplets,
    safety: Lock,
    commute: Car,
  };

  const dimensionColors = {
    electricity: 'text-amber-500 bg-amber-50 border-amber-200',
    flood: 'text-blue-500 bg-blue-50 border-blue-200',
    network: 'text-emerald-500 bg-emerald-50 border-emerald-200',
    water: 'text-cyan-500 bg-cyan-50 border-cyan-200',
    safety: 'text-indigo-500 bg-indigo-50 border-indigo-200',
    commute: 'text-orange-500 bg-orange-50 border-orange-200',
  };

  return (
    <section id="livability-score" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#059669] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>The Ground-Truth Livability Score (0–100)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#08182B] tracking-tight">
            Six verified dimensions. Zero AI guesswork.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Every property gets an objective 0–100 score synthesized from six real, on-the-ground vectors.
            <strong className="text-[#08182B] font-semibold"> Our AI layer only explains the score in plain English — it never invents the numbers.</strong> That data integrity is our moat.
          </p>
        </div>

        {/* Interactive Explorer Container */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
          
          {/* Top Bar: Neighbourhood Selectors */}
          <div className="bg-[#08182B] text-white p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                Select Tested Neighbourhood
              </span>
              <div className="flex flex-wrap gap-2">
                {SAMPLE_NEIGHBOURHOODS.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => setSelectedAreaId(area.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      selectedAreaId === area.id
                        ? 'bg-[#10B981] text-white shadow-md'
                        : 'bg-white/10 text-slate-300 hover:bg-white/20'
                    }`}
                  >
                    {area.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Score Showcase */}
            <div className="flex items-center gap-4 bg-[#050E1A] p-3 rounded-2xl border border-white/10 shrink-0">
              <div className="text-right">
                <div className="text-xs text-slate-400 font-medium">Overall Livability</div>
                <div className="text-xs text-emerald-400 font-semibold">{currentArea.badgeText}</div>
              </div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#10B981] to-[#047857] flex flex-col items-center justify-center text-white font-extrabold shadow-lg">
                <span className="text-2xl leading-none">{currentArea.overallScore}</span>
                <span className="text-[9px] font-mono opacity-80">/100</span>
              </div>
            </div>
          </div>

          {/* AI Explanation Banner (Anti-Hallucination Moat Callout) */}
          <div className="bg-emerald-50/70 border-b border-emerald-100 p-4 sm:p-5 flex items-start gap-3 sm:gap-4">
            <div className="p-2 rounded-xl bg-[#10B981] text-white shrink-0 shadow-sm mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h4 className="text-xs sm:text-sm font-bold text-[#065F46] tracking-tight">
                  Plain-English AI Synthesis for {currentArea.name}
                </h4>
                <span className="text-[10px] bg-emerald-200/60 text-emerald-800 font-mono px-2 py-0.5 rounded font-medium">
                  Verified Data Interpreter
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                "{currentArea.aiExplanation}"
              </p>
            </div>
          </div>

          {/* Dimension Tabs & Detail View */}
          <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            
            {/* Dimension Selection List */}
            <div className="lg:col-span-4 p-4 sm:p-6 space-y-2 bg-slate-50/50">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Select Dimension to Audit
              </div>

              {(Object.keys(currentArea.dimensions) as Array<keyof typeof currentArea.dimensions>).map((dimKey) => {
                const dim = currentArea.dimensions[dimKey];
                const Icon = dimensionIcons[dimKey];
                const isSelected = activeDimensionKey === dimKey;

                return (
                  <button
                    key={dimKey}
                    onClick={() => setActiveDimensionKey(dimKey)}
                    className={`w-full text-left p-3.5 rounded-2xl transition-all flex items-center justify-between cursor-pointer border ${
                      isSelected
                        ? 'bg-white border-[#10B981] shadow-md shadow-emerald-950/5 ring-1 ring-[#10B981]'
                        : 'bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl border ${dimensionColors[dimKey]}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#08182B]">{dim.name}</div>
                        <div className="text-xs text-slate-500 truncate max-w-[170px] sm:max-w-[210px]">
                          {dim.headline}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-extrabold font-mono ${
                        dim.score >= 80 ? 'text-emerald-600' : dim.score >= 60 ? 'text-amber-600' : 'text-rose-600'
                      }`}>
                        {dim.score}
                      </span>
                      <ChevronRight className={`w-4 h-4 text-slate-400 ${isSelected ? 'text-[#10B981]' : ''}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Dimension Deep-Dive Data Inspection */}
            <div className="lg:col-span-8 p-6 sm:p-8 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Verified Field Vector
                    </span>
                    <span className="text-slate-400">·</span>
                    <span className="text-xs text-emerald-700 font-semibold">{currentArea.name}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#08182B] flex items-center gap-2">
                    {currentDimension.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">{currentDimension.headline}</p>
                </div>

                {/* Score badge */}
                <div className="flex items-center gap-3 bg-slate-100 px-4 py-3 rounded-2xl border border-slate-200 self-start sm:self-auto">
                  <div className="text-right">
                    <span className="text-[11px] text-slate-500 block uppercase font-mono">Dimension Score</span>
                    <span className="text-xs font-bold capitalize text-slate-800">{currentDimension.status} Rating</span>
                  </div>
                  <div className={`text-2xl font-black font-mono px-3 py-1 rounded-xl ${
                    currentDimension.score >= 80 ? 'bg-emerald-100 text-emerald-800' : currentDimension.score >= 60 ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
                  }`}>
                    {currentDimension.score}/100
                  </div>
                </div>
              </div>

              {/* Verified Ground Truth Data Points */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
                  <span>Ground-Truth Verification Logs</span>
                  <span className="text-[11px] text-slate-500 font-normal">Physical instruments & telemetry</span>
                </div>

                <div className="grid gap-3">
                  {currentDimension.verifiedData.map((dataPoint, idx) => (
                    <div 
                      key={idx}
                      className="bg-slate-50 p-4 rounded-2xl border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <div className="text-xs font-semibold text-slate-500">{dataPoint.label}</div>
                        <div className="text-base font-bold text-[#08182B]">{dataPoint.value}</div>
                      </div>
                      <div className="sm:text-right shrink-0">
                        <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-lg inline-flex items-center gap-1 border border-emerald-300/40">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          {dataPoint.verifiedMethod}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inspector Ground Observations */}
              <div className="bg-[#08182B] text-white p-5 rounded-2xl border border-slate-700 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    <FileCheck2 className="w-4 h-4" />
                    <span>Field Inspector Note</span>
                  </div>
                  <span className="text-[11px] text-slate-400">VerifiRent Field Audit</span>
                </div>
                <blockquote className="text-sm italic text-slate-200 leading-relaxed">
                  "{currentDimension.inspectorQuote}"
                </blockquote>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
