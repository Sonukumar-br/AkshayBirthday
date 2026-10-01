import React from 'react';
import { Sparkles, Flame } from 'lucide-react';
import Cake3D from '../components/Cake3D';

export default function CakeSection() {
  return (
    <section id="cake" className="py-16 px-4 max-w-4xl mx-auto text-center">
      
      {/* Section Header */}
      <div className="space-y-2 mb-8">
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-500/30">
          <Flame className="w-3.5 h-3.5" />
          <span>BIRTHDAY_CEREMONY // CAKE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-mono font-bold text-slate-100">
          THE BIRTHDAY <span className="text-amber-400">CAKE</span>
        </h2>
        <p className="text-xs font-mono text-slate-400 max-w-md mx-auto">
          Make a wish, blow out the candles, and initialize the next level!
        </p>
      </div>

      {/* 3D Animated Cake Component */}
      <Cake3D />

    </section>
  );
}
