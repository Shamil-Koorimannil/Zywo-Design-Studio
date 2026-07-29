import React from "react";
import { FiArrowDown } from "react-icons/fi";
import Magnetic from "../components/Magnetic";
import heroVideo from "../assets/454575.mp4";

export default function HeroSection({ onScrollToProjects }) {
  return (
    <section 
      id="hero-section"
      className="relative w-full h-screen bg-brand-offwhite flex items-center justify-center overflow-hidden select-none"
    >
      {/* Outer float container for gentle idle float effect */}
      <div className="float-idle flex items-center justify-center w-full">
        {/* Wide cinematic landscape frame (80-85% width, 16:9 aspect ratio, rotated 16 degrees) */}
        <div 
          className="w-[82vw] aspect-[16/9] rounded-[28px] brutalist-border brutalist-shadow-lg bg-brand-white overflow-hidden rotate-16 relative transform transition-transform duration-700 ease-out hover:rotate-[15deg] hover:scale-[1.01] group interactive-hover"
        >
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1.2s] ease-out-expo"
          />
          
          {/* Subtle overlay highlight */}
          <div className="absolute inset-0 bg-brand-black/5 pointer-events-none group-hover:bg-brand-black/0 transition-colors duration-500" />
        </div>
      </div>

      {/* Bottom Right: Projects Navigation Button */}
      <div className="absolute bottom-8 right-8 z-40 md:bottom-12 md:right-12">
        <Magnetic>
          <button
            onClick={onScrollToProjects}
            id="btn-goto-projects"
            aria-label="Scroll down to projects"
            className="group flex items-center gap-6 py-4 pl-8 pr-4 text-xl md:text-2xl font-black bg-brand-white text-brand-black rounded-[24px] brutalist-border brutalist-shadow hover:brutalist-shadow-lg hover:-translate-y-1.5 transition-all duration-300 ease-out"
          >
            <span>Projects</span>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-black text-brand-white rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-500 ease-in-out">
              <FiArrowDown className="text-xl md:text-2xl" />
            </div>
          </button>
        </Magnetic>
      </div>
    </section>
  );
}
