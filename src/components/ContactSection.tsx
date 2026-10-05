import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Mail, Linkedin, ArrowUpRight, Sparkles, ArrowLeft } from 'lucide-react';

interface ContactSectionProps {
  onBackToHome?: () => void;
}

// User's connected Google Sheet Web App Webhook URL
const GOOGLE_SHEET_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycby0YMX0pHENkvodd2-z3aeXaIsTcdNZukJEbvvO4O-paPC_NEgWZZlqyxl_Ghk4VeUv3A/exec';

export const ContactSection: React.FC<ContactSectionProps> = ({ onBackToHome }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get('name') as string) || '';
    const email = (formData.get('email') as string) || '';
    const message = (formData.get('message') as string) || '';

    try {
      // 1. Submit to Web3Forms for instant email notification
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      // 2. Silently & reliably log the lead directly to user's Google Sheet
      try {
        await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            message,
            source: 'LX AI Automation Website',
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (sheetErr) {
        console.warn('Google Sheet dispatch notice:', sheetErr);
      }

      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again or reach out on WhatsApp/Email.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Unable to connect to server. Please reach us via WhatsApp or Gmail directly.');
    }
  };

  return (
    <section id="contact-section" className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-12 sm:py-16">
      {/* Top Navigation Row: Back to Home Button */}
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Direct Contact Details */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#d8b4fe] mb-3 drop-shadow-[0_0_8px_rgba(216,180,254,0.5)]">
              <Sparkles size={14} /> DIRECT CHANNELS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
              Get in Touch with Us
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
              Ready to transform your business with autonomous workflows, intelligent AI agents, or modern web apps? Connect directly with our team.
            </p>

            {/* Direct Contact Cards (Transparent Frosted Glass) */}
            <div className="space-y-4">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/8801911028459"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 sm:p-5 rounded-2xl bg-white/[0.07] hover:bg-white/[0.13] border border-white/[0.16] 
                            hover:border-[#25d366]/60 hover:shadow-[0_0_24px_rgba(37,211,102,0.25)] 
                            backdrop-blur-2xl transition-all flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.18)]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#25d366]/15 border border-[#25d366]/40 flex items-center justify-center text-[#25d366] group-hover:scale-110 transition-transform backdrop-blur-md">
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-300 uppercase tracking-wider block font-mono">
                      INSTANT WHATSAPP
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white group-hover:text-[#25d366] transition-colors drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                      +8801911028459
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-zinc-300 group-hover:text-white transition-colors" />
              </a>

              {/* Gmail Card */}
              <a
                href="mailto:logicryxai@gmail.com"
                className="group p-4 sm:p-5 rounded-2xl bg-white/[0.07] hover:bg-white/[0.13] border border-white/[0.16] 
                            hover:border-purple-300/60 hover:shadow-[0_0_24px_rgba(168,85,247,0.25)] 
                            backdrop-blur-2xl transition-all flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.18)]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-400/40 flex items-center justify-center text-purple-200 group-hover:scale-110 transition-transform backdrop-blur-md">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-300 uppercase tracking-wider block font-mono">
                      EMAIL ADDRESS
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white group-hover:text-purple-200 transition-colors drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                      logicryxai@gmail.com
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-zinc-300 group-hover:text-white transition-colors" />
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/company/logicryx-ai-automation-saas-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 sm:p-5 rounded-2xl bg-white/[0.07] hover:bg-white/[0.13] border border-white/[0.16] 
                            hover:border-[#0a66c2]/70 hover:shadow-[0_0_24px_rgba(10,102,194,0.25)] 
                            backdrop-blur-2xl transition-all flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.18)]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0a66c2]/15 border border-[#0a66c2]/40 flex items-center justify-center text-[#38bdf8] group-hover:scale-110 transition-transform backdrop-blur-md">
                    <Linkedin size={22} />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-300 uppercase tracking-wider block font-mono">
                      LINKEDIN COMPANY
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#38bdf8] transition-colors truncate block max-w-[200px] sm:max-w-xs drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                      logicryx-ai-automation-saas-solutions
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-zinc-300 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Web3Form Styled in Frosted Glass */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-10 rounded-3xl bg-white/[0.07] border border-white/[0.16] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_16px_50px_rgba(0,0,0,0.35)] relative">
            <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
              Send us a Message
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm mb-6 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
              Fill in your details below and we will get back to you within 24 hours.
            </p>

            {status === 'success' ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple-500/25 border border-purple-400/50 flex items-center justify-center text-purple-200 mb-4 animate-bounce">
                  <CheckCircle2 size={34} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Message Delivered!</h4>
                <p className="text-zinc-200 text-sm max-w-sm mb-6">
                  Thank you for reaching out to LogicRyx AI. We have received your submission and our team will be in touch shortly.
                </p>

                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 rounded-xl bg-white/[0.1] hover:bg-white/[0.18] border border-white/[0.2] text-purple-200 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Access Key provided by user */}
                <input
                  type="hidden"
                  name="access_key"
                  value="7e7f1251-8064-4af9-be3e-6e6d4cdc29f8"
                />
                <input
                  type="hidden"
                  name="from_name"
                  value="LogicRyx AI Automation Agency"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New Project Inquiry — LogicRyx AI Agency"
                />

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-200 mb-1.5 uppercase tracking-wider font-mono">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.09] border border-white/[0.18] focus:border-purple-300 focus:bg-white/[0.12] backdrop-blur-xl text-white text-sm placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-purple-400/50 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-200 mb-1.5 uppercase tracking-wider font-mono">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.09] border border-white/[0.18] focus:border-purple-300 focus:bg-white/[0.12] backdrop-blur-xl text-white text-sm placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-purple-400/50 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-200 mb-1.5 uppercase tracking-wider font-mono">
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your workflow or development requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.09] border border-white/[0.18] focus:border-purple-300 focus:bg-white/[0.12] backdrop-blur-xl text-white text-sm placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-purple-400/50 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Error Banner if any */}
                {status === 'error' && (
                  <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/50 text-red-200 text-xs">
                    {errorMessage}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white 
                             bg-gradient-to-r from-[#7c3aed] via-[#9333ea] to-[#a855f7] 
                             shadow-[0_0_25px_rgba(147,51,234,0.45)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] 
                             hover:brightness-110 active:scale-[0.99] transition-all duration-200 cursor-pointer 
                             flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <span>Submit Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
