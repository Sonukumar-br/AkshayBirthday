import React, { useState } from 'react';
import { Sparkles, Flame, CheckCircle, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { triggerBirthdayConfetti, triggerFireworks } from '../utils/confetti';
import { soundFx } from '../utils/soundEffects';

export default function Cake3D() {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [wishMade, setWishMade] = useState(false);

  const handleBlowCandles = () => {
    soundFx.playBlowSound();
    setCandlesBlown(true);
    setWishMade(true);
    triggerBirthdayConfetti();
    setTimeout(() => {
      triggerFireworks();
    }, 400);
  };

  const handleReset = () => {
    setCandlesBlown(false);
    setWishMade(false);
  };

  return (
    <div className="flex flex-col items-center justify-center py-6 select-none">
      
      {/* Visual Cake Container */}
      <div className="relative w-72 sm:w-80 h-72 flex flex-col items-center justify-end mb-8">
        
        {/* Glow halo behind cake */}
        <div className={`absolute inset-0 rounded-full blur-3xl transition-all duration-700 ${
          candlesBlown 
            ? 'bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-purple-500/20' 
            : 'bg-gradient-to-r from-orange-500/30 via-amber-500/20 to-rose-500/30'
        }`}></div>

        {/* Candles Cluster (17 Candle positions simulated) */}
        <div className="relative z-20 flex items-center justify-center space-x-2 sm:space-x-3 mb-2">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Candle Flame */}
              {!candlesBlown ? (
                <div className="animate-flame w-3.5 h-6 rounded-full bg-gradient-to-t from-amber-500 via-orange-400 to-yellow-200 mb-1 shadow-[0_0_15px_rgba(251,146,60,0.9)]"></div>
              ) : (
                <motion.div
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 0, y: -15 }}
                  className="w-2 h-4 text-[10px] text-slate-400 font-mono mb-1"
                >
                  💨
                </motion.div>
              )}
              {/* Candle Stick */}
              <div className="w-2 h-10 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-t-sm shadow-md border-x border-cyan-300/40"></div>
            </div>
          ))}
        </div>

        {/* Top Cake Tier */}
        <div className="relative z-10 w-48 sm:w-56 h-16 bg-gradient-to-r from-cyan-950 via-slate-900 to-purple-950 border-t-2 border-cyan-400/60 rounded-t-2xl shadow-xl flex items-center justify-center overflow-hidden border-x border-slate-700">
          <div className="absolute inset-x-0 top-0 h-3 bg-cyan-500/30 backdrop-blur-sm"></div>
          <span className="font-mono font-bold text-xs tracking-widest text-cyan-300 drop-shadow-md z-10">
            AKSHAY // 17
          </span>
          <div className="absolute bottom-1 right-3 text-[10px] font-mono text-purple-300/60">v17.0</div>
        </div>

        {/* Middle Cake Tier */}
        <div className="relative z-10 w-60 sm:w-68 h-18 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-t-2 border-purple-500/60 rounded-t-xl shadow-2xl flex items-center justify-center overflow-hidden border-x border-slate-800">
          <div className="w-full px-4 flex justify-between items-center font-mono text-[11px] text-slate-400">
            <span className="text-emerald-400 font-bold">● HAPPY</span>
            <span className="text-amber-400 font-bold">BIRTHDAY ●</span>
          </div>
        </div>

        {/* Base Cake Plate */}
        <div className="relative z-10 w-72 sm:w-80 h-6 bg-gradient-to-r from-cyan-500/30 via-slate-800 to-purple-500/30 rounded-full border border-cyan-500/40 shadow-[0_10px_25px_rgba(0,0,0,0.8)]"></div>
      </div>

      {/* Interactive Controls */}
      <div className="flex flex-col items-center">
        {!wishMade ? (
          <button
            onClick={handleBlowCandles}
            className="group relative px-6 py-3.5 rounded-xl font-mono text-sm font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-slate-950 shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:shadow-[0_0_35px_rgba(249,115,22,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-2"
          >
            <Flame className="w-5 h-5 text-slate-950 animate-bounce" />
            <span>[ MAKE A WISH & BLOW CANDLES ]</span>
          </button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="glass-panel px-6 py-4 rounded-xl border border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.2)] max-w-md">
              <div className="flex items-center justify-center space-x-2 text-emerald-400 font-mono font-bold text-sm mb-2">
                <CheckCircle className="w-4 h-4" />
                <span>WISH SUCCESSFULLY SUBMITTED</span>
              </div>
              <p className="font-mono text-xs text-slate-300 leading-relaxed">
                "May this year compile into something truly amazing. Keep shining, Andua!" 🚀
              </p>
            </div>

            <button
              onClick={handleReset}
              className="flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors py-1 px-3 rounded bg-slate-900/60 border border-slate-800"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Relight Candles</span>
            </button>
          </motion.div>
        )}
      </div>

    </div>
  );
}
