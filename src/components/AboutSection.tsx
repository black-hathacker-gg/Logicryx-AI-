import React from 'react';
import { ArrowLeft, Sparkles, Target, Zap, Rocket, ShieldCheck, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onBackToHome: () => void;
  onNavigateToContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onBackToHome,
  onNavigateToContact,
}) => {
  return (
    <section className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-12 sm:py-16">
      {/* Top Navigation Row: Back to Home Button (matching reference image) */}
      <div className="mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.15] 
                      backdrop-blur-2xl border border-white/[0.18] text-xs sm:text-sm text-zinc-200 hover:text-white 
                      transition-all cursor-pointer group shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
        >
          <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#d8b4fe] mb-3 drop-shadow-[0_0_8px_rgba(216,180,254,0.5)]">
          <Sparkles size={14} /> ABOUT LOGICRYX
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] leading-tight">
          Practical AI Implementation. Real-World Growth.
        </h1>
      </div>

      {/* Main Content Grid: Frosted Glass Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Card 1: Core Identity */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.07] hover:bg-white/[0.1] border border-white/[0.16] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_12px_40px_rgba(0,0,0,0.35)] transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center text-purple-200 mb-6 backdrop-blur-md">
              <Zap size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
              Who We Are
            </h2>
            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
              Logicryx is an AI automation agency helping businesses transform the way they operate through intelligent systems, AI agents, and workflow automation.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/[0.1] text-xs font-mono text-purple-300">
            Intelligent Systems • AI Agents • Automation
          </div>
        </div>

        {/* Card 2: Custom Solutions */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.07] hover:bg-white/[0.1] border border-white/[0.16] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_12px_40px_rgba(0,0,0,0.35)] transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-400/30 flex items-center justify-center text-indigo-200 mb-6 backdrop-blur-md">
              <ShieldCheck size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
              What We Build
            </h2>
            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
              We design and build custom AI solutions that reduce manual work, improve efficiency, and scale business operations. Our services include AI chatbots and voice agents, business process automation, CRM and workflow integration, and AI-powered digital systems tailored to modern businesses.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/[0.1] text-xs font-mono text-purple-300">
            Chatbots • Voice • Process Automation • CRM Sync
          </div>
        </div>

        {/* Card 3: The Mission & Goal */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.07] hover:bg-white/[0.1] border border-white/[0.16] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_12px_40px_rgba(0,0,0,0.35)] transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center text-purple-200 mb-6 backdrop-blur-md">
              <Target size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
              Our Goal
            </h2>
            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
              Our goal is to help companies move from traditional manual operations to fully automated, AI-driven systems that run faster, smarter, and more efficiently.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/[0.1] text-xs font-mono text-purple-300">
            Faster • Smarter • Highly Efficient
          </div>
        </div>

        {/* Card 4: Practical Results Over Hype */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.07] hover:bg-white/[0.1] border border-white/[0.16] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_12px_40px_rgba(0,0,0,0.35)] transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/15 border border-fuchsia-400/30 flex items-center justify-center text-fuchsia-200 mb-6 backdrop-blur-md">
              <Rocket size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
              Real-World Results
            </h2>
            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
              At Logicryx, we focus on practical AI implementation that delivers real-world results — not just concepts. We work with startups and growing businesses to unlock productivity, increase conversions, and build scalable digital infrastructure.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/[0.1] text-xs font-mono text-purple-300">
            Productivity • Conversions • Scalable Infrastructure
          </div>
        </div>
      </div>

      {/* Tagline & Call to Action Banner (Frosted Glass) */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-white/[0.09] to-white/[0.05] border border-white/[0.18] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_16px_50px_rgba(0,0,0,0.4)] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Build smarter. Automate faster. Scale with AI.
          </span>
          <p className="text-zinc-300 text-xs sm:text-sm mt-1.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
            Partner with Logicryx to engineer your autonomous future.
          </p>
        </div>
        <button
          onClick={onNavigateToContact}
          className="shrink-0 px-8 py-3.5 rounded-2xl font-semibold text-sm text-white 
                     bg-gradient-to-r from-[#7c3aed] via-[#9333ea] to-[#a855f7] 
                     shadow-[0_0_25px_rgba(147,51,234,0.45)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] 
                     hover:brightness-110 active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-2.5"
        >
          <span>Get in Touch</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};
