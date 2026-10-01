import React from 'react';
import { User, Tag, Calendar, Activity, Heart, BookOpen, Smile, Clock, Zap, Award, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { BROTHER_CONFIG } from '../data/config';
import CyberCard from '../components/CyberCard';

export default function ProfileSection() {
  const iconMap = {
    User: User,
    Tag: Tag,
    Calendar: Calendar,
    BookOpen: BookOpen,
    Heart: Heart,
    Smile: Smile,
    Clock: Clock,
    Zap: Zap,
    Award: Award,
    Activity: Activity,
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section id="profile" className="py-16 px-4 max-w-5xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-2 mb-10">
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>BROTHER_PROFILE // 9th STANDARD</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-mono font-bold text-slate-100">
          BROTHER <span className="text-cyan-400">CARD</span>
        </h2>
        <p className="text-xs font-mono text-slate-400 max-w-md mx-auto">
          Official stats & info about Akshay Verma (Andua).
        </p>
      </div>

      {/* Main Spec Grid */}
      <CyberCard glowColor="cyan" className="max-w-3xl mx-auto">
        <div className="space-y-6">
          
          {/* Card Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 font-mono">
            <div>
              <span className="text-xs text-slate-400">BROTHER ID:</span>
              <span className="text-sm text-cyan-300 font-bold ml-2">AKSHAY_ANDUA_17</span>
            </div>
            <span className="px-2.5 py-0.5 rounded text-[11px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold">
              ● 9th CLASS CHAMPION
            </span>
          </div>

          {/* Key Value Items Staggered Animation */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-sm"
          >
            {BROTHER_CONFIG.profileSpecs.map((spec, index) => {
              const Icon = iconMap[spec.icon] || User;
              return (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="flex items-center space-x-3 text-slate-400">
                    <Icon className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs">{spec.key}</span>
                  </div>
                  <span className={`text-xs font-semibold ${
                    spec.highlight ? 'text-emerald-400 font-bold' : 'text-slate-100'
                  }`}>
                    {spec.value}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Card Footer Quote */}
          <div className="pt-4 border-t border-slate-800 text-center font-mono">
            <p className="text-sm font-semibold text-amber-300 italic tracking-wide">
              {BROTHER_CONFIG.profileFooterQuote}
            </p>
          </div>

        </div>
      </CyberCard>

    </section>
  );
}
