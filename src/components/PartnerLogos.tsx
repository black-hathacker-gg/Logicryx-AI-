import React from 'react';

export const PartnerLogos: React.FC = () => {
  return (
    <div className="flex items-center gap-8 md:gap-12 flex-wrap">
      {/* BookStore */}
      <div className="flex items-center gap-2.5 opacity-90 hover:opacity-100 transition-opacity cursor-pointer">
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <line x1="12" y1="6" x2="12" y2="12" />
        </svg>
        <span className="text-[17px] font-semibold tracking-tight text-white font-sans">
          BookStore
        </span>
      </div>

      {/* zantic */}
      <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity cursor-pointer">
        <svg
          className="w-5 h-5 text-white fill-current"
          viewBox="0 0 24 24"
        >
          {/* Stylized hourglass / overlapping geometric chevron */}
          <polygon points="5,4 19,4 12,11" />
          <polygon points="12,13 19,20 5,20" />
          <rect x="10.5" y="10.5" width="3" height="3" fill="#050508" />
        </svg>
        <span className="text-[18px] font-medium tracking-tight text-white font-sans">
          zantic
        </span>
      </div>

      {/* Crona */}
      <div className="flex items-center gap-2.5 opacity-90 hover:opacity-100 transition-opacity cursor-pointer">
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          {/* Faceted diamond polygon */}
          <polygon points="6,3 18,3 22,9 12,21 2,9" strokeLinejoin="round" />
          <line x1="2" y1="9" x2="22" y2="9" />
          <line x1="12" y1="21" x2="6" y2="3" />
          <line x1="12" y1="21" x2="18" y2="3" />
        </svg>
        <span className="text-[17px] font-medium tracking-tight text-white font-sans">
          Crona
        </span>
      </div>

      {/* Mercury */}
      <div className="flex items-center gap-2.5 opacity-90 hover:opacity-100 transition-opacity cursor-pointer">
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Curved twin wave / M ribbon */}
          <path d="M3 17c2-6 5-10 8-10 4 0 6 9 10 9" />
          <path d="M7 17c2-6 5-10 8-10 3 0 4 5 6 9" opacity="0.6" />
        </svg>
        <span className="text-[17px] font-medium tracking-tight text-white font-sans">
          Mercury
        </span>
      </div>

      {/* Wager */}
      <div className="flex items-center gap-2.5 opacity-90 hover:opacity-100 transition-opacity cursor-pointer">
        <svg
          className="w-5 h-5 text-white fill-current"
          viewBox="0 0 24 24"
        >
          {/* 4-petaled floral clover / cross */}
          <circle cx="12" cy="7" r="3.2" />
          <circle cx="12" cy="17" r="3.2" />
          <circle cx="7" cy="12" r="3.2" />
          <circle cx="17" cy="12" r="3.2" />
          <circle cx="12" cy="12" r="2.2" fill="#050508" />
        </svg>
        <span className="text-[17px] font-medium tracking-tight text-white font-sans">
          Wager
        </span>
      </div>
    </div>
  );
};
