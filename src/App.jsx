import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BootScreen from './sections/BootScreen';
import HeroReveal from './sections/HeroReveal';
import ProfileSection from './sections/ProfileSection';
import JourneySection from './sections/JourneySection';
import GallerySection from './sections/GallerySection';
import CodeSection from './sections/CodeSection';
import InteractiveTerminalSection from './sections/InteractiveTerminalSection';
import MessageSection from './sections/MessageSection';
import CakeSection from './sections/CakeSection';
import FinalSection from './sections/FinalSection';
import { soundFx } from './utils/soundEffects';

export default function App() {
  const [hasBooted, setHasBooted] = useState(false);

  const handleEnterBirthdayMode = () => {
    soundFx.playSuccessBeep();
    setHasBooted(true);
  };

  if (!hasBooted) {
    return <BootScreen onEnterBirthdayMode={handleEnterBirthdayMode} />;
  }

  return (
    <div className="min-h-screen bg-[#05070d] text-slate-100 bg-cyber-grid selection:bg-cyan-500/30 selection:text-cyan-300">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Website Sections */}
      <main>
        <HeroReveal />
        <ProfileSection />
        <JourneySection />
        <GallerySection />
        <CodeSection />
        <InteractiveTerminalSection />
        <MessageSection />
        <CakeSection />
        <FinalSection />
      </main>
    </div>
  );
}
