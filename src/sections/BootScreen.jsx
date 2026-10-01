import React, { useState, useEffect } from 'react';
import { Terminal, Play } from 'lucide-react';
import { soundFx } from '../utils/soundEffects';
import { BROTHER_CONFIG } from '../data/config';
import TerminalWindow from '../components/TerminalWindow';

export default function BootScreen({ onEnterBirthdayMode }) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let currentLine = 0;
    const lines = BROTHER_CONFIG?.bootSequence || [];

    if (!lines.length) {
      setIsReady(true);
      return;
    }

    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        try {
          soundFx.playKeyClick();
        } catch (e) {}

        const item = lines[currentLine];
        if (item) {
          setDisplayedLines(prev => [...prev, item]);
        }
        currentLine++;
      } else {
        clearInterval(interval);
        // Animate progress bar
        let p = 0;
        const pInterval = setInterval(() => {
          p += 10;
          setProgress(p);
          if (p >= 100) {
            clearInterval(pInterval);
            try {
              soundFx.playSuccessBeep();
            } catch (e) {}
            setIsReady(true);
          }
        }, 60);
      }
    }, 380);

    return () => clearInterval(interval);
  }, []);

  const handleEnterClick = () => {
    try {
      soundFx.playSuccessBeep();
    } catch (e) {}
    if (typeof onEnterBirthdayMode === 'function') {
      onEnterBirthdayMode();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#05070d] flex items-center justify-center p-4 sm:p-6 bg-cyber-grid bg-radial-gradient select-none">
      <div className="max-w-2xl w-full">
        <TerminalWindow
          title="birthday_start.sh"
          path="~/party/start"
          showScanlines={true}
        >
          <div className="space-y-3 font-mono text-xs sm:text-sm text-slate-200 min-h-[340px] flex flex-col justify-between">
            <div className="space-y-2">
              {displayedLines.map((line, index) => {
                if (!line) return null;
                return (
                  <div key={index} className="flex items-start space-x-2">
                    {line.isPrompt && (
                      <span className="text-cyan-400 font-bold">sonu@brother:~$</span>
                    )}
                    <span className={line.status ? "text-emerald-400 font-bold" : "text-slate-300"}>
                      {line.text}
                    </span>
                  </div>
                );
              })}

              {/* Progress Bar */}
              {displayedLines.length >= (BROTHER_CONFIG?.bootSequence?.length || 0) && (
                <div className="pt-3 space-y-1">
                  <div className="flex justify-between text-xs text-cyan-400">
                    <span>PREPARING BIRTHDAY PARTY</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 via-emerald-400 to-amber-400 transition-all duration-150"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Target Specs Summary */}
              {isReady && (
                <div className="mt-5 p-4 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-xs space-y-1.5 animate-fadeIn">
                  <div className="text-cyan-300 font-bold">▶ BIRTHDAY HERO DETECTED:</div>
                  <div className="grid grid-cols-2 gap-2 pt-1 text-slate-300">
                    <div>Name: <span className="text-white font-bold">{BROTHER_CONFIG?.name || 'Akshay Verma'}</span></div>
                    <div>Nickname: <span className="text-amber-300 font-bold">{BROTHER_CONFIG?.nickname || 'Andua'}</span></div>
                    <div>Class: <span className="text-emerald-400 font-bold">{BROTHER_CONFIG?.schoolClass || '9th Standard'} 🎒</span></div>
                    <div>Age: <span className="text-cyan-400 font-bold">{BROTHER_CONFIG?.age || 17} Years</span></div>
                  </div>
                </div>
              )}
            </div>

            {/* Enter Button Prompt */}
            {isReady && (
              <div className="pt-6 flex justify-center">
                <button
                  onClick={handleEnterClick}
                  className="group relative px-6 py-3.5 rounded-xl font-mono text-sm font-bold bg-gradient-to-r from-cyan-500 via-emerald-500 to-amber-500 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-3 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-slate-950" />
                  <span>[ START BIRTHDAY EXPERIENCE ]</span>
                  <span className="inline-block w-2 h-4 bg-slate-950 animate-cursor"></span>
                </button>
              </div>
            )}
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
}
