import React, { useState } from 'react';
import { Trophy, Award, Star, Sparkles, Smile, Flame, Heart, CheckCircle2, Gift } from 'lucide-react';
import { motion } from 'framer-motion';
import { BROTHER_CONFIG } from '../data/config';
import CyberCard from '../components/CyberCard';
import { triggerBirthdayConfetti, triggerFireworks } from '../utils/confetti';
import { soundFx } from '../utils/soundEffects';

export default function CodeSection() {
  const [claimed, setClaimed] = useState(false);

  const handleClaimTrophy = () => {
    soundFx.playBlowSound();
    setClaimed(true);
    triggerBirthdayConfetti();
    setTimeout(() => {
      triggerFireworks();
    }, 300);
  };

  const badges = [
    {
      id: 1,
      title: "The Excuse Master 🏆",
      description: 'Expert in the legendary "Pet dard ho raha hai" school excuse since Class 1!',
      icon: Smile,
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/40",
      textColor: "text-amber-300"
    },
    {
      id: 2,
      title: "Gaming & Fun Legend 🎮",
      description: "Undefeated champion in house gaming sessions, jokes & unlimited entertainment!",
      icon: Flame,
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/40",
      textColor: "text-cyan-300"
    },
    {
      id: 3,
      title: "100/10 Star Brother ⭐",
      description: "Officially certified as the best, coolest, and most awesome younger brother!",
      icon: Star,
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/40",
      textColor: "text-emerald-300"
    },
    {
      id: 4,
      title: "Late Night Snack Partner 🍿",
      description: "Always ready for midnight cravings, funny jokes & brotherhood masti!",
      icon: Gift,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/40",
      textColor: "text-purple-300"
    },
    {
      id: 5,
      title: "Level 17 Dream Big 🚀",
      description: "Unlocked Level 17 with big dreams, high energy & unstoppable confidence!",
      icon: Trophy,
      color: "from-rose-500/20 to-red-500/20",
      borderColor: "border-rose-500/40",
      textColor: "text-rose-300"
    },
    {
      id: 6,
      title: "Bhai's Best Friend Forever ❤️",
      description: "No matter how much we fight or laugh, brothers forever and always!",
      icon: Heart,
      color: "from-amber-400/20 to-yellow-500/20",
      borderColor: "border-amber-400/40",
      textColor: "text-amber-400"
    }
  ];

  return (
    <section id="code" className="py-16 px-4 max-w-5xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-2 mb-10">
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-500/30">
          <Trophy className="w-3.5 h-3.5" />
          <span>BROTHER_TROPHY_CASE // BADGES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-mono font-bold text-slate-100">
          AKSHAY'S <span className="text-amber-400">SUPERPOWER BADGES</span>
        </h2>
        <p className="text-xs font-mono text-slate-400 max-w-md mx-auto">
          Official badges and achievement unlocks earned by Akshay Verma (Andua).
        </p>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {badges.map((badge) => {
          const Icon = badge.icon;
          return (
            <motion.div
              key={badge.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`glass-panel p-5 rounded-xl border ${badge.borderColor} bg-gradient-to-br ${badge.color} space-y-3 shadow-lg relative overflow-hidden group`}>
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-lg bg-slate-900/80 border ${badge.borderColor} flex items-center justify-center ${badge.textColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                    UNLOCKED ✓
                  </span>
                </div>
                <div>
                  <h3 className={`font-mono font-bold text-base ${badge.textColor} mb-1`}>
                    {badge.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Official Certificate of Awesomeness */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border-2 border-amber-500/40 bg-gradient-to-b from-amber-950/30 via-slate-900/80 to-slate-950 text-center relative overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.15)]">
        
        {/* Certificate Decorative Corner Emblems */}
        <div className="absolute top-3 left-3 text-amber-500/30 font-mono text-xs">★ CERTIFIED ★</div>
        <div className="absolute top-3 right-3 text-amber-500/30 font-mono text-xs">★ CLASS 9TH ★</div>

        <div className="max-w-2xl mx-auto space-y-5 font-mono">
          <div className="inline-flex items-center space-x-2 text-xs text-amber-400 font-bold bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/40">
            <Award className="w-4 h-4" />
            <span>OFFICIAL CERTIFICATE OF BROTHERHOOD</span>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-slate-400 uppercase tracking-widest">This Certificate of Awesomeness is awarded to</p>
            <h3 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200 bg-clip-text text-transparent drop-shadow-md">
              {BROTHER_CONFIG.name.toUpperCase()}
            </h3>
            <p className="text-sm text-amber-300 font-semibold">
              (Known as {BROTHER_CONFIG.nickname})
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed max-w-lg mx-auto">
            For turning 17 years old, being the absolute best 9th class younger brother, making everyone laugh, and being a true champion for life!
          </p>

          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              <span className="text-slate-500">ISSUED BY:</span> <br />
              <strong className="text-cyan-300">Sonu (Your Bhai) ❤️</strong>
            </div>
            <div>
              <span className="text-slate-500">STATUS:</span> <br />
              <strong className="text-emerald-400">Lifetime Legendary Brother</strong>
            </div>
          </div>

          {/* Interactive Claim Button */}
          <div className="pt-4">
            {!claimed ? (
              <button
                onClick={handleClaimTrophy}
                className="group relative px-6 py-3 rounded-xl font-mono text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.7)] hover:scale-105 transition-all flex items-center space-x-2 mx-auto cursor-pointer"
              >
                <Trophy className="w-4 h-4 fill-slate-950" />
                <span>[ CLAIM BROTHER TROPHY 🎉 ]</span>
              </button>
            ) : (
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold animate-pulse">
                <CheckCircle2 className="w-4 h-4" />
                <span>TROPHY CLAIMED! YOU ARE THE BEST BROTHER EVER! 🏆</span>
              </div>
            )}
          </div>

        </div>

      </div>

    </section>
  );
}
