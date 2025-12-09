import React from 'react';
import { ArrowDown, ChevronRight, Award } from 'lucide-react';

export const Hero: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-ocean-950">
      {/* Background Image Removed - Solid Color Only */}
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center pt-10 md:pt-12 pb-[450px]">
        <h2 className="mb-6 text-xs md:text-sm font-bold tracking-[0.3em] text-gold-500 uppercase animate-fade-in-up">
          Artfully Crafted
        </h2>
        
        {/* Replaced Text with Large Wide Logo Image - Size reduced from max-w-5xl to max-w-3xl (~30% reduction) */}
        <img 
          src="https://lh3.googleusercontent.com/d/1-zrm0P7JDpkSEgROgxSvpLbNkB4uWGo_" 
          alt="The Catch Logo" 
          className="mb-8 w-full max-w-3xl h-auto object-contain animate-fade-in-up"
        />

        <p className="mb-6 max-w-2xl text-lg font-light text-ocean-100 sm:text-2xl italic">
          Seafood & Sushi
        </p>

        <p className="mb-10 max-w-3xl text-base md:text-lg font-light text-ocean-50 leading-relaxed">
          The Catch is a specialty seafood and sushi restaurant right in the heart of West Palm Beach. 
          We create delicious food with a beautiful presentation and with our perfect location featuring outdoor dining, 
          we are your next favorite little spot.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row mb-12">
          <button 
            onClick={onMenuClick}
            className="group flex items-center justify-center gap-2 border-2 border-gold-500 bg-gold-500/10 backdrop-blur-sm px-8 py-3 text-sm font-bold uppercase tracking-widest text-gold-500 transition-all hover:bg-gold-500 hover:text-white"
          >
            View Menu
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Award Badge */}
        <div className="absolute top-20 right-4 md:right-12 md:top-24 animate-fade-in-up [animation-delay:500ms]">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 text-center transform rotate-12 hover:rotate-0 transition-transform">
            <Award className="w-8 h-8 text-gold-500 mb-1" />
            <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wider">2021 Travelers' Choice</span>
            <span className="text-[8px] md:text-[10px] text-ocean-200">Winner</span>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce text-white/50">
          <ArrowDown className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};