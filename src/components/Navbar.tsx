import React, { useState } from 'react';
import { ShieldCheck, Menu, X, ArrowRight, Compass } from 'lucide-react';

interface NavbarProps {
  onOpenWaitlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWaitlist }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#08182B]/95 backdrop-blur-md border-b border-white/10 text-white">
      {/* Top Banner - Subtle, high-contrast announcement */}
      <div className="bg-[#050E1A] py-1.5 px-4 text-xs font-medium text-slate-300 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>Launch Coming Soon</span>
            <span className="text-slate-500 hidden sm:inline">·</span>
            <span className="text-slate-400 hidden sm:inline">Early Access Members get 2 Free Property Intelligence Reports</span>
          </div>
          <button
            onClick={onOpenWaitlist}
            className="text-[#34D399] hover:text-white transition-colors flex items-center gap-1 font-semibold text-xs"
          >
            Claim Reserve Spot <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10B981] to-[#047857] flex items-center justify-center text-white shadow-lg shadow-emerald-950/40 border border-emerald-400/20">
            <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-white font-['Plus_Jakarta_Sans']">
                Verifi<span className="text-[#34D399]">Rent</span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/10 text-slate-300 font-semibold border border-white/10">
                
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-medium tracking-wide">
              Know Before You Rent
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button
            onClick={() => scrollToSection('livability-score')}
            className="hover:text-[#34D399] transition-colors cursor-pointer py-1"
          >
            Livability Score
          </button>
          <button
            onClick={() => scrollToSection('six-dimensions')}
            className="hover:text-[#34D399] transition-colors cursor-pointer py-1"
          >
            6 Verified Dimensions
          </button>
          <button
            onClick={() => scrollToSection('claimed-vs-reality')}
            className="hover:text-[#34D399] transition-colors cursor-pointer py-1"
          >
            Claimed vs Reality
          </button>
          <button
            onClick={() => scrollToSection('physical-inspections')}
            className="hover:text-[#34D399] transition-colors cursor-pointer py-1"
          >
            Physical Inspections
          </button>
          <button
            onClick={() => scrollToSection('diaspora')}
            className="hover:text-[#34D399] transition-colors cursor-pointer py-1"
          >
            Diaspora Hub
          </button>
          <button
            onClick={() => scrollToSection('calculator')}
            className="hover:text-[#34D399] transition-colors cursor-pointer py-1"
          >
            Cost Calculator
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="hover:text-[#34D399] transition-colors cursor-pointer py-1"
          >
            FAQ
          </button>
        </div>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenWaitlist}
            className="bg-[#10B981] hover:bg-[#059669] text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-emerald-950/40 hover:shadow-emerald-900/60 transition-all flex items-center gap-2 cursor-pointer border border-emerald-400/30"
          >
            <span>Join Priority Waitlist</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050E1A] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => scrollToSection('livability-score')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-200 hover:text-[#34D399]"
          >
            Livability Score (0–100)
          </button>
          <button
            onClick={() => scrollToSection('six-dimensions')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-200 hover:text-[#34D399]"
          >
            6 Verified Data Dimensions
          </button>
          <button
            onClick={() => scrollToSection('claimed-vs-reality')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-200 hover:text-[#34D399]"
          >
            Claimed vs Confirmed Reality
          </button>
          <button
            onClick={() => scrollToSection('physical-inspections')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-200 hover:text-[#34D399]"
          >
            Vetted Physical Inspections
          </button>
          <button
            onClick={() => scrollToSection('diaspora')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-200 hover:text-[#34D399]"
          >
            Diaspora Renter Hub
          </button>
          <button
            onClick={() => scrollToSection('calculator')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-200 hover:text-[#34D399]"
          >
            Hidden Rental Cost Calculator
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-200 hover:text-[#34D399]"
          >
            FAQ
          </button>

          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWaitlist();
              }}
              className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-semibold text-sm py-3 rounded-xl text-center shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Join Priority Waitlist (Free Reports)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
