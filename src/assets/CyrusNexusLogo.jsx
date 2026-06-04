function CyrusNexusLogo({ variant = "horizontal", className = "" }) {
  const icon = (
    <svg
      viewBox="0 0 160 160"
      className={className}
      aria-label="CYRUS NEXUS logo"
      role="img"
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#C4B5FD" />
        </linearGradient>
        <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle
        cx="80"
        cy="80"
        r="72"
        fill="rgba(15, 23, 42, 0.86)"
        stroke="url(#g1)"
        strokeWidth="3"
      />
      <circle
        cx="80"
        cy="80"
        r="58"
        fill="none"
        stroke="url(#g1)"
        strokeOpacity="0.35"
        strokeWidth="2"
      />
      <path
        d="M80 28 L108 42 L108 118 L80 132 L52 118 L52 42 Z"
        fill="url(#g1)"
        opacity="0.16"
        filter="url(#glow)"
      />
      <path
        d="M80 34 L103 46 L103 114 L80 126 L57 114 L57 46 Z"
        fill="none"
        stroke="url(#g2)"
        strokeWidth="4"
        filter="url(#glow)"
      />
      <path
        d="M80 48 L95 58 V102 L80 112 L65 102 V58 Z"
        fill="none"
        stroke="url(#g1)"
        strokeWidth="5"
        strokeLinejoin="round"
        filter="url(#glow)"
      />
      <path
        d="M80 54 L84 58 V102 L80 106 L76 102 V58 Z"
        fill="rgba(248,250,252,0.9)"
        opacity="0.9"
      />
      <rect x="58" y="72" width="20" height="8" rx="4" fill="#06B6D4" />
      <rect x="82" y="72" width="20" height="8" rx="4" fill="#7C3AED" />
      <circle cx="80" cy="80" r="8" fill="#F8FAFC" filter="url(#glow)" />
    </svg>
  );

  if (variant === "icon") {
    return icon;
  }

  return (
    <div className={`brand-mark inline-flex items-center gap-3 ${className}`}>
      <div className="h-10 w-10 shrink-0 md:h-12 md:w-12">{icon}</div>
      <div className="leading-none text-slate-900 dark:text-white">
        <p className="text-[0.8rem] uppercase tracking-[0.45em] text-cyan-700 dark:text-cyan-200">
          CYRUS
        </p>
        <p className="text-[1.05rem] font-black tracking-[0.35em] text-slate-900 dark:text-white md:text-[1.2rem]">
          NEXUS
        </p>
      </div>
    </div>
  );
}

export default CyrusNexusLogo;
