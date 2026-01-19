import React, { useState } from "react";
import { MapPin, ArrowRight, Loader, Loader2 } from "lucide-react";

interface HeroProps {
  onPlan: (destination: string) => void;
  loading: boolean;
}

const Hero = ({ onPlan, loading }: HeroProps) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = () => {
    if (inputValue.trim()) {
      onPlan(inputValue);
    }
  };
  return (
    <div className="relative w-full h-dvh flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* 1. Background Image with dark overlay */}
      <img
        src="./src/assets/bg.jpg"
        alt="Travel Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* 2. Content Layer */}
      <div className="relative z-20 max-w-4xl w-full flex flex-col items-center">
        {/* Animated Badge */}
        <div className="mb-6 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-blue-400 text-sm font-bold tracking-widest uppercase animate-fade-in">
          ✨ Your AI Travel Agent
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-8xl font-heading text-white tracking-tighter leading-[1.1] mb-8">
          Explore the World, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to bg-purple-700">
            One Prompt Away.
          </span>
        </h1>

        {/* Glassy Search Bar */}
        <div className="w-full max-w-2xl bg-white/10 backdrop-blur-2xl border border-white/20 p-2 rounded-3xl shadow-2xl flex items-center gap-2 group focus-within:border-blue-500/50 transition-all duration-300">
          <div className="pl-4 text-blue-400">
            <MapPin size={24} strokeWidth={1.5} />
          </div>

          <input
            type="text"
            placeholder="Where do you want to go?"
            className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/50 py-4 text-lg font-body"
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button
            className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-2xl transition-all flex items-center gap-2 font-bold shadow-lg shadow-blue-600/20 group-hover:scale-[1.02] active:scale-95"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                <span className="hidden md:inline pl-2 uppercase tracking-tighter">
                  Plan Trip
                </span>
                <ArrowRight size={20} />
              </>
            )}
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-white/60 text-sm">
          <span>Try: </span>
          <button className="hover:text-blue-400 transition cursor-pointer">
            "7 days in Kyoto"
          </button>
          <span className="opacity-30">•</span>
          <button className="hover:text-blue-400 transition cursor-pointer">
            "Budget trip to Bali"
          </button>
          <span className="opacity-30">•</span>
          <button className="hover:text-blue-400 transition cursor-pointer">
            "Winter in Switzerland"
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
