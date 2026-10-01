import React from 'react';
import { AlertTriangle, CheckCircle, Sparkles, Terminal, Rocket, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { BROTHER_CONFIG } from '../data/config';
import CyberCard from '../components/CyberCard';

export default function JourneySection() {
  return (
    <section id="journey" className="py-16 px-4 max-w-5xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-2 mb-12">
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
          <Terminal className="w-3.5 h-3.5" />
          <span>SYSTEM_LOGS // TIMELINE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-mono font-bold text-slate-100">
          OUR <span className="text-cyan-400">JOURNEY</span>
        </h2>
        <p className="text-xs font-mono text-slate-400 max-w-md mx-auto">
          Archived major updates, patch logs, and system milestones from v1.0 to v17.0.
        </p>
      </div>

      {/* Timeline List */}
      <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-10">
        
        {BROTHER_CONFIG.journeyTimeline.map((item, idx) => (
          <div key={item.id} className="relative pl-6 sm:pl-8 group">
            
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:border-emerald-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>

            <CyberCard
              glowColor={idx === 1 ? "orange" : idx === 3 ? "green" : "cyan"}
              accentBadge={item.badge}
            >
              <div className="space-y-3 font-mono">
                
                {/* Header info */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
                  <span className="text-xs text-cyan-400 font-bold">{item.tag}</span>
                  <span className="text-[11px] text-slate-500">{item.date}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-100">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.subtitle}</p>
                <p className="text-sm text-slate-300 font-sans leading-relaxed pt-1">
                  {item.description}
                </p>

                {/* SPECIAL WARNING BOX FOR SCHOOL MODE (Pet dard ho raha hai) */}
                {item.warningBox && (
                  <div className="mt-4 p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 space-y-2 text-xs">
                    <div className="flex items-center space-x-2 text-amber-400 font-bold">
                      <AlertTriangle className="w-4 h-4 text-amber-400" />
                      <span>{item.warningBox.title}</span>
                    </div>
                    <div className="text-slate-300 font-mono pl-6 space-y-1">
                      <div>{item.warningBox.command}</div>
                      <div className="text-amber-300 font-bold text-sm">
                        Output: {item.warningBox.output}
                      </div>
                      <div className="text-emerald-400 font-bold">
                        Status: {item.warningBox.status}
                      </div>
                    </div>
                  </div>
                )}

                {/* TEENAGE FEATURE RELEASE CHECKLIST */}
                {item.features && (
                  <div className="mt-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1.5 text-xs text-slate-200">
                    <div className="text-emerald-400 font-bold mb-1">Version 17.0 Release Notes:</div>
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center space-x-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Code Snippet Box */}
                {item.codeSnippet && (
                  <pre className="p-3 rounded-lg bg-[#080c14] border border-slate-800 text-[11px] text-cyan-300 overflow-x-auto">
                    <code>{item.codeSnippet}</code>
                  </pre>
                )}

              </div>
            </CyberCard>
          </div>
        ))}

      </div>

    </section>
  );
}
