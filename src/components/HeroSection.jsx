import React from "react";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";
import Magnetic from "./Magnetic";

export default function HeroSection({ onScrollToWork, onConnectClick }) {
  return (
    <section
      id="hero-section"
      className="relative w-full py-16 px-6 md:px-12 md:py-24 bg-[#F4F3EF] overflow-hidden select-none"
    >
      {/* Background subtle dots for structure */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#222222_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 mx-auto">
        
        {/* Left Side: Editorial Typography & Copy (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Eyebrow Label */}
          <div className="inline-flex mb-6">
            <span className="px-4 py-1.5 bg-[#8FA4D8] text-[#222222] text-xs font-black uppercase tracking-widest rounded-xl border-[3px] border-[#222222] shadow-[3.5px_3.5px_0px_0px_#222222]">
              FOUNDER & CREATIVE DIRECTOR
            </span>
          </div>

          {/* Name Header */}
          <h1 className="font-heading font-black text-5xl md:text-7xl tracking-tighter text-[#222222] uppercase leading-[0.95] mb-6">
            CURIOSITY <br/>
            DRIVES WHAT <br/>
            I BUILD.
          </h1>

          {/* Main Philosophy Statement */}
          <p className="font-heading font-black text-xl md:text-2xl text-[#222222] leading-tight mb-4 max-w-2xl">
            Creativity shapes how I build it.
          </p>

          {/* Identity & Supporting Line */}
          <p className="font-sans font-medium text-base md:text-lg text-[#555555] leading-relaxed mb-8 max-w-xl">
            Founder & CEO of Zywo, Fluxify & Fluxiflow. Building at the intersection of creativity, technology, and business.
          </p>

          {/* CTA Cluster */}
          <div className="flex flex-wrap items-center gap-6">
            <Magnetic>
              <button
                onClick={onScrollToWork}
                className="group flex items-center gap-4 py-4 px-8 text-md font-black bg-[#FFD45C] text-[#222222] rounded-[14px] border-[3px] border-[#222222] shadow-[4px_4px_0px_0px_#222222] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#222222] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150 ease-out cursor-pointer interactive-hover"
              >
                <span>Start growing</span>
                <FiArrowRight className="text-xl group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </Magnetic>

            <Magnetic>
              <button
                onClick={onConnectClick}
                className="py-4 px-8 text-md font-black bg-white text-[#222222] rounded-[14px] border-[3px] border-[#222222] shadow-[4px_4px_0px_0px_#222222] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#222222] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150 ease-out cursor-pointer interactive-hover"
              >
                Let's connect
              </button>
            </Magnetic>
          </div>
        </div>

        {/* Right Side: Major Cinematic Composition Element (5 cols) */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="w-full max-w-[340px] aspect-[4/5] relative">
            {/* Background offset card */}
            <div className="absolute inset-0 bg-[#DE4A82] border-[3px] border-[#222222] rounded-[32px] translate-x-3 translate-y-3 pointer-events-none" />
            
            {/* Portrait Frame */}
            <div className="w-full h-full rounded-[32px] border-[3px] border-[#222222] bg-[#DE4A82] overflow-hidden relative shadow-[8px_8px_0px_0px_#222222] interactive-hover">
              <img
                src="/Rayan-hany-a.jpg"
                alt="Rayan Hany Cinematic Portrait"
                className="w-full h-full object-cover grayscale brightness-105"
              />
            </div>

            {/* Sticker 1: Teal Chart Bubble (Top Left) */}
            <div className="absolute -top-6 -left-6 bg-[#319C97] border-[3px] border-[#222222] p-2.5 rounded-xl shadow-[3px_3px_0px_0px_#222222] rotate-[-12deg] z-20 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            </div>

            {/* Sticker 2: Yellow Eye Bubble (Middle Right) */}
            <div className="absolute top-[45%] -right-6 bg-[#FFD45C] border-[3px] border-[#222222] p-2.5 rounded-full shadow-[3px_3px_0px_0px_#222222] rotate-[15deg] z-20 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#222222]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>

            {/* Sticker 3: Green Status Pill (Bottom Right) */}
            <div className="absolute -bottom-3 right-4 bg-[#52B879] border-[3px] border-[#222222] px-4 py-1.5 rounded-full shadow-[3px_3px_0px_0px_#222222] z-20 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white border border-[#222222] animate-pulse" />
              <span className="font-heading font-black text-[10px] text-[#222222] uppercase tracking-wider">Available for work</span>
            </div>
          </div>
        </div>
        
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-text-secondary animate-bounce pointer-events-none hidden md:flex">
        <span className="text-[10px] uppercase tracking-widest font-black">Scroll</span>
        <FiArrowDown className="text-sm" />
      </div>
    </section>
  );
}
