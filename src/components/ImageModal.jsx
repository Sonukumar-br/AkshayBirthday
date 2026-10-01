import React, { useEffect } from 'react';
import { X, Calendar, Camera, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ImageModal({ image, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!image) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative max-w-4xl w-full glass-panel rounded-2xl border border-cyan-500/30 overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.2)]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Content */}
          <div className="flex flex-col md:flex-row">
            {/* Image Preview Container */}
            <div className="md:w-2/3 bg-black/90 flex items-center justify-center p-4 min-h-[300px] max-h-[70vh]">
              <img
                src={image.imagePath}
                alt={image.title}
                className="max-h-full max-w-full object-contain rounded-lg shadow-xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hidden flex-col items-center justify-center p-8 text-center border-2 border-dashed border-cyan-500/40 rounded-xl bg-slate-900/60">
                <Camera className="w-12 h-12 text-cyan-400 mb-3 animate-pulse" />
                <span className="font-mono text-cyan-300 font-bold text-lg mb-1">{image.title}</span>
                <p className="font-mono text-xs text-slate-400 max-w-xs">
                  Place actual image at: <br />
                  <code className="text-emerald-400 bg-slate-950 px-2 py-1 rounded mt-1 inline-block">{image.imagePath}</code>
                </p>
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="md:w-1/3 p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-800 bg-[#090d16]">
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-2">
                  <Camera className="w-4 h-4" />
                  <span>{image.subtitle}</span>
                </div>
                <h3 className="font-mono font-bold text-xl text-slate-100 mb-3">{image.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-mono">
                  "{image.caption}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3 font-mono text-xs text-slate-400">
                <div className="flex items-center justify-between">
                  <span className="flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>Tag:</span>
                  </span>
                  <span className="text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                    {image.date}
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-[11px] text-slate-500 pt-2">
                  <Info className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>Memory archived for Akshay Verma v17.0</span>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
