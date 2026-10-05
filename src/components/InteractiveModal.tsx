import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Send } from 'lucide-react';

interface InteractiveModalProps {
  isOpen: boolean;
  type: 'get-started' | 'contact' | 'details' | null;
  onClose: () => void;
}

export const InteractiveModal: React.FC<InteractiveModalProps> = ({
  isOpen,
  type,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState('agentic-workflows');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    notes: '',
  });

  if (!isOpen || !type) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-3xl bg-[#0d0918] border border-[#3b1d70] p-6 sm:p-8 text-white shadow-[0_0_60px_rgba(124,58,237,0.3)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X size={16} />
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 mb-4 animate-bounce">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
            <p className="text-zinc-400 text-sm max-w-xs">
              Our AI automation architect will reach out within 15 minutes with a tailored blueprint.
            </p>
          </div>
        ) : type === 'details' ? (
          <div>
            <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles size={14} /> Agency Performance Ledger
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Live Agency Status (EST 2026)</h3>
            <div className="space-y-3.5 mb-6 text-sm text-zinc-300">
              <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-800/30 flex justify-between items-center">
                <span>Autonomous Pipeline Uptime</span>
                <span className="font-mono text-purple-300 font-bold">99.98%</span>
              </div>
              <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-800/30 flex justify-between items-center">
                <span>Avg. Workflow Latency Reduction</span>
                <span className="font-mono text-purple-300 font-bold">78.4%</span>
              </div>
              <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-800/30 flex justify-between items-center">
                <span>Enterprise Hours Saved / Mo</span>
                <span className="font-mono text-purple-300 font-bold">14,200+ hrs</span>
              </div>
              <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-800/30 flex justify-between items-center">
                <span>Verified Client NPS</span>
                <span className="font-mono text-purple-300 font-bold">94 / 100</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-sm hover:brightness-110 transition-all cursor-pointer"
            >
              Close Details
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles size={14} /> {type === 'get-started' ? 'Build Your AI Future' : 'Direct Agency Contact'}
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">
              {type === 'get-started' ? 'Kickstart Your AI Automation' : 'Connect with our Leadership'}
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mb-5">
              Tell us what workflow or agency system you want to automate.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Target Automation Scope
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'agentic-workflows', label: 'Agentic Workflows' },
                    { id: 'customer-ops', label: 'Customer Ops / Support' },
                    { id: 'sales-lead-gen', label: 'Sales & Lead Outreach' },
                    { id: 'custom-models', label: 'Custom LLM Architecture' },
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setSelectedGoal(item.id)}
                      className={`p-2.5 rounded-xl border text-left font-medium transition-all ${
                        selectedGoal === item.id
                          ? 'border-purple-500 bg-purple-950/40 text-white shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                          : 'border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">Company / Project Overview</label>
                <input
                  type="text"
                  placeholder="E.g. scaling sales pipeline across 10 reps"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 text-white font-semibold text-sm shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Initiate Transformation</span>
                <Send size={14} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
