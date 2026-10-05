import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { GlobeIcon } from './GlobeIcon.tsx';
import { ClientAvatars } from './ClientAvatars.tsx';
import { MetricCard } from './MetricCard.tsx';

interface HeroSectionProps {
  onScrollToContact: () => void;
  onScrollDown: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToContact,
  onScrollDown,
}) => {
  return (
    <section className="relative z-10 min-h-[calc(100vh-80px)] w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 pt-6 sm:pt-8 pb-10 flex flex-col justify-between bg-transparent">
      {/* Main Hero Body */}
      <div className="pt-2 sm:pt-4 lg:pt-6 flex flex-col">
        {/* Globe Kicker Badge */}
        <div className="flex items-center gap-3.5 mb-5 sm:mb-6">
          <GlobeIcon className="w-6 h-6 text-[#c084fc] drop-shadow-[0_0_10px_rgba(192,132,252,0.6)]" />
          <div className="flex flex-col text-[13px] sm:text-[14px] leading-tight font-normal text-zinc-200">
            <span>Smart automation for</span>
            <span>a more efficient tomorrow.</span>
          </div>
        </div>

        {/* Massive Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[88px] font-semibold tracking-[-0.035em] leading-[1.04] text-white select-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
          <span className="block">AI Automation</span>
          <span className="block">Agency</span>
          <span className="block">
            Built for{' '}
            <span className="font-serif-italic font-normal italic text-[#e9d5ff] tracking-tight drop-shadow-[0_0_24px_rgba(233,213,255,0.4)]">
              Real Growth
            </span>
          </span>
        </h1>

        {/* Subtitle Paragraph */}
        <p className="mt-6 sm:mt-7 text-zinc-300 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-[530px] font-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
          We design, build, and scale AI automation solutions that save time, reduce costs, and help businesses work smarter — not harder.
        </p>

        {/* Action Row: CTA Button + Happy Clients Proof */}
        <div className="mt-8 flex flex-wrap items-center gap-6 sm:gap-8">
          {/* Get started button with right arrow in circle */}
          <button
            onClick={onScrollToContact}
            className="group relative pl-7 pr-2.5 py-2.5 rounded-full flex items-center gap-4 
                       bg-gradient-to-r from-[#7c3aed] via-[#9333ea] to-[#a855f7] 
                       text-white font-medium text-sm sm:text-[15px] 
                       shadow-[0_0_30px_rgba(147,51,234,0.5)] hover:shadow-[0_0_42px_rgba(168,85,247,0.75)] 
                       hover:brightness-110 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>Get started</span>
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-zinc-950 font-bold shadow-sm group-hover:translate-x-0.5 transition-transform duration-200">
              <ArrowRight size={17} strokeWidth={2.5} />
            </div>
          </button>

          {/* 3 Avatars + 50+ Happy Clients */}
          <div className="flex items-center gap-3.5">
            <ClientAvatars />
            <div className="flex flex-col text-left">
              <span className="text-[14px] font-bold text-white leading-tight drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                50+ Happy Clients
              </span>
            </div>
          </div>
        </div>

        {/* Metric Cards Row (Frosted Glassmorphism) */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-4 sm:gap-5">
          <MetricCard
            value="50+"
            year="2026"
            label="Projects delivered"
            onClick={onScrollDown}
          />
          <MetricCard
            value="98%"
            year="2026"
            label="Client satisfaction"
            onClick={onScrollDown}
          />
        </div>
      </div>

      {/* Bottom Footer Area */}
      <div className="mt-12 sm:mt-16 pt-6 flex flex-row items-center justify-between gap-6 border-t border-white/[0.08]">
        {/* Left Side: EST 2026 | Live In Details pill with frosted glass */}
        <div className="flex items-center">
          <button
            onClick={onScrollDown}
            className="group px-4 py-2.5 rounded-xl border border-white/[0.18] bg-white/[0.08] hover:bg-white/[0.14] 
                        backdrop-blur-2xl flex items-center gap-3 text-xs hover:border-purple-300/40 
                        hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all cursor-pointer 
                        shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_20px_rgba(0,0,0,0.3)]"
          >
            <span className="text-white font-semibold tracking-wider font-mono">
              EST <span className="text-zinc-200 font-sans">2026</span>
            </span>
            <span className="w-px h-3.5 bg-white/20" />
            <span className="text-[#d8b4fe] font-medium group-hover:text-white transition-colors">
              Live In Details
            </span>
          </button>
        </div>

        {/* Right Side: Scroll Down Affordance */}
        <button
          onClick={onScrollDown}
          className="flex items-center gap-2.5 text-zinc-300 hover:text-white text-xs sm:text-[13px] font-medium transition-colors cursor-pointer group"
        >
          <span>Explore Services</span>
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/[0.12] hover:bg-[#9333ea] border border-white/[0.2] backdrop-blur-xl text-white flex items-center justify-center shadow-[0_0_14px_rgba(168,85,247,0.4)] group-hover:scale-110 transition-all">
            <ArrowDown size={14} strokeWidth={2.5} />
          </div>
        </button>
      </div>
    </section>
  );
};
