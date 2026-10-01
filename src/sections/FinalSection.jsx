import React from 'react';
import { Rocket, Heart, Sparkles, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { triggerBirthdayConfetti, triggerFireworks } from '../utils/confetti';
import { soundFx } from '../utils/soundEffects';
import { BROTHER_CONFIG } from '../data/config';

export default function FinalSection() {
  const handleFinalCelebration = () => {
    soundFx.playBlowSound();
    triggerBirthdayConfetti();
    setTimeout(() => {
      triggerFireworks();
    }, 300);
  };

  return (
    <section id="final" className="relative min-h-[90vh] py-20 px-4 flex flex-col items-center justify-center bg-radial-bottom text-center overflow-hidden">
      
      {/* Night Sky Atmospheric Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070d] via-[#080d1a] to-[#04060c] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto space-y-8 relative z-10 font-mono">
        
        {/* Top Trophy Pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-300 text-xs shadow-xl">
          <Trophy className="w-4 h-4 text-amber-400" />
          <span>LEVEL 17 ACHIEVED</span>
        </div>

        {/* Cinematic Text Block */}
        <div className="space-y-4">
          <p className="text-xl sm:text-2xl text-slate-300 tracking-wide font-light">
            Keep dreaming... <br />
            Keep growing... <br />
            Keep being you...
          </p>

          <p className="text-sm sm:text-base text-cyan-300 italic pt-2">
            Because you're the best brother ever.
          </p>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white pt-4">
            HAPPY BIRTHDAY, <br />
            <span className="bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400 bg-clip-text text-transparent text-glow-orange">
              {BROTHER_CONFIG.nickname.toUpperCase()} ❤️
            </span>
          </h2>
        </div>

        {/* Status Box */}
        <div className="glass-panel inline-block px-6 py-4 rounded-xl border border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.15)] text-xs text-slate-300 space-y-1">
          <div>Class: 9th Standard 🎒 | Age: 17</div>
          <div className="text-emerald-400 font-bold text-sm">
            Level 17 Status: Successfully Unlocked 🚀
          </div>
        </div>

        {/* Final Launch Button */}
        <div>
          <button
            onClick={handleFinalCelebration}
            className="group relative px-8 py-4 rounded-2xl font-mono text-base font-extrabold bg-gradient-to-r from-cyan-500 via-emerald-500 to-amber-500 text-slate-950 shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:shadow-[0_0_50px_rgba(6,182,212,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-3 mx-auto"
          >
            <Rocket className="w-5 h-5 fill-slate-950 group-hover:rotate-12 transition-transform" />
            <span>[ LAUNCH BIRTHDAY PARTY 🎉 ]</span>
          </button>
        </div>

        {/* Footer Credit */}
        <div className="pt-12 text-xs text-slate-500 font-mono flex items-center justify-center space-x-2">
          <span>Made with ❤️ by Sonu (Elder Brother) for Akshay</span>
        </div>

      </div>

    </section>
  );
}
