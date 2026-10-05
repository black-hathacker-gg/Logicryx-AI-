import React from 'react';
import { Bot, Mic, Zap, TrendingUp, Code2, ArrowUpRight, CheckCircle, ArrowLeft } from 'lucide-react';

interface ServicesOverviewProps {
  onSelectService: () => void;
  onBackToHome?: () => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  onSelectService,
  onBackToHome,
}) => {
  const services = [
    {
      id: 'workflow-automation',
      title: 'Workflow Automation',
      kicker: '01. Process Autopilot',
      description: 'Streamline repetitive tasks, ERP integrations, and cross-platform data flows with zero manual bottlenecks.',
      deliverables: ['Custom API integrations', 'Data sync & automated ETL', 'Document & invoice processing'],
      metrics: '75% operational speedup',
      icon: Zap,
    },
    {
      id: 'ai-agents',
      title: 'AI Agents',
      kicker: '02. Autonomous Intelligence',
      description: 'Deploy goal-driven autonomous agents capable of research, decision-making, email triage, and CRM updates.',
      deliverables: ['Multi-agent orchestration', 'Custom tool execution', 'Human-in-the-loop oversight'],
      metrics: '24/7 autonomous ops',
      icon: Bot,
    },
    {
      id: 'voice-agents',
      title: 'Voice Agents',
      kicker: '03. Conversational AI',
      description: 'Human-parity interactive voice agents for inbound support, appointment setting, and customer qualification with <350ms latency.',
      deliverables: ['Natural conversational speech', 'Direct CRM call logging', 'Omnichannel telephony routing'],
      metrics: '<350ms response latency',
      icon: Mic,
    },
    {
      id: 'analytics',
      title: 'Business optimization and analytics',
      kicker: '04. Data Intelligence',
      description: 'Deep business intelligence, predictive pipeline modeling, and automated KPI reporting dashboards.',
      deliverables: ['Predictive revenue models', 'Executive performance dashboards', 'Anomaly & churn alerts'],
      metrics: '10x faster insights',
      icon: TrendingUp,
    },
    {
      id: 'app-web-dev',
      title: 'App & Web Development',
      kicker: '05. High-Performance Engineering',
      description: 'Scalable modern web applications, client portals, and SaaS platforms engineered with cutting-edge tech stacks.',
      deliverables: ['Next-gen React & TypeScript apps', 'Cloud-native backend architectures', 'Mobile-responsive modern UI/UX'],
      metrics: 'Sub-second load times',
      icon: Code2,
    },
  ];

  return (
    <section className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-12 sm:py-16">
      {/* Top Navigation Row: Back to Home Button (matching user reference image 4) */}
      {onBackToHome && (
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
      )}

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#d8b4fe] mb-3 drop-shadow-[0_0_8px_rgba(216,180,254,0.5)]">
            CORE AGENCY SERVICES & PRODUCTS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            Services Built for High-Impact Growth
          </h2>
        </div>
        <p className="text-zinc-300 text-sm md:text-base max-w-md drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
          We architect and deploy end-to-end solutions tailored for your business velocity.
        </p>
      </div>

      {/* Grid of 5 Transparent Frosted Glass Cards (matching reference image) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((svc) => {
          const Icon = svc.icon;
          return (
            <div
              key={svc.id}
              onClick={onSelectService}
              className="group p-7 rounded-3xl bg-white/[0.07] hover:bg-white/[0.12] 
                          border border-white/[0.16] hover:border-purple-300/50 
                          backdrop-blur-2xl transition-all duration-300 
                          shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_12px_40px_rgba(0,0,0,0.35)] 
                          hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_0_30px_rgba(168,85,247,0.35)] 
                          cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono text-purple-300 font-semibold">{svc.kicker}</span>
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.1] border border-white/[0.2] flex items-center justify-center text-purple-200 group-hover:scale-110 group-hover:bg-purple-600/40 transition-all backdrop-blur-md">
                    <Icon size={20} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-purple-200 transition-colors drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                  {svc.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed mb-5">
                  {svc.description}
                </p>

                <div className="space-y-2 mb-6">
                  {svc.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-zinc-200">
                      <CheckCircle size={13} className="text-purple-300 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.12] flex items-center justify-between text-xs">
                <span className="font-mono text-purple-200 font-semibold">{svc.metrics}</span>
                <span className="text-zinc-300 group-hover:text-white flex items-center gap-1 font-medium transition-colors">
                  Start Project <ArrowUpRight size={13} />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
