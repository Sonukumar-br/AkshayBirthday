import React, { useState } from 'react';
import { Terminal, Volume2, VolumeX, Heart, Trophy, Image, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export default function Navbar({ onNavigate }) {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const handleMusicToggle = () => {
    const status = soundFx.toggleBackgroundMusic('/audio/birthday.mp3');
    setIsPlayingMusic(status);
  };

  const navLinks = [
    { label: "Profile", href: "#profile", icon: Terminal },
    { label: "Journey", href: "#journey", icon: Sparkles },
    { label: "Gallery", href: "#gallery", icon: Image },
    { label: "Badges", href: "#code", icon: Trophy },
    { label: "Message", href: "#message", icon: Heart },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#05070d]/80 backdrop-blur-xl border-b border-cyan-500/20 px-4 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center space-x-3 group">
          <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-mono font-bold text-sm text-slate-100 tracking-wider">AKSHAY_VERMA</span>
              <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">LEVEL 17</span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono hidden sm:block">9th class champion // brother_edition</p>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-900/60 p-1.5 rounded-xl border border-slate-800">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-200"
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          {/* Music Toggle */}
          <button
            onClick={handleMusicToggle}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all duration-300 ${
              isPlayingMusic
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_12px_rgba(6,182,212,0.3)] animate-pulse'
                : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
            }`}
            title="Toggle background music (/audio/birthday.mp3)"
          >
            {isPlayingMusic ? (
              <>
                <Volume2 className="w-4 h-4 text-cyan-400" />
                <span className="hidden sm:inline">AUDIO: ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4" />
                <span className="hidden sm:inline">AUDIO: OFF</span>
              </>
            )}
          </button>

          {/* Quick Terminal Launcher */}
          <a
            href="#terminal"
            className="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-200"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>CLI</span>
          </a>
        </div>

      </div>
    </header>
  );
}
