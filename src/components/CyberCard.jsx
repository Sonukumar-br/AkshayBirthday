import React from 'react';

export default function CyberCard({
  children,
  className = "",
  glowColor = "cyan", // cyan, green, orange, purple
  accentBadge = null,
  onClick = null,
}) {
  const glowClasses = {
    cyan: "hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]",
    green: "hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]",
    orange: "hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]",
    purple: "hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]",
  };

  return (
    <div
      onClick={onClick}
      className={`group relative glass-panel rounded-xl p-5 sm:p-6 border border-slate-800/90 transition-all duration-300 ${
        glowClasses[glowColor] || glowClasses.cyan
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Corner Cyber Accent Lines */}
      <div className="absolute top-0 left-0 w-3 h-[2px] bg-cyan-500/40 group-hover:bg-cyan-400 transition-colors"></div>
      <div className="absolute top-0 left-0 w-[2px] h-3 bg-cyan-500/40 group-hover:bg-cyan-400 transition-colors"></div>
      <div className="absolute bottom-0 right-0 w-3 h-[2px] bg-cyan-500/40 group-hover:bg-cyan-400 transition-colors"></div>
      <div className="absolute bottom-0 right-0 w-[2px] h-3 bg-cyan-500/40 group-hover:bg-cyan-400 transition-colors"></div>

      {/* Top Accent Badge */}
      {accentBadge && (
        <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-slate-900 border border-slate-700 text-cyan-300 shadow-md">
          {accentBadge}
        </div>
      )}

      {children}
    </div>
  );
}
