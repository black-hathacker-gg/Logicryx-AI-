import React from 'react';

interface MetricCardProps {
  value: string;
  year?: string;
  label: string;
  onClick?: () => void;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  value,
  year = '2026',
  label,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group relative w-48 sm:w-52 h-[132px] rounded-2xl p-4 sm:p-5 flex flex-col justify-between
                 bg-white/[0.08] hover:bg-white/[0.13] border border-white/[0.18] hover:border-purple-300/40
                 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.37)]
                 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_0_24px_rgba(168,85,247,0.35)]
                 transition-all duration-300 cursor-pointer select-none"
    >
      {/* Top row: Value + Sparkle / 8-point star */}
      <div className="flex items-start justify-between">
        <span className="text-4xl sm:text-[44px] font-bold text-white tracking-tight leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
          {value}
        </span>
        {/* Purple 8-point asterisk symbol */}
        <span className="text-xl sm:text-2xl text-[#d8b4fe] leading-none select-none font-bold drop-shadow-[0_0_10px_rgba(216,180,254,0.8)] group-hover:rotate-45 transition-transform duration-500">
          ✦
        </span>
      </div>

      {/* Middle/Bottom row: Year tag & Label */}
      <div className="flex flex-col">
        <div className="text-[11px] text-zinc-300 font-mono text-right self-end -mt-1 mb-1">
          ({year})
        </div>
        <span className="text-xs sm:text-[13px] text-zinc-200 font-medium tracking-normal leading-tight">
          {label}
        </span>
      </div>
    </div>
  );
};
