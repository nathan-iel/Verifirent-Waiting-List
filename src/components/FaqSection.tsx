import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Sparkles } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      category: 'Product & Integrity',
      question: 'How is VerifiRent different from traditional property listing portals?',
      answer:
        'Traditional property portals are advertising classifieds that make money when agents list houses. They have zero incentive to tell you that the compound floods, the transformer is overloaded, or the tap water smells like rust. VerifiRent is an independent neighbourhood intelligence platform: we never take listing kickbacks or conceal flaws. We exist exclusively to protect the tenant with verified, ground-truth reality.',
    },
    {
      category: 'Data & AI',
      question: 'Does the AI ever guess or hallucinate any of the Livability Scores?',
      answer:
        'Never. Our strict architectural rule is that the AI layer only translates and explains verified numbers into plain, readable human English — it NEVER calculates or invents the scores. Every single metric (from 16.5 hrs of power to 380 ppm water salinity) comes from physical sensor telemetry, digital instruments, transformer feeder data, and on-site surveyor audits. That data integrity is our moat.',
    },
    {
      category: 'Livability Score',
      question: 'What are the six verified data dimensions and how is the 0–100 score built?',
      answer:
        'The Livability Score is calculated from six weighted vectors: (1) Electricity Reliability (daily grid hours, transformer health, estate generator curfew), (2) Flood Risk & Drainage (elevation LiDAR, drainage status, rainy-season watermarks), (3) Mobile Network & Internet (MTN/Airtel/Glo signal strength and fiber access), (4) Water Reliability & Purity (borehole salinity TDS, heavy metals, treatment plant condition), (5) Safety & Security (manned gate enforcement, incident logs, night patrol), and (6) Commute & Traffic (peak-hour GPS tracking vs agent claims).',
    },
    {
      category: 'Physical Inspections',
      question: 'What is included in a VerifiRent physical inspection?',
      answer:
        'Our vetted field inspectors (civil engineers, facility auditors, and local real estate surveyors) physically visit the property. They test electrical voltage at sockets, run water through a calibrated TDS purity probe, check foundation walls with moisture meters for hidden flood tide stains, verify the title with land registries, and produce a certified digital report that clearly distinguishes what was claimed from what was physically confirmed.',
    },
    {
      category: 'Diaspora Renters',
      question: 'I live in the UK / US / Canada. How does the Diaspora Concierge work for me?',
      answer:
        'Diaspora Nigerians make significant rental decisions from thousands of miles away with zero way to verify what they are told. Our Diaspora service provides an uncut 4K video walkthrough, independent landlord and deed verification (to protect against fake sublet scams), physical testing of utilities, and direct delivery to your WhatsApp and email before you wire any rent from abroad.',
    },
    {
      category: 'Independence',
      question: 'Can a landlord or agent pay to boost or modify their property score?',
      answer:
        'No. Under no circumstances can a property owner, developer, or agent pay to inflate a Livability Score or remove verified defect warnings. Landlords can only improve their score by genuinely resolving the physical issues — such as repairing the estate water treatment plant, installing an automated generator switch, or clearing drainage culverts.',
    },
    {
      category: 'Launch & Pricing',
      question: 'When is VerifiRent officially launching and what do waitlist members get?',
      answer:
        'We are launching soon across major rental hubs including Lekki Phase 1, Ikate, Chevron, Ajah, Yaba, Ikeja GRA, Surulere, and Magodo. The first 1,000 waitlist members receive 2 free comprehensive property livability reports (valued at ₦50,000) and priority scheduling for physical on-site inspections.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#059669] uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-[#10B981]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#08182B] tracking-tight">
            Everything you need to know about VerifiRent
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Honest answers about our methodology, our strict anti-hallucination moat, and how we protect renters .
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-emerald-700 uppercase tracking-wider block">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#08182B]">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`p-2 rounded-xl border shrink-0 transition-colors ${
                    isOpen ? 'bg-[#08182B] text-white border-[#08182B]' : 'bg-slate-50 text-slate-500 border-slate-200'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support note */}
        <div className="mt-12 text-center text-xs text-slate-500">
          Have a specific property or question not covered here?{' '}
          <a href="#waitlist" className="text-[#059669] hover:underline font-semibold">
            Join the early access priority list
          </a>{' '}
          or email us at <strong className="text-slate-700">intel@verifirent.ng</strong>.
        </div>

      </div>
    </section>
  );
};
