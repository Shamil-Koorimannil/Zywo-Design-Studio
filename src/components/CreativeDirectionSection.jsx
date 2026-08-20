import React from "react";
import { FiArrowRight } from "react-icons/fi";
import creativeProcess from "../assets/rayan/creative-process.png";

export default function CreativeDirectionSection({ onScrollToZywo }) {
  return (
    <section
      id="creative-direction-section"
      className="relative w-full bg-[#F4F3EF] py-24 px-6 md:px-16 select-none"
    >
      <div className="max-w-6xl w-full flex flex-col gap-16 relative z-10 mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <div className="inline-block self-start px-4 py-1.5 bg-[#8A63D2] text-white text-xs font-black uppercase tracking-wider rounded-xl border-[3px] border-[#222222] shadow-[3.5px_3.5px_0px_0px_#222222] rotate-[-1deg]">
            05 — CHAPTER TWO
          </div>
          <h2 className="font-heading font-black text-4xl md:text-6xl text-[#222222] uppercase tracking-tight">
            From marketing to creative leadership
          </h2>
          <p className="text-xl md:text-2xl font-black text-[#555555] uppercase tracking-tight">
            Creative Director &bull; Franjex
          </p>
        </div>

        {/* Narrative & Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Image & Visual Representation (5 columns) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[380px] aspect-[4/3] rounded-[24px] border-[3px] border-[#222222] shadow-[8px_8px_0px_0px_#222222] overflow-hidden rotate-[-1deg] hover:rotate-0 hover:-translate-y-1 transition-all duration-300 relative group bg-white">
              <img
                src={creativeProcess}
                alt="Creative Process brainstorming sessions"
                className="w-full h-full object-cover scale-102 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#222222]/5 pointer-events-none" />
            </div>
          </div>

          {/* Right Block: The Transition Story (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <p className="font-sans font-medium text-lg md:text-xl text-[#555555] leading-relaxed text-left">
              Joining Franjex marked my transition from analytical execution into high-level creative direction. By bridging marketing intelligence with deep design systems, I was able to direct narratives that moved beyond advertising metrics.
            </p>

            {/* Progression Flow */}
            <div className="grid grid-cols-3 gap-4 border-y border-[#222222]/10 py-6 my-2">
              <div className="flex flex-col text-left">
                <span className="text-xs uppercase tracking-widest font-black text-[#DE4A82]">Stage 01</span>
                <span className="font-heading font-black text-lg text-[#222222]">Marketing</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs uppercase tracking-widest font-black text-[#319C97]">Stage 02</span>
                <span className="font-heading font-black text-lg text-[#222222]">Strategy</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs uppercase tracking-widest font-black text-[#8FA4D8]">Stage 03</span>
                <span className="font-heading font-black text-lg text-[#222222]">Direction</span>
              </div>
            </div>

            <p className="font-sans text-base md:text-lg text-[#555555] leading-relaxed text-left">
              This cumulative knowledge set the foundation for my next major milestone: founding a creative advertising vehicle built from India to scale global ventures.
            </p>

            <div className="self-start mt-4">
              <button
                onClick={onScrollToZywo}
                className="group inline-flex items-center gap-3 font-heading font-black uppercase text-sm tracking-wider text-[#222222] border-b-[3px] border-[#DE4A82] pb-1 hover:text-[#DE4A82] transition-colors duration-200 cursor-pointer"
              >
                <span>Founding Zywo</span>
                <FiArrowRight className="text-md group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
