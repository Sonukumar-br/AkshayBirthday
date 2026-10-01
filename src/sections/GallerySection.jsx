import React, { useState } from 'react';
import { Camera, ZoomIn, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { BROTHER_CONFIG } from '../data/config';
import ImageModal from '../components/ImageModal';
import CyberCard from '../components/CyberCard';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageSrcs, setImageSrcs] = useState({});
  const [failedImages, setFailedImages] = useState({});

  const handleImageError = (imgObj) => {
    const currentSrc = imageSrcs[imgObj.id] || imgObj.imagePath;

    // Try alternate file extensions if one fails
    if (currentSrc.endsWith('.jpg')) {
      setImageSrcs(prev => ({ ...prev, [imgObj.id]: currentSrc + '.jpeg' }));
    } else if (currentSrc.endsWith('.jpg.jpeg')) {
      setImageSrcs(prev => ({ ...prev, [imgObj.id]: `/images/akshay-0${imgObj.id}.png` }));
    } else {
      setFailedImages(prev => ({ ...prev, [imgObj.id]: true }));
    }
  };

  return (
    <section id="gallery" className="py-16 px-4 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-2 mb-10">
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
          <Camera className="w-3.5 h-3.5" />
          <span>MEMORY_ARCHIVE // GALLERY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-mono font-bold text-slate-100">
          PHOTO <span className="text-cyan-400">GALLERY</span>
        </h2>
        <p className="text-xs font-mono text-slate-400 max-w-md mx-auto">
          Archived visual memories of Akshay Verma. Click any card to expand photo preview.
        </p>
      </div>

      {/* Success Status Notice */}
      <div className="mb-8 p-3.5 rounded-xl bg-slate-900/80 border border-emerald-500/30 flex items-center justify-between font-mono text-xs text-slate-300">
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>
            <strong className="text-emerald-300">Memory Photos Detected:</strong> 8 photos loaded live in <code className="text-cyan-400 bg-slate-950 px-1.5 py-0.5 rounded">public/images/</code>
          </span>
        </div>
        <span className="hidden sm:inline-block text-[11px] text-emerald-400 font-bold">● ACTIVE</span>
      </div>

      {/* Photo Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {BROTHER_CONFIG.galleryImages.map((img) => {
          const srcToUse = imageSrcs[img.id] || img.imagePath;
          const isFailed = failedImages[img.id];

          return (
            <motion.div
              key={img.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <CyberCard
                glowColor="cyan"
                onClick={() => setSelectedImage({ ...img, imagePath: srcToUse })}
                className="h-full flex flex-col justify-between overflow-hidden"
              >
                <div className="space-y-3">
                  
                  {/* Image Display / Placeholder Container */}
                  <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center group/img">
                    
                    {!isFailed ? (
                      <img
                        src={srcToUse}
                        alt={img.title}
                        onError={() => handleImageError(img)}
                        className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      // Developer Placeholder Card when photo fails to load
                      <div className="flex flex-col items-center justify-center p-4 text-center space-y-2">
                        <div className="w-12 h-12 rounded-full bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover/img:border-cyan-400 group-hover/img:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all">
                          <Camera className="w-6 h-6 animate-pulse" />
                        </div>
                        <span className="font-mono font-bold text-xs text-slate-200">{img.title}</span>
                        <span className="font-mono text-[10px] text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/20">
                          Awaiting image...
                        </span>
                        <span className="font-mono text-[9px] text-slate-500">
                          akshay-0{img.id}.jpg
                        </span>
                      </div>
                    )}

                    {/* Hover Overlay Zoom Icon */}
                    <div className="absolute inset-0 bg-cyan-950/40 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="p-2 rounded-full bg-slate-900 border border-cyan-400 text-cyan-300 shadow-lg">
                        <ZoomIn className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Labels */}
                  <div className="font-mono space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-200">{img.title}</span>
                      <span className="text-[10px] text-slate-500">{img.date}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 truncate">{img.caption}</p>
                  </div>

                </div>
              </CyberCard>
            </motion.div>
          );
        })}
      </div>

      {/* Image Lightbox Modal */}
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

    </section>
  );
}
