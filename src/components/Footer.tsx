import React from 'react';
import { Logo } from './Logo.tsx';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onScrollTop: () => void;
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onScrollTop,
  onNavigate,
}) => {
  return (
    <footer className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-10 border-t border-white/[0.1] text-zinc-400 text-xs">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <button onClick={() => onNavigate('home')} className="cursor-pointer bg-transparent border-0 p-0">
            <Logo size={28} />
          </button>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-300">© 2026 LogicRyx AI. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            About Us
          </button>
          <button
            onClick={() => onNavigate('services')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Services & Products
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contact Details
          </button>
          <button
            onClick={onScrollTop}
            className="w-7 h-7 rounded-full bg-white/[0.1] border border-white/[0.2] flex items-center justify-center text-purple-200 hover:text-white hover:bg-white/[0.2] backdrop-blur-md transition-all cursor-pointer"
            title="Scroll to top"
          >
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
