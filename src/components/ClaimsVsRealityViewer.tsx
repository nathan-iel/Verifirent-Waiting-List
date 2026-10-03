import React, { useState } from 'react';
import { 
  FileSearch, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  DollarSign, 
  MapPin, 
  Camera, 
  FileText, 
  Download, 
  ExternalLink,
  Share2,
  Eye
} from 'lucide-react';
import { REAL_RENTAL_CLAIMS, ClaimComparison } from '../data/claimsComparison';

export const ClaimsVsRealityViewer: React.FC = () => {
  const [selectedClaimId, setSelectedClaimId] = useState<string>(REAL_RENTAL_CLAIMS[0].id);
  const [showSampleModal, setShowSampleModal] = useState<boolean>(false);

  const activeClaim = REAL_RENTAL_CLAIMS.find(c => c.id === selectedClaimId) || REAL_RENTAL_CLAIMS[0];

  return (
    <section id="claimed-vs-reality" className="py-20 bg-slate-100/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#059669] uppercase tracking-wider">
            <FileSearch className="w-4 h-4 text-[#10B981]" />
            <span>The Physical Inspection Report</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#08182B] tracking-tight">
            Separating what was claimed from what is physically true.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Don't discover the truth after handing over your annual rent and agreement fees. Our vetted inspectors audit the property in person, producing a forensic, shareable report with undeniable proof.
          </p>
        </div>

        {/* Claim Selector Pills / Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {REAL_RENTAL_CLAIMS.map((claim) => (
            <button
              key={claim.id}
              onClick={() => setSelectedClaimId(claim.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                selectedClaimId === claim.id
                  ? 'bg-[#08182B] text-white border-[#08182B] shadow-md ring-2 ring-[#10B981]'
                  : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400 hover:bg-slate-50'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${
                claim.category === 'Electricity' ? 'bg-amber-400' :
                claim.category === 'Flooding' ? 'bg-blue-400' :
                claim.category === 'Water' ? 'bg-cyan-400' :
                claim.category === 'Commute' ? 'bg-orange-400' :
                claim.category === 'Legal/Title' ? 'bg-purple-400' : 'bg-emerald-400'
              }`} />
              <span>{claim.category}: {claim.propertySnippet.split(',')[0]}</span>
            </button>
          ))}
        </div>

        {/* The Side-by-Side Forensic Inspection Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-5xl mx-auto">
          
          {/* Header of Audit Card */}
          <div className="bg-[#08182B] text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#34D399] uppercase tracking-wider mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeClaim.location}</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-300">{activeClaim.category} Audit</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                {activeClaim.propertySnippet}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowSampleModal(true)}
                className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 border border-white/10 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-[#34D399]" />
                <span>View Full Sample Report</span>
              </button>
            </div>
          </div>

          {/* Comparison Body: Claim vs Reality */}
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            
            {/* Left: What the Agent Claimed */}
            <div className="p-6 sm:p-8 bg-rose-50/30 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-rose-700 uppercase tracking-wider">
                <XCircle className="w-4 h-4 text-rose-600" />
                <span>What The Listing Pitch Claimed</span>
              </div>

              <blockquote className="text-xl sm:text-2xl font-extrabold text-slate-800 leading-snug tracking-tight">
                {activeClaim.agentClaim}
              </blockquote>

              <p className="text-sm text-slate-600 leading-relaxed">
                {activeClaim.agentClaimDetail}
              </p>

              <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Status: Unverified claim typical of standard marketing listings.</span>
              </div>
            </div>

            {/* Right: What the Physical Inspector Confirmed */}
            <div className="p-6 sm:p-8 bg-emerald-50/30 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#065F46] uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>What Was Physically Confirmed On-Site</span>
              </div>

              <div className="text-xl sm:text-2xl font-extrabold text-[#08182B] leading-snug tracking-tight">
                {activeClaim.confirmedReality}
              </div>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide block">
                  Inspector Evidence Log
                </span>
                <p className="text-sm text-slate-700 leading-relaxed bg-white p-3.5 rounded-xl border border-slate-200">
                  {activeClaim.inspectorEvidence}
                </p>
              </div>

              {/* Financial Risk Avoided */}
              <div className="p-3.5 rounded-xl bg-[#08182B] text-white flex items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-2 text-xs">
                  <DollarSign className="w-4 h-4 text-[#34D399]" />
                  <span className="text-slate-300 font-medium">Estimated Financial Impact:</span>
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-[#34D399] font-mono">
                  {activeClaim.financialImpact}
                </span>
              </div>

            </div>

          </div>

          {/* Footer note */}
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-slate-400" />
              <span>Includes timestamped photos, GPS coordinate stamps & digital equipment logs.</span>
            </div>
            <div className="font-medium text-slate-700">
              Shareable with co-tenants, spouses & relocation managers
            </div>
          </div>

        </div>

      </div>

      {/* Sample Inspection Report Modal */}
      {showSampleModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <FileText className="w-6 h-6 text-[#10B981]" />
                <div>
                  <h4 className="text-lg font-bold text-[#08182B]">VerifiRent Certified Inspection Report</h4>
                  <p className="text-xs text-slate-500">Audit Certificate #VR-84920-LK</p>
                </div>
              </div>
              <button 
                onClick={() => setShowSampleModal(false)}
                className="text-slate-400 hover:text-slate-700 text-sm font-bold p-1 cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="grid grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs">
                <div>
                  <span className="text-slate-400 block">Property Inspected:</span>
                  <span className="font-bold text-slate-800">4-Bed Terrace, Lekki Scheme 1</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Lead Field Inspector:</span>
                  <span className="font-bold text-slate-800">Engr. T. Balogun (MNSE, Civil)</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Inspection Date:</span>
                  <span className="font-bold text-slate-800">September 24, 2026, 11:30 AM</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Verification Status:</span>
                  <span className="font-bold text-rose-600">3 Severe Discrepancies Noted</span>
                </div>
              </div>

              <div className="space-y-3">
                <h5 className="font-bold text-slate-900 uppercase text-xs tracking-wider">Certified Sectional Findings:</h5>
                
                <div className="p-3 rounded-lg border border-slate-200 space-y-1">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>1. Power & Generator Capacity</span>
                    <span className="text-amber-600">Conditional Pass</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Compound 100kVA Perkins gen tested; estate runs gen only from 7pm - 6am. Grid meter operational. Inverter required for daytime cooling.
                  </p>
                </div>

                <div className="p-3 rounded-lg border border-slate-200 space-y-1">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>2. Structural Moisture & Flood Stain Check</span>
                    <span className="text-rose-600">Failed</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Moisture meter read 68% saturation on ground floor baseboards. Fresh coat of white emulsion was applied over water tide stains to mask dampness.
                  </p>
                </div>

                <div className="p-3 rounded-lg border border-slate-200 space-y-1">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>3. Landlord Title & Mandate</span>
                    <span className="text-emerald-600">Verified</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Governor's Consent and deed of assignment validated at Alausa registry. Real owner confirmed via direct video call.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">Shareable secure PDF link generated upon audit completion.</span>
              <button
                onClick={() => setShowSampleModal(false)}
                className="w-full sm:w-auto bg-[#10B981] hover:bg-[#059669] text-white px-5 py-2.5 rounded-xl font-bold text-xs cursor-pointer shadow-md"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
