"use client";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-3">
      {/* Exquisite nested SVG replicating the precise visual style of the EstateX 3D emblem */}
      <svg
        width={compact ? "38" : "48"}
        height={compact ? "38" : "48"}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-500 group-hover:scale-105"
        aria-hidden="true"
      >
        <defs>
          {/* Gold Gradient */}
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C8A24F" />
            <stop offset="50%" stopColor="#E6C87E" />
            <stop offset="100%" stopColor="#9A7A33" />
          </linearGradient>

          {/* Platinum / Silver Gradient */}
          <linearGradient id="silverGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8A95A5" />
            <stop offset="50%" stopColor="#CFD6DF" />
            <stop offset="100%" stopColor="#5A6472" />
          </linearGradient>

          {/* Drop Shadow Filter */}
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.6"/>
          </filter>
        </defs>

        {/* Outer dark backing coin to hold contrast */}
        <circle cx="50" cy="50" r="48" fill="#10141c" stroke="url(#goldGrad)" strokeWidth="1.2" opacity="0.45" />

        {/* EMBLEM COMPOSITION */}
        <g filter="url(#shadow)">
          {/* Building Silhouette 1 (Silver) */}
          <rect x="42" y="38" width="10" height="28" fill="url(#silverGrad)" />
          <polygon points="42,38 47,31 52,38" fill="url(#silverGrad)" />
          {/* Windows on Silo 1 */}
          <rect x="44" y="44" width="2" height="3" fill="#10141c" opacity="0.6" />
          <rect x="48" y="44" width="2" height="3" fill="#10141c" opacity="0.6" />
          <rect x="44" y="50" width="2" height="3" fill="#10141c" opacity="0.6" />
          <rect x="48" y="50" width="2" height="3" fill="#10141c" opacity="0.6" />

          {/* Building Silhouette 2 (Silver - Taller Middle) */}
          <rect x="53" y="24" width="9" height="42" fill="url(#silverGrad)" />
          <polygon points="53,24 57.5,15 62,24" fill="url(#silverGrad)" />
          {/* Windows on Silo 2 */}
          <rect x="55" y="30" width="2" height="4" fill="#10141c" opacity="0.6" />
          <rect x="58" y="30" width="2" height="4" fill="#10141c" opacity="0.6" />
          <rect x="55" y="38" width="2" height="4" fill="#10141c" opacity="0.6" />
          <rect x="58" y="38" width="2" height="4" fill="#10141c" opacity="0.6" />
          <rect x="55" y="46" width="2" height="4" fill="#10141c" opacity="0.6" />
          <rect x="58" y="46" width="2" height="4" fill="#10141c" opacity="0.6" />

          {/* Golden Letter E */}
          <path
            d="M 28 26 
               H 48 
               V 34 
               H 36 
               V 43 
               H 45 
               V 51 
               H 36 
               V 60 
               H 49 
               V 68 
               H 28 
               Z"
            fill="url(#goldGrad)"
          />

          {/* Golden Letter X crossing */}
          <path
            d="M 52 68 
               L 68 34 
               H 76 
               L 60 68 
               Z"
            fill="url(#goldGrad)"
          />
          <path
            d="M 68 68 
               L 53 36 
               H 61 
               L 76 68 
               Z"
            fill="url(#goldGrad)"
          />
        </g>
      </svg>

      <div className="leading-none text-left">
        <span
          className={`block font-display font-bold tracking-wide transition-all duration-500 ${
            compact ? "text-base text-paper" : "text-xl text-paper"
          }`}
        >
          Estate<span className="text-brass">X</span>
        </span>
        <span
          className={`block font-body font-bold tracking-[0.28em] uppercase text-brass ${
            compact ? "text-[8px]" : "text-[9px]"
          }`}
        >
          Real Estate Solutions
        </span>
        <span className="block font-body text-[7px] tracking-[0.16em] uppercase text-mute/80 mt-0.5">
          Buy · Sell · Invest
        </span>
      </div>
    </a>
  );
}
