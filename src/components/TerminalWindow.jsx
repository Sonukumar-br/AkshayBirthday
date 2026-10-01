import React from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

export default function TerminalWindow({
  title = "bash - 80x24",
  path = "~/brother/birthday.sh",
  children,
  className = "",
  showScanlines = false,
  onCopy = null,
}) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    if (onCopy) {
      onCopy();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`glass-panel rounded-xl overflow-hidden border border-slate-800 shadow-2xl ${className}`}>
      {/* Window Titlebar */}
      <div className="bg-[#0b101d] px-4 py-2.5 border-b border-slate-800/80 flex items-center justify-between select-none">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors"></div>
        </div>

        <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>{title}</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-500 font-normal">{path}</span>
        </div>

        <div className="flex items-center space-x-2">
          {onCopy && (
            <button
              onClick={handleCopy}
              className="text-slate-400 hover:text-cyan-300 p-1 rounded transition-colors"
              title="Copy snippet"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          )}
        </div>
      </div>

      {/* Terminal Content Body */}
      <div className={`p-5 sm:p-6 font-mono text-sm leading-relaxed ${showScanlines ? 'scanlines' : ''}`}>
        {children}
      </div>
    </div>
  );
}
