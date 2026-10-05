import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 38 }) => {
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* 
        Transparent stylized LX emblem matching the user's uploaded mark:
        - Angular chamfered L
        - Intersecting X with iconic lower-left sharp talon/blade
        - Sleek purple gradient with 3D chamfer highlights
      */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105 drop-shadow-[0_0_16px_rgba(147,51,234,0.6)]"
      >
        <defs>
          {/* Main front face gradient */}
          <linearGradient id="lx-front-grad" x1="15%" y1="15%" x2="85%" y2="85%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#581c87" />
          </linearGradient>
          {/* Top highlight chamfer gradient */}
          <linearGradient id="lx-highlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d8b4fe" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7e22ce" />
          </linearGradient>
          {/* Blade accent gradient */}
          <linearGradient id="lx-blade-grad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="70%" stopColor="#7e22ce" />
            <stop offset="100%" stopColor="#4c1d95" />
          </linearGradient>
        </defs>

        {/* --- LETTER L --- */}
        {/* L Face */}
        <polygon
          points="15,31 29,17 29,59 55,59 47,71 15,71"
          fill="url(#lx-front-grad)"
        />
        {/* L Top-Left Chamfer Edge */}
        <polygon
          points="15,31 29,17 29,23 20,32"
          fill="url(#lx-highlight)"
          opacity="0.85"
        />

        {/* --- LETTER X --- */}
        {/* Upper-Left to Lower-Right main diagonal body */}
        <polygon
          points="37,30 58,30 85,71 64,71"
          fill="url(#lx-front-grad)"
        />
        {/* Upper-Right arm */}
        <polygon
          points="66,30 85,30 63,60 52,48"
          fill="url(#lx-front-grad)"
        />
        {/* Lower-Left Talon / Sharp Blade */}
        <polygon
          points="53,51 60,61 44,79 34,86 44,73"
          fill="url(#lx-blade-grad)"
        />

        {/* Upper-Left Arm Top Bevel Highlight */}
        <polygon
          points="37,30 58,30 55,33 41,33"
          fill="url(#lx-highlight)"
          opacity="0.9"
        />
        {/* Upper-Right Arm Top Bevel Highlight */}
        <polygon
          points="66,30 85,30 81,33 69,33"
          fill="url(#lx-highlight)"
          opacity="0.9"
        />

        {/* Center intersection seam accent */}
        <line
          x1="52"
          y1="51"
          x2="60"
          y2="61"
          stroke="#c084fc"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};
