import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  CheckCircle2, 
  Database, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  LucideIcon
} from 'lucide-react';

export interface FeatureDetail {
  id: number;
  title: string;
  tag: string;
  tagColor: string;
  iconBg: string;
  icon: LucideIcon;
  description: string;
  metrics: string[];
  dataSources: string[];
  benefits: string[];
  operationalDetails: string;
}

interface FeatureDetailModalProps {
  feature: FeatureDetail | null;
  onClose: () => void;
  onJoinWaitlistClick?: () => void;
}

export const FeatureDetailModal: React.FC<FeatureDetailModalProps> = ({
  feature,
  onClose,
  onJoinWaitlistClick
}) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!feature) return null;

  const Icon = feature.icon;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-feature-title"
      >
        {/* Backdrop with smooth blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#08182B]/60 backdrop-blur-sm cursor-pointer"
        />

        {/* Centralized Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-900/20 overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Emerald Header Stripe */}
          <div className="h-1.5 w-full bg-gradient-to-r from-emerald-400 via-[#10B981] to-emerald-600" />

          {/* Modal Header */}
          <div className="p-5 sm:p-6 pb-4 border-b border-slate-100 flex items-start justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className={`w-11 h-11 rounded-2xl ${feature.iconBg} flex items-center justify-center shrink-0 shadow-xs mt-0.5`}>
                <Icon className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-md border font-bold ${feature.tagColor}`}>
                    {feature.tag}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 font-medium">
                    Feature #{feature.id} of 8
                  </span>
                </div>
                <h3 id="modal-feature-title" className="text-lg sm:text-xl font-extrabold text-[#08182B] tracking-tight">
                  {feature.title}
                </h3>
              </div>
            </div>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              aria-label="Close feature details"
              className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer shrink-0"
            >
              <X className="w-5 h-5 stroke-[2.2]" />
            </motion.button>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-5 sm:p-6 space-y-6 overflow-y-auto">
            
            {/* Plain English Summary */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
              <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>Feature Summary</span>
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>

            {/* Key Metrics Grid */}
            <div>
              <h4 className="text-xs font-bold text-[#08182B] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#10B981]" />
                <span>Core Metrics & Assessment Dimensions</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {feature.metrics.map((metric, idx) => (
                  <div 
                    key={idx} 
                    className="p-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs text-center"
                  >
                    <span className="text-xs font-semibold text-[#08182B] block leading-snug">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ground Truth Data Sources */}
            <div>
              <h4 className="text-xs font-bold text-[#08182B] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Database className="w-4 h-4 text-[#10B981]" />
                <span>Verified Data Sources & Methodology</span>
              </h4>
              <ul className="space-y-2 bg-emerald-50/50 p-3.5 rounded-2xl border border-emerald-100">
                {feature.dataSources.map((source, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{source}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Concrete Benefits for Renters */}
            <div>
              <h4 className="text-xs font-bold text-[#08182B] uppercase tracking-wider mb-2.5">
                Practical Benefits Before Signing a Lease
              </h4>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-2 shrink-0" />
                    <span className="text-xs text-slate-700 leading-relaxed font-normal">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Operational & SOP Details */}
            <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-slate-700 space-y-1">
              <span className="font-bold text-[#08182B] block">VerifiRent Standard:</span>
              <p className="leading-relaxed">
                {feature.operationalDetails}
              </p>
            </div>

          </div>

          {/* Modal Footer with Action */}
          <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/80 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>Launching soon</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
              >
                Close View
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onJoinWaitlistClick) onJoinWaitlistClick();
                }}
                className="flex-1 sm:flex-initial bg-[#10B981] hover:bg-[#059669] text-white px-5 py-2 rounded-xl text-xs font-bold transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Join Waitlist for Free Reports</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
