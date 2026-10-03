import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  Share2, 
  Copy, 
  Check, 
  ArrowRight,
  Gift,
  Mail,
  User,
  MapPin,
  Clock,
  Phone
} from 'lucide-react';

interface WaitlistData {
  name: string;
  email: string;
  phone: string;
  role: string;
  area: string;
  timeline: string;
  ticketNumber: number;
  timestamp: string;
}

export const WaitlistSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('Everyday Renter');
  const [area, setArea] = useState('Lekki Phase 1 / Ikate');
  const [timeline, setTimeline] = useState('1 - 3 Months');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [savedData, setSavedData] = useState<WaitlistData | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('verifirent_waitlist_user');
      if (stored) {
        setSavedData(JSON.parse(stored));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const ticketNum = Math.floor(Math.random() * 450) + 120; // e.g. #VR-284
      const entry: WaitlistData = {
        name: name || 'Valued Member',
        email,
        phone,
        role,
        area,
        timeline,
        ticketNumber: ticketNum,
        timestamp: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      };

      try {
        localStorage.setItem('verifirent_waitlist_user', JSON.stringify(entry));
      } catch {
        // ignore
      }

      setSavedData(entry);
      setIsSubmitting(false);
    }, 600);
  };

  const referralUrl = savedData 
    ? `https://verifirent.ng/join?ref=VR-${savedData.ticketNumber}`
    : 'https://verifirent.ng';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Check out VerifiRent before you rent ! They do ground-truth physical inspections and 0-100 livability scores for power, flood, water & traffic. Join the priority waitlist here: ${referralUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(
      `Never get scammed by pretty listing photos  again. @VerifiRent verifies power, flood risk, water purity & real traffic before you sign. #KnowBeforeYouRent #RealEstate`
    );
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(referralUrl)}`, '_blank');
  };

  return (
    <section id="waitlist" className="py-24 bg-gradient-to-b from-white via-emerald-50/30 to-white relative overflow-hidden border-b border-slate-200">
      
      {/* Background soft circles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-0 right-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#059669] uppercase tracking-wider">
            <Gift className="w-4 h-4 text-[#10B981]" />
            <span>Priority Founding Member Access</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#08182B] tracking-tight">
            Be first in line for  ground-truth intelligence.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Launching Q4 2026. Join 1,800+ renters, diaspora returnees, and landlords safeguarding their next rental decision.
          </p>
        </div>

        {/* Form or VIP Confirmed State */}
        {!savedData ? (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-10 max-w-3xl mx-auto">
            
            {/* VIP Perks Bar */}
            <div className="bg-[#08182B] text-white p-4 sm:p-5 rounded-2xl mb-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#10B981] flex items-center justify-center text-white shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-white block">Exclusive Founding Member Perk:</span>
                  <span className="text-slate-300">2 Free Comprehensive Property Intelligence Reports (₦50,000 value)</span>
                </div>
              </div>
              <span className="text-xs font-mono text-[#34D399] font-semibold bg-white/10 px-3 py-1 rounded-lg shrink-0">
                100% Free
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>Your Full Name</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Oreoluwa Adebayo"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:bg-white transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. adebayo@example.com"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* WhatsApp Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>WhatsApp Number (Optional for mobile reports)</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +234 803 123 4567 or +44 / +1"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:bg-white transition-all"
                  />
                </div>

                {/* Primary Role */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Primary Profile
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="Everyday Renter">Everyday Renter (Professional / Family)</option>
                    <option value="Diaspora Nigerian">Diaspora Nigerian (Renting from Abroad)</option>
                    <option value="Relocating Soon">Relocating from another state</option>
                    <option value="Student Renter">Student / NYSC Member</option>
                    <option value="Property Owner">Landlord / Authentic Property Owner</option>
                    <option value="Inspector Candidate">Interested in becoming a Field Inspector</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Target Area */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>Target Neighbourhood</span>
                  </label>
                  <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="Lekki Phase 1 / Ikate">Lekki Phase 1 / Ikate / Osapa</option>
                    <option value="Chevron / Orchid / Agungi">Chevron / Orchid / Agungi</option>
                    <option value="Ajah / Sangotedo / Badore">Ajah / Sangotedo / Badore</option>
                    <option value="Yaba / Akoka / Sabo">Yaba / Akoka / Sabo</option>
                    <option value="Ikeja GRA / Maryland / Alausa">Ikeja GRA / Maryland / Alausa</option>
                    <option value="Surulere / Bode Thomas">Surulere / Bode Thomas</option>
                    <option value="Gbagada / Ogudu / Anthony">Gbagada / Ogudu / Anthony</option>
                    <option value="Magodo Phase 1 & 2">Magodo Phase 1 & 2</option>
                    <option value="Ikoyi / Victoria Island">Ikoyi / Victoria Island</option>
                  </select>
                </div>

                {/* Move-in Timeline */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Target Move-in Timeline</span>
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="Immediate (< 1 Month)">Immediate (Within 30 Days)</option>
                    <option value="1 - 3 Months">1 to 3 Months</option>
                    <option value="3 - 6 Months">3 to 6 Months</option>
                    <option value="Exploring for later">Exploring / Relocating next year</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#10B981] hover:bg-[#059669] text-white py-4 px-6 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-emerald-950/20 border border-emerald-400/30"
                >
                  {isSubmitting ? (
                    <span>Securing Your Priority Spot...</span>
                  ) : (
                    <>
                      <span>Lock In Priority Access + 2 Free Reports</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center text-xs text-slate-500">
                🔒 Strict data privacy. No spam. You will only receive VerifiRent launch updates and audit invitations.
              </div>

            </form>

          </div>
        ) : (
          /* Confirmed VIP Reservation Ticket State */
          <div className="bg-[#08182B] text-white rounded-3xl border border-emerald-500/40 shadow-2xl p-6 sm:p-10 max-w-2xl mx-auto space-y-6">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#10B981] flex items-center justify-center text-white">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">You're on the Founding Priority List!</h3>
                  <p className="text-xs text-[#34D399]">Reservation confirmed for {savedData.email}</p>
                </div>
              </div>
              
              <div className="text-right">
                <span className="text-[10px] text-slate-400 font-mono block uppercase">Priority Ticket</span>
                <span className="text-lg font-black text-[#34D399] font-mono">#VR-{savedData.ticketNumber}</span>
              </div>
            </div>

            {/* Ticket details */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#050E1A] border border-white/5 text-xs font-mono">
              <div>
                <span className="text-slate-500 block">Name:</span>
                <span className="font-semibold text-slate-200">{savedData.name}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Focus Area:</span>
                <span className="font-semibold text-emerald-400">{savedData.area.split('/')[0]}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Timeline:</span>
                <span className="font-semibold text-slate-200">{savedData.timeline}</span>
              </div>
            </div>

            {/* Unlocked Perks */}
            <div className="space-y-2 text-xs text-slate-300">
              <span className="font-bold text-white block uppercase tracking-wider text-[11px]">
                Your Unlocked Founding Privileges:
              </span>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0" />
                  <span>2 Free Comprehensive Livability Score Reports upon launch</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0" />
                  <span>Priority booking for vetted physical property inspections</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0" />
                  <span>Access to flood and power grid alerts</span>
                </div>
              </div>
            </div>

            {/* Share / Invite Section */}
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white">Bump your priority up with friends:</span>
                <span className="text-[11px] text-slate-400 font-mono">1 referral = +1 free report</span>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={referralUrl}
                  className="flex-1 bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-xs font-mono text-slate-300 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  onClick={handleShareWhatsApp}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Share on WhatsApp</span>
                </button>
                <button
                  onClick={handleShareTwitter}
                  className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Share on X / Twitter</span>
                </button>
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => {
                  localStorage.removeItem('verifirent_waitlist_user');
                  setSavedData(null);
                }}
                className="text-[11px] text-slate-400 hover:text-slate-200 underline cursor-pointer"
              >
                Register another email or modify information
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
