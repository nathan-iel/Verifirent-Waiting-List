import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Send, 
  ArrowRight, 
  Check, 
  ExternalLink,
  MapPin,
  Mail,
  Heart
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050E1A] text-white border-t border-white/10 relative overflow-hidden">
      
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#10B981] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Bio Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10B981] to-[#047857] flex items-center justify-center text-white shadow-lg border border-emerald-400/20">
                <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <span className="font-extrabold text-2xl tracking-tight text-white">
                  Verifi<span className="text-[#34D399]">Rent</span>
                </span>
                <span className="text-[11px] text-slate-400 block -mt-1 font-medium">
                  Know Before You Rent
                </span>
              </div>
            </div>

            {/* Concise Bio of what VerifiRent is launching */}
            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              VerifiRent is 's premier neighbourhood intelligence platform. We eliminate nasty rental surprises before you sign a lease through verified 0–100 Livability Scores, ground-truth physical inspections, and independent landlord vetting.
            </p>

            <div className="text-xs text-slate-400 space-y-1 pt-1 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#34D399]" />
                <span>Launching Soon</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#34D399]" />
                <span>intel@verifirent.ng</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#34D399] font-semibold">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button onClick={() => scrollToSection('livability-score')} className="hover:text-white transition-colors cursor-pointer">
                  Livability Score (0–100)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('six-dimensions')} className="hover:text-white transition-colors cursor-pointer">
                  6 Verified Vectors
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('claimed-vs-reality')} className="hover:text-white transition-colors cursor-pointer">
                  Claimed vs Reality
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('physical-inspections')} className="hover:text-white transition-colors cursor-pointer">
                  Physical Inspections
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('diaspora')} className="hover:text-white transition-colors cursor-pointer">
                  Diaspora Hub
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('calculator')} className="hover:text-white transition-colors cursor-pointer">
                  Hidden Cost Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* Target Hubs */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#34D399] font-semibold">
              City Hubs
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Lekki Phase 1 & Ikate</li>
              <li>Chevron & Orchid Road</li>
              <li>Yaba Tech Corridor</li>
              <li>Ikeja GRA & Maryland</li>
              <li>Surulere (Bode Thomas)</li>
              <li>Ajah & Sangotedo</li>
              <li>Magodo Phase 1 & 2</li>
            </ul>
          </div>

          {/* Newsletter / Updates Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#34D399] font-semibold">
              Field Intelligence Dispatch
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Get our monthly flood risk bulletins, transformer uptime reports, and estate audit updates.
            </p>

            {!subscribed ? (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <div className="flex gap-1.5">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter email address"
                    required
                    className="flex-1 bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#10B981]"
                  />
                  <button
                    type="submit"
                    className="bg-[#10B981] hover:bg-[#059669] text-white p-2 rounded-xl transition-all cursor-pointer border border-emerald-400/20"
                    title="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-slate-400 block">No spam. Unsubscribe anytime.</span>
              </form>
            ) : (
              <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-[#34D399]" />
                <span>Subscribed to field updates!</span>
              </div>
            )}
          </div>

        </div>

        {/* Social Media Links & Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Social Links (Explicit user brief requirement) */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 font-medium mr-2">Follow our audits:</span>

            {/* X (Twitter) */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#10B981] hover:text-white border border-white/10 flex items-center justify-center text-slate-300 transition-all group"
              aria-label="VerifiRent on X (Twitter)"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#10B981] hover:text-white border border-white/10 flex items-center justify-center text-slate-300 transition-all"
              aria-label="VerifiRent on LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.4 9.74v-8.37H5.06v8.37h2.8z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#10B981] hover:text-white border border-white/10 flex items-center justify-center text-slate-300 transition-all"
              aria-label="VerifiRent on Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>

            {/* WhatsApp Community */}
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#10B981] hover:text-white border border-white/10 flex items-center justify-center text-slate-300 transition-all"
              aria-label="VerifiRent WhatsApp Community"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.76-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.59.21-1.09.15-1.19-.07-.11-.23-.17-.48-.29z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#10B981] hover:text-white border border-white/10 flex items-center justify-center text-slate-300 transition-all"
              aria-label="VerifiRent YouTube Channel"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          {/* Legal Disclaimers & Copyright */}
          <div className="text-center sm:text-right text-xs text-slate-400 space-y-1">
            <p>© {new Date().getFullYear()} VerifiRent Technologies Ltd. All rights reserved.</p>
            <p className="text-[11px] text-slate-400">
              Independent neighbourhood intelligence. We never accept undisclosed listing kickbacks.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
};
