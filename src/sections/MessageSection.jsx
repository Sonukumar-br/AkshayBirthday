import React from 'react';
import { Heart, Sparkles, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { BROTHER_CONFIG } from '../data/config';
import CyberCard from '../components/CyberCard';

export default function MessageSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="message" className="py-16 px-4 max-w-4xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-2 mb-10">
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-rose-400 bg-rose-950/60 px-3 py-1 rounded-full border border-rose-500/30">
          <Heart className="w-3.5 h-3.5 fill-rose-400" />
          <span>{BROTHER_CONFIG.personalMessage.tag}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-mono font-bold text-slate-100">
          PERSONAL <span className="text-rose-400">LETTER</span>
        </h2>
        <p className="text-xs font-mono text-slate-400 max-w-md mx-auto">
          From elder brother (Sonu) to younger brother (Akshay).
        </p>
      </div>

      {/* Message Card */}
      <CyberCard glowColor="purple" className="relative p-6 sm:p-8">
        
        {/* Top Header Tag */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6 font-mono text-xs text-slate-400">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
            <span className="text-rose-300 font-bold">FROM: Sonu (Bhai)</span>
          </div>
          <span className="text-slate-500">TO: Akshay Verma (Andua)</span>
        </div>

        {/* Gradual Line Reveal */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4 text-sm sm:text-base text-slate-200 font-sans leading-relaxed"
        >
          {BROTHER_CONFIG.personalMessage.paragraphs.map((para, index) => (
            <motion.p
              key={index}
              variants={item}
              className={
                para.includes("pet dard")
                  ? "p-3 rounded-lg bg-amber-950/30 border border-amber-500/30 text-amber-200 font-mono text-xs sm:text-sm"
                  : index === 0
                  ? "text-lg font-bold text-cyan-300 font-mono"
                  : "text-slate-300"
              }
            >
              {para}
            </motion.p>
          ))}

          {/* Sign Off */}
          <motion.div
            variants={item}
            className="pt-6 border-t border-slate-800 text-right font-mono font-bold text-lg text-rose-400"
          >
            {BROTHER_CONFIG.personalMessage.signOff}
          </motion.div>
        </motion.div>

      </CyberCard>

    </section>
  );
}
