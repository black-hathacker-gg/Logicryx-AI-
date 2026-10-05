import React from 'react';

export const GlobeIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7 text-[#b072ff]' }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Outer Circle */}
      <circle cx="12" cy="12" r="9.5" />
      {/* Center Equator */}
      <line x1="2.5" y1="12" x2="21.5" y2="12" />
      {/* Upper Latitude */}
      <path d="M4.5 7.5c2.5 1.5 5 2.2 7.5 2.2s5-.7 7.5-2.2" />
      {/* Lower Latitude */}
      <path d="M4.5 16.5c2.5-1.5 5-2.2 7.5-2.2s5 .7 7.5 2.2" />
      {/* Vertical Meridian */}
      <ellipse cx="12" cy="12" rx="4.2" ry="9.5" />
    </svg>
  );
};
