import React, { useState } from 'react';
import { 
  Calculator, 
  DollarSign, 
  Zap, 
  Droplets, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  TrendingDown,
  Info
} from 'lucide-react';

interface CostCalculatorProps {
  onJoinWaitlist: () => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onJoinWaitlist }) => {
  const [rent, setRent] = useState<number>(4500000); // ₦4.5M standard rent
  const [gridHours, setGridHours] = useState<number>(12); // hours of NEPA per day
  const [hasWaterTreatment, setHasWaterTreatment] = useState<boolean>(false);
  const [commuteMinutesOneWay, setCommuteMinutesOneWay] = useState<number>(60);

  // Formulas grounded in market realities:
  // Missing grid hours = 24 - gridHours.
  // Standard 5kVA - 10kVA generator consumes ~1.5 - 2.2 litres per hour.
  // Petrol / diesel estimated at ~₦1,150 / litre in Nigeria.
  // Daily generator hours needed = Math.max(0, 16 - gridHours) (assuming 8 hrs sleep or inverter)
  const genHoursPerDay = Math.max(0, 18 - gridHours);
  const monthlyFuelCost = Math.round(genHoursPerDay * 1.8 * 1150 * 30);
  const annualFuelCost = monthlyFuelCost * 12;

  // Water cost: If poor water / no estate RO plant, tanker haulage or domestic filters = ~₦30,000/mo
  const annualWaterCost = hasWaterTreatment ? 120000 : 360000;

  // Commute hours lost per year = (commuteMinutesOneWay * 2 * 240 workdays) / 60
  const annualCommuteHours = Math.round((commuteMinutesOneWay * 2 * 240) / 60);

  // Hidden 1st Year Cost: Fuel + Water + Agency/Legal (20% of rent)
  const agencyLegalFees = Math.round(rent * 0.20);
  const cautionDeposit = Math.round(rent * 0.10);
  const totalHiddenFirstYear = annualFuelCost + annualWaterCost + agencyLegalFees + cautionDeposit;

  const formatNaira = (amount: number) => {
    return '₦' + amount.toLocaleString('en-NG');
  };

  return (
    <section id="calculator" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#059669] uppercase tracking-wider">
            <Calculator className="w-4 h-4 text-[#10B981]" />
            <span>Interactive Rental Cost Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#08182B] tracking-tight">
            Calculate the true hidden cost of your next house.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Rent is just the entry ticket. Generator fuel, water haulage, and bad traffic turn a "cheap" apartment into a financial drain. See what the listing isn't telling you.
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          
          <div className="grid md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            
            {/* Left: Input Controls */}
            <div className="md:col-span-6 p-6 sm:p-8 space-y-6 bg-white">
              <h3 className="text-lg font-bold text-[#08182B] pb-2 border-b border-slate-100 flex items-center justify-between">
                <span>Property Parameters</span>
                <span className="text-xs font-normal text-slate-500">Slide to adjust</span>
              </h3>

              {/* Rent Input */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold text-slate-700">
                  <span>Advertised Annual Rent</span>
                  <span className="text-sm font-extrabold text-[#08182B] font-mono">{formatNaira(rent)}</span>
                </div>
                <input
                  type="range"
                  min={1500000}
                  max={15000000}
                  step={250000}
                  value={rent}
                  onChange={(e) => setRent(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>₦1.5M (Suburbs)</span>
                  <span>₦7.5M (Island)</span>
                  <span>₦15M (Luxury)</span>
                </div>
              </div>

              {/* Grid Power Hours */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold text-slate-700">
                  <span>Daily Grid Power (NEPA / DisCo)</span>
                  <span className="text-sm font-extrabold text-amber-600 font-mono">{gridHours} hrs / day</span>
                </div>
                <input
                  type="range"
                  min={4}
                  max={22}
                  step={1}
                  value={gridHours}
                  onChange={(e) => setGridHours(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>4 hrs (Heavy Gen reliance)</span>
                  <span>14 hrs (Median)</span>
                  <span>22 hrs (Band A Priority)</span>
                </div>
              </div>

              {/* Commute Time */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold text-slate-700">
                  <span>Peak One-Way Commute to Work</span>
                  <span className="text-sm font-extrabold text-orange-600 font-mono">{commuteMinutesOneWay} mins</span>
                </div>
                <input
                  type="range"
                  min={15}
                  max={120}
                  step={5}
                  value={commuteMinutesOneWay}
                  onChange={(e) => setCommuteMinutesOneWay(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>15m (Walking distance)</span>
                  <span>60m (Typical Lekki rush)</span>
                  <span>120m (Severe gridlock)</span>
                </div>
              </div>

              {/* Water Treatment Switch */}
              <div className="pt-2">
                <label className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-slate-800 block">Estate has functional RO Water Plant?</span>
                    <span className="text-[11px] text-slate-500">Untreated boreholes require personal water delivery.</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={hasWaterTreatment}
                    onChange={(e) => setHasWaterTreatment(e.target.checked)}
                    className="w-5 h-5 rounded text-[#10B981] accent-[#10B981] cursor-pointer"
                  />
                </label>
              </div>

            </div>

            {/* Right: Calculated Hidden Burden */}
            <div className="md:col-span-6 p-6 sm:p-8 space-y-6 bg-[#08182B] text-white flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono text-[#34D399] uppercase tracking-wider">
                    First-Year Reality Assessment
                  </span>
                  <span className="text-xs text-slate-400">Beyond Stated Rent</span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  {/* Monthly Fuel */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-400" />
                      <span className="text-slate-300">Annual Generator Fuel Spend:</span>
                    </div>
                    <span className="font-mono font-bold text-amber-300 text-sm">
                      {formatNaira(annualFuelCost)}
                    </span>
                  </div>

                  {/* Water haulage */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-cyan-400" />
                      <span className="text-slate-300">Annual Water Treatment / Tankers:</span>
                    </div>
                    <span className="font-mono font-bold text-cyan-300 text-sm">
                      {formatNaira(annualWaterCost)}
                    </span>
                  </div>

                  {/* Time in traffic */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-400" />
                      <span className="text-slate-300">Annual Hours Trapped in Traffic:</span>
                    </div>
                    <span className="font-mono font-bold text-orange-300 text-sm">
                      {annualCommuteHours} hrs / yr
                    </span>
                  </div>

                  {/* Standard Fees */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-slate-300">Mandatory Agency & Legal (20%):</span>
                    <span className="font-mono font-bold text-slate-200 text-sm">
                      {formatNaira(agencyLegalFees)}
                    </span>
                  </div>
                </div>

                {/* Total Hidden Shock Cost */}
                <div className="p-4 rounded-2xl bg-[#050E1A] border border-emerald-500/30 space-y-1">
                  <span className="text-[11px] font-mono uppercase text-slate-400 block">
                    Total Hidden First-Year Commitment:
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-[#34D399] font-mono">
                    {formatNaira(totalHiddenFirstYear)}
                  </div>
                  <p className="text-[11px] text-slate-300">
                    That is <strong className="text-white">{Math.round((totalHiddenFirstYear / rent) * 100)}%</strong> on top of your advertised base rent.
                  </p>
                </div>
              </div>

              {/* CTA callout */}
              <div className="pt-4">
                <button
                  onClick={onJoinWaitlist}
                  className="w-full bg-[#10B981] hover:bg-[#059669] text-white py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-950/60"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verify Before You Commit (Get Free Report)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
