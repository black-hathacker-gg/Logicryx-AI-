import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface NavbarProps {
  currentPage: 'home' | 'services' | 'about' | 'contact';
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('09:12 PM (UTC)');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: 'UTC',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        };
        const timeStr = new Intl.DateTimeFormat('en-US', options).format(now);
        setCurrentTime(`${timeStr} (UTC)`);
      } catch (e) {
        setCurrentTime('09:12 PM (UTC)');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const serviceItems = [
    'Workflow Automation',
    'AI Agents',
    'Voice Agents',
    'Business optimization and analytics',
    'App & Web Development',
  ];

  return (
    <header className="relative z-50 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 pt-6 sm:pt-8 flex items-center justify-between">
      {/* Zone 1: Brand Wordmark with transparent LX logo */}
      <button
        onClick={() => onNavigate('home')}
        className="flex items-center gap-2 group cursor-pointer bg-transparent border-0 p-0"
        title="Go to Home"
      >
        <Logo size={42} />
      </button>

      {/* Zone 2: Centered Floating Navigation Pill (Frosted Glassmorphism) */}
      <nav className="hidden md:flex items-center relative">
        <div className="flex items-center gap-7 px-6 py-2.5 rounded-full border border-white/[0.18] bg-black/25 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.37)]">
          {/* Services with dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                onNavigate('services');
                setServicesOpen(!servicesOpen);
              }}
              onMouseEnter={() => setServicesOpen(true)}
              className={`flex items-center gap-1.5 text-[14px] font-medium transition-all cursor-pointer select-none ${
                currentPage === 'services'
                  ? 'text-white font-semibold drop-shadow-[0_0_8px_rgba(216,180,254,0.6)]'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  servicesOpen ? 'rotate-180 text-white' : 'text-zinc-400'
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {servicesOpen && (
              <div
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute top-full left-0 mt-3 w-72 rounded-2xl bg-black/75 border border-white/[0.2] p-2.5 shadow-[0_16px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150"
              >
                <div className="px-3 py-2 text-[11px] font-semibold text-purple-300 uppercase tracking-wider font-mono">
                  Our Services & Products
                </div>
                {serviceItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setServicesOpen(false);
                      onNavigate('services');
                    }}
                    className="w-full text-left px-3 py-2.5 rounded-xl text-xs text-zinc-200 hover:bg-white/[0.12] hover:text-white transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <span>{item}</span>
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-purple-300" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* About Us (Navigates to dedicated About page) */}
          <button
            onClick={() => onNavigate('about')}
            className={`text-[14px] font-medium transition-all cursor-pointer ${
              currentPage === 'about'
                ? 'text-white font-semibold drop-shadow-[0_0_8px_rgba(216,180,254,0.6)]'
                : 'text-zinc-300 hover:text-white'
            }`}
          >
            About Us
          </button>

          {/* Product (Navigates to Services) */}
          <button
            onClick={() => onNavigate('services')}
            className={`text-[14px] font-medium transition-all cursor-pointer ${
              currentPage === 'services'
                ? 'text-white font-semibold drop-shadow-[0_0_8px_rgba(216,180,254,0.6)]'
                : 'text-zinc-300 hover:text-white'
            }`}
          >
            Product
          </button>

          {/* Contact (Navigates to Contact page) */}
          <button
            onClick={() => onNavigate('contact')}
            className={`text-[14px] font-medium transition-all cursor-pointer ${
              currentPage === 'contact'
                ? 'text-white font-semibold drop-shadow-[0_0_8px_rgba(216,180,254,0.6)]'
                : 'text-zinc-300 hover:text-white'
            }`}
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Zone 3: Time Indicator & CTA Button (Navigates to Contact page) */}
      <div className="flex items-center gap-4 sm:gap-6">
        <span className="hidden sm:inline-block text-[13px] md:text-[14px] text-zinc-200 font-normal tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
          {currentTime}
        </span>
        <button
          onClick={() => onNavigate('contact')}
          className="relative px-5 sm:px-6 py-2.5 rounded-xl sm:rounded-2xl text-[13px] sm:text-[14px] font-semibold text-white 
                     bg-gradient-to-r from-[#7c3aed] via-[#9333ea] to-[#a855f7]
                     shadow-[0_0_24px_rgba(147,51,234,0.45)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)]
                     hover:brightness-110 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          Get Started
        </button>
      </div>
    </header>
  );
};
