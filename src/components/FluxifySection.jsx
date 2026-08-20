import React from "react";
import { FiArrowUpRight, FiShare2, FiZap, FiGlobe } from "react-icons/fi";
import { venturesData } from "../data/ventures";

export default function FluxifySection() {
  const data = venturesData.fluxify;
  return (
    <section
      id="fluxify-section"
      className="relative w-full bg-[#F4F3EF] py-24 px-6 md:px-16 select-none overflow-hidden"
    >
      {/* Decorative background grid representing network lines */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

      <div className="max-w-6xl w-full flex flex-col gap-16 relative z-10 mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <div className="inline-block self-start px-4 py-1.5 bg-[#8A63D2] text-white text-xs font-black uppercase tracking-wider rounded-xl border-[3px] border-[#222222] shadow-[3.5px_3.5px_0px_0px_#222222] rotate-[-2deg]">
            07 — VENTURE 02
          </div>
          <h2 className="font-heading font-black text-6xl md:text-8xl text-[#222222] uppercase tracking-tighter">
            {data.name}
          </h2>
          <p className="font-heading font-black text-2xl md:text-3.5xl text-[#222222] leading-tight max-w-3xl border-l-[6px] border-[#8FA4D8] pl-6 text-left">
            {data.tagline}
          </p>
        </div>

        {/* Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Ecosystem Graphic (5 cols) */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-[400px] aspect-square rounded-[24px] bg-white p-8 flex flex-col justify-between relative overflow-hidden border-[3px] border-[#222222] shadow-[6px_6px_0px_0px_#222222] text-left">
              <div className="absolute inset-0 bg-[#222222]/5 pointer-events-none" />
              
              <div className="flex justify-between items-center z-10">
                <FiShare2 className="text-3xl text-[#319C97]" />
                <span className="text-xs font-black uppercase tracking-widest text-[#555555]">Ecosystem Map</span>
              </div>

              {/* Connected node visual block */}
              <div className="flex flex-col gap-6 my-8 z-10">
                <div className="flex items-center gap-4 bg-[#8FA4D8]/15 border-2 border-[#222222] p-3 rounded-xl text-[#222222]">
                  <FiZap className="text-[#222222] text-xl" />
                  <span className="text-sm font-sans font-black uppercase tracking-wider">Brands &bull; Creators</span>
                </div>
                <div className="flex items-center gap-4 bg-[#FFD45C]/15 border-2 border-[#222222] p-3 rounded-xl ml-6 text-[#222222]">
                  <FiGlobe className="text-[#222222] text-xl" />
                  <span className="text-sm font-sans font-black uppercase tracking-wider">Publishers &bull; Consumers</span>
                </div>
              </div>

              <div className="text-xs font-heading font-black text-[#222222] z-10 uppercase tracking-widest">
                Connecting Nodes Directly
              </div>
            </div>
          </div>

          {/* Right Block: Problem & Vision (7 cols) - order 1 on lg */}
          <div className="lg:col-span-7 flex flex-col gap-8 order-1 lg:order-2">
            <p className="font-sans font-medium text-lg md:text-xl text-[#222222] leading-relaxed text-left">
              {data.vision}
            </p>
            <p className="font-sans text-base md:text-lg text-[#555555] leading-relaxed text-left">
              {data.problemDescription}
            </p>

            <div className="self-start mt-4">
              <a
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 py-4 px-8 text-md font-black bg-[#FFD45C] text-[#222222] border-[3px] border-[#222222] rounded-xl shadow-[4px_4px_0px_0px_#222222] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#222222] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150 ease-out cursor-pointer interactive-hover"
              >
                <span>{data.ctaText}</span>
                <FiArrowUpRight className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
