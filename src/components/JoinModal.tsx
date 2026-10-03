import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Check, 
  Copy, 
  ShieldCheck, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Briefcase
} from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'waitlist' | 'partner';
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  // Waitlist form state
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistRole, setWaitlistRole] = useState<'renter' | 'diaspora' | 'relocating'>('renter');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [waitlistTicket, setWaitlistTicket] = useState<number>(318);
  const [copied, setCopied] = useState(false);

  // Partner form state
  const [partnerName, setPartnerName] = useState('');
  const [partnerEmail, setPartnerEmail] = useState('');
  const [partnerType, setPartnerType] = useState('Landlord / Property Owner');
  const [partnerMessage, setPartnerMessage] = useState('');
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    try {
      const storedWaitlist = localStorage.getItem('verifirent_simple_waitlist');
      if (storedWaitlist) {
        const parsed = JSON.parse(storedWaitlist);
        setWaitlistEmail(parsed.email || '');
        setWaitlistRole(parsed.role || 'renter');
        setWaitlistTicket(parsed.ticket || 318);
        setWaitlistSubmitted(true);
      }
      const storedPartner = localStorage.getItem('verifirent_partner_submission');
      if (storedPartner) {
        setPartnerSubmitted(true);
      }
    } catch {
      // ignore
    }
  }, []);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail || !waitlistEmail.includes('@')) return;

    const randomTicket = Math.floor(Math.random() * 400) + 120;
    const entry = {
      email: waitlistEmail,
      role: waitlistRole,
      ticket: randomTicket,
    };

    try {
      localStorage.setItem('verifirent_simple_waitlist', JSON.stringify(entry));
    } catch {
      // ignore
    }

    setWaitlistTicket(randomTicket);
    setWaitlistSubmitted(true);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerEmail || !partnerEmail.includes('@')) return;

    const payload = {
      name: partnerName,
      email: partnerEmail,
      type: partnerType,
      message: partnerMessage,
      timestamp: new Date().toISOString()
    };

    try {
      localStorage.setItem('verifirent_partner_submission', JSON.stringify(payload));
    } catch {
      // ignore
    }

    setPartnerSubmitted(true);
  };

  const referralLink = `https://verifirent.ng/waitlist?ref=VR-${waitlistTicket}`;

  const copyWaitlistLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(
      `Check out VerifiRent before you rent! 0–100 Livability Scores and vetted physical inspections: ${referralLink}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#08182B]/65 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-900/30 overflow-hidden z-10 my-auto flex flex-col max-h-[92vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Emerald Gradient Line */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#10B981] via-emerald-500 to-[#08182B]" />

          {/* Modal Header */}
          <div className="p-4 sm:p-6 pb-3 border-b border-slate-100 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center text-white shadow-sm">
                <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#08182B] tracking-tight">
                  Join the VerifiRent Movement
                </h3>
                <p className="text-xs text-slate-500 hidden sm:block">
                  Choose your journey: Partner as an owner or agency, or join the renter waiting list.
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              aria-label="Close dialog"
              className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer shrink-0"
            >
              <X className="w-5 h-5 stroke-[2.2]" />
            </motion.button>
          </div>

          {/* 2-Section Split Grid: Partner With Us & Join The Waiting List */}
          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 overflow-y-auto">
            
            {/* SECTION 1: Partner With Us */}
            <div className="p-5 sm:p-7 flex flex-col justify-between space-y-6 bg-slate-50/50">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 font-bold border border-purple-200 flex items-center gap-1.5">
                    <Briefcase className="w-3 h-3" />
                    <span>Industry & Ecosystem</span>
                  </span>
                  <span className="text-xs text-slate-400 font-medium">B2B Opportunities</span>
                </div>

                <div>
                  <h4 className="text-xl font-extrabold text-[#08182B] tracking-tight">
                    Partner With Us
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Property owners, licensed agencies, certified inspectors, and estate managers: eliminate vacancy lag and elevate tenant trust through vetted verification.
                  </p>
                </div>

                {/* Key Partner Benefits */}
                <div className="space-y-2 py-1">
                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span><strong>Pre-Verified Badges:</strong> Properties with verified scores lease up to 3x faster.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span><strong>Field Inspector Network:</strong> Paid contractor audits for qualified building professionals.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span><strong>CDA Infrastructure Tracking:</strong> Official estate rating recognition for good grids.</span>
                  </div>
                </div>

                {/* Partner Form */}
                <AnimatePresence mode="wait">
                  {!partnerSubmitted ? (
                    <motion.form
                      key="partner-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handlePartnerSubmit}
                      className="space-y-3 pt-2"
                    >
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Full Name or Company
                        </label>
                        <input
                          type="text"
                          required
                          value={partnerName}
                          onChange={(e) => setPartnerName(e.target.value)}
                          placeholder="e.g. Adebayo Real Estate / Chief Okon"
                          className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-[#08182B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Work Email
                        </label>
                        <input
                          type="email"
                          required
                          value={partnerEmail}
                          onChange={(e) => setPartnerEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-[#08182B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Partnership Category
                        </label>
                        <select
                          value={partnerType}
                          onChange={(e) => setPartnerType(e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-[#08182B] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-2xs"
                        >
                          <option value="Landlord / Property Owner">Landlord / Property Owner</option>
                          <option value="Real Estate Agency / Broker">Real Estate Agency / Broker</option>
                          <option value="Certified Building Auditor / Inspector">Certified Building Auditor / Inspector</option>
                          <option value="Estate CDA / Resident Association">Estate CDA / Resident Association</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Brief Note (Optional)
                        </label>
                        <textarea
                          rows={2}
                          value={partnerMessage}
                          onChange={(e) => setPartnerMessage(e.target.value)}
                          placeholder="Number of units, areas of operation, or inspection credentials..."
                          className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-[#08182B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none shadow-2xs"
                        />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md shadow-purple-700/20 flex items-center justify-center gap-2 cursor-pointer mt-1"
                      >
                        <Building2 className="w-3.5 h-3.5" />
                        <span>Submit Partnership Request</span>
                      </motion.button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="partner-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-5 rounded-2xl bg-purple-50 border border-purple-200 text-center space-y-2 mt-2"
                    >
                      <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto shadow-sm">
                        <Check className="w-5 h-5 stroke-[2.5]" />
                      </div>
                      <h5 className="font-extrabold text-sm text-[#08182B]">Partnership Inquiry Received</h5>
                      <p className="text-xs text-purple-900 leading-relaxed">
                        Our partnerships team will reach out to <strong>{partnerEmail}</strong> within 24 hours with onboarding materials and our verification SOP.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-3 border-t border-slate-200/80 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Direct inquiry: partner@verifirent.ng</span>
                <span>Protected by NDA</span>
              </div>
            </div>

            {/* SECTION 2: Join the Waiting List */}
            <div className="p-5 sm:p-7 flex flex-col justify-between space-y-6 bg-white">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 font-bold border border-emerald-200 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#10B981]" />
                    <span>Renters & Consumers</span>
                  </span>
                  <span className="text-xs text-[#059669] font-bold">2 Free Reports</span>
                </div>

                <div>
                  <h4 className="text-xl font-extrabold text-[#08182B] tracking-tight">
                    Join the Waiting List
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Be the first to inspect properties with ground-truth 0–100 Livability Scores. Early access members lock in priority audits before general release.
                  </p>
                </div>

                {/* Key Renter Perks */}
                <div className="space-y-2 py-1">
                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span><strong>2 Comprehensive Property Reports:</strong> Valued at ₦50,000, 100% free.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span><strong>Priority Inspection Queue:</strong> Fast-track physical checks on short notice.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span><strong>Anti-Scam Shield:</strong> Real-time warning alerts on flagged broker listings.</span>
                  </div>
                </div>

                {/* Waitlist Form */}
                <AnimatePresence mode="wait">
                  {!waitlistSubmitted ? (
                    <motion.form
                      key="waitlist-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleWaitlistSubmit}
                      className="space-y-3 pt-2"
                    >
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Your Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={waitlistEmail}
                          onChange={(e) => setWaitlistEmail(e.target.value)}
                          placeholder="you@email.com"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-[#08182B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:bg-white focus:border-transparent transition-all shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          I am renting as:
                        </label>
                        <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200/70">
                          <button
                            type="button"
                            onClick={() => setWaitlistRole('renter')}
                            className={`py-1.5 rounded-lg text-xs font-medium transition-all ${
                              waitlistRole === 'renter'
                                ? 'bg-[#10B981] text-white font-bold shadow-xs'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            Everyday Renter
                          </button>
                          <button
                            type="button"
                            onClick={() => setWaitlistRole('diaspora')}
                            className={`py-1.5 rounded-lg text-xs font-medium transition-all ${
                              waitlistRole === 'diaspora'
                                ? 'bg-[#10B981] text-white font-bold shadow-xs'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            Diaspora / Abroad
                          </button>
                          <button
                            type="button"
                            onClick={() => setWaitlistRole('relocating')}
                            className={`py-1.5 rounded-lg text-xs font-medium transition-all ${
                              waitlistRole === 'relocating'
                                ? 'bg-[#10B981] text-white font-bold shadow-xs'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            Relocating
                          </button>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer mt-2"
                      >
                        <span>Join Early Access Waiting List</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </motion.button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="waitlist-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 mt-2"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-xs">
                          <Check className="w-4 h-4 stroke-[2.5]" />
                        </div>
                        <span className="font-extrabold text-sm text-[#08182B]">
                          Priority Spot Reserved!
                        </span>
                      </div>

                      <div className="bg-white p-2.5 rounded-xl border border-emerald-200/80 inline-block px-4">
                        <span className="text-[10px] uppercase font-mono text-slate-400 block">Queue Ticket</span>
                        <span className="text-base font-extrabold text-[#059669] font-mono">#VR-{waitlistTicket}</span>
                      </div>

                      <p className="text-[11px] text-emerald-900 leading-relaxed">
                        2 free livability reports reserved for <strong>{waitlistEmail}</strong>. Share your ticket to advance in line!
                      </p>

                      <div className="flex gap-2 pt-1">
                        <button
                          type="button"
                          onClick={copyWaitlistLink}
                          className="flex-1 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-xs py-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-colors"
                        >
                          {copied ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copied ? 'Copied' : 'Copy Link'}</span>
                        </button>
                        <button
                          type="button"
                          onClick={shareWhatsApp}
                          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs py-2 rounded-lg font-semibold transition-colors"
                        >
                          Share WhatsApp
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
                <span>No spam · Cancel anytime</span>
                <span className="text-[#059669] font-semibold">Priority Launch</span>
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
