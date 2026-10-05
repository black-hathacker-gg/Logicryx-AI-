import React, { useState } from 'react';
import { Calculator, Sparkles, TrendingUp, Clock } from 'lucide-react';

export const RoiCalculator: React.FC<{ onClaimAudit: () => void }> = ({ onClaimAudit }) => {
  const [teamSize, setTeamSize] = useState<number>(25);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(12);
  const [hourlyRate, setHourlyRate] = useState<number>(65);

  // Compute metrics
  const annualHoursWasted = teamSize * hoursPerWeek * 48; // 48 work weeks
  const annualCapitalCost = annualHoursWasted * hourlyRate;
  const automatedSavings = Math.round(annualCapitalCost * 0.72); // 72% autonomous recovery
  const hoursReclaimed = Math.round(annualHoursWasted * 0.72);

  return (
    <section className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-12 sm:py-16">
      <div className="rounded-3xl bg-white/[0.07] border border-white/[0.16] p-8 sm:p-12 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_16px_50px_rgba(0,0,0,0.35)]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          {/* Left Column: Interactive Sliders */}
          <div className="w-full lg:max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-300 mb-3 drop-shadow-[0_0_8px_rgba(216,180,254,0.5)]">
              <Calculator size={14} /> INTERACTIVE AGENCY SIMULATOR
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
              Estimate Your Operational Dividend
            </h3>
            <p className="text-sm text-zinc-300 mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
              Adjust parameters to project autonomous productivity gains across your agency or enterprise operations.
            </p>

            <div className="space-y-6">
              {/* Slider 1: Team Size */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold mb-2">
                  <span className="text-zinc-200">Knowledge Workers / Team Size</span>
                  <span className="text-purple-200 font-mono text-sm">{teamSize} members</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-purple-400 bg-white/20 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Slider 2: Manual Repetitive Hours */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold mb-2">
                  <span className="text-zinc-200">Repetitive Workflow Hours / Week per Person</span>
                  <span className="text-purple-200 font-mono text-sm">{hoursPerWeek} hrs/wk</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="25"
                  step="1"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full accent-purple-400 bg-white/20 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Slider 3: Hourly Rate */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold mb-2">
                  <span className="text-zinc-200">Average Blended Hourly Cost</span>
                  <span className="text-purple-200 font-mono text-sm">${hourlyRate}/hr</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="150"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full accent-purple-400 bg-white/20 h-2 rounded-lg cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Computed Stat Box (Transparent Glass) */}
          <div className="w-full lg:max-w-md p-6 sm:p-8 rounded-3xl bg-white/[0.08] border border-white/[0.18] backdrop-blur-2xl flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.3)]">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-300 block mb-1">
                  PROJECTED ANNUAL CAPITAL SAVED
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
                  ${automatedSavings.toLocaleString()}
                </div>
                <span className="text-[11px] text-zinc-300 block mt-1">Based on 72% autonomous workflow resolution</span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/[0.12]">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-300 mb-1">
                    <Clock size={12} className="text-purple-300" /> Reclaimed Time
                  </div>
                  <div className="text-lg font-bold text-white font-mono">
                    {hoursReclaimed.toLocaleString()} hrs
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-300 mb-1">
                    <TrendingUp size={12} className="text-purple-300" /> Velocity Gain
                  </div>
                  <div className="text-lg font-bold text-white font-mono">
                    3.6x Faster
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onClaimAudit}
              className="mt-8 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#7c3aed] via-[#9333ea] to-[#a855f7] 
                         text-white font-semibold text-sm shadow-[0_0_25px_rgba(147,51,234,0.45)] hover:brightness-110 
                         active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles size={16} />
              <span>Claim Free Automation Architecture Audit</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
