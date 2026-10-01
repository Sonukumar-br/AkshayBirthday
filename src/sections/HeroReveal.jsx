import React, { useEffect } from 'react';
import { Sparkles, Terminal, ArrowDown, ShieldCheck, Heart, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { triggerBirthdayConfetti } from '../utils/confetti';
import { BROTHER_CONFIG } from '../data/config';

export default function HeroReveal() {
  useEffect(() => {
    // Fire elegant birthday confetti on mount
    triggerBirthdayConfetti();
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 px-4 bg-radial-gradient text-center overflow-hidden">
      
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-6 relative z-10"
      >
        {/* Brother Pill Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-lg">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>LEVEL 17 UNLOCKED</span>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400 font-semibold">9th CLASS CHAMPION 🎒</span>
        </div>

        {/* Big Animated Title */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-mono font-extrabold tracking-tight text-white drop-shadow-lg">
            HAPPY BIRTHDAY <br />
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-300 to-amber-400 bg-clip-text text-transparent text-glow-cyan">
              {BROTHER_CONFIG.name.toUpperCase()} 🎂
            </span>
          </h1>
          <p className="font-mono text-base sm:text-xl text-amber-300 font-semibold tracking-wide">
            Nickname: <span className="text-amber-400 underline decoration-amber-500/50">{BROTHER_CONFIG.nickname}</span>
          </p>
        </div>

        {/* Level Unlocked Card */}
        <div className="glass-panel inline-block max-w-xl mx-auto p-4 sm:p-5 rounded-2xl border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)] text-left">
          <div className="flex items-start space-x-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div className="space-y-1 font-mono">
              <div className="text-sm font-bold text-emerald-300">
                Age 17 Level Unlocked Successfully! 🎉
              </div>
              <div className="text-xs text-slate-300">
                Another awesome year older. Another level of greatness unlocked! 🚀
              </div>
            </div>
          </div>
        </div>

        {/* Action button row */}
        <div className="pt-4 flex flex-wrap justify-center gap-4 font-mono text-xs">
          <a
            href="#profile"
            className="px-5 py-3 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 hover:border-cyan-400 transition-all flex items-center space-x-2 shadow-lg"
          >
            <span>[ SEE BROTHER CARD ]</span>
          </a>
          <a
            href="#journey"
            className="px-5 py-3 rounded-xl bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 transition-all flex items-center space-x-2"
          >
            <span>EXPLORE OUR JOURNEY</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>

    </section>
  );
}
