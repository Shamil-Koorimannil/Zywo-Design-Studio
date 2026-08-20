import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { venturesData } from "../data/ventures";

export default function ZywoSection() {
  const data = venturesData.zywo;
  return (
    <section
      id="zywo-section"
      className="relative w-full bg-[#F4F3EF] py-24 px-6 md:px-16 select-none"
    >
      <div className="max-w-6xl w-full flex flex-col gap-16 relative z-10 mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <div className="inline-block self-start px-4 py-1.5 bg-[#DE4A82] text-white text-xs font-black uppercase tracking-wider rounded-xl border-[3px] border-[#222222] shadow-[3.5px_3.5px_0px_0px_#222222] rotate-[2deg]">
            06 — VENTURE 01
          </div>
          <h2 className="font-heading font-black text-6xl md:text-8xl text-[#222222] uppercase tracking-tighter">
            {data.name}
          </h2>
          <p className="font-heading font-black text-2xl md:text-3.5xl text-[#222222] leading-tight max-w-3xl border-l-[6px] border-[#319C97] pl-6 text-left">
            {data.tagline}
          </p>
        </div>

        {/* Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Positioning Copy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <p className="font-sans font-medium text-lg md:text-xl text-[#555555] leading-relaxed text-left">
              {data.positioning}
            </p>

            <div className="self-start">
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

          {/* Right Block: Capabilities List (5 cols) */}
          <div className="lg:col-span-5 bg-white p-8 md:p-10 rounded-[24px] border-[3px] border-[#222222] shadow-[6px_6px_0px_0px_#222222] relative text-left">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#222222]/5 rounded-bl-full pointer-events-none" />
            <h3 className="font-heading font-black text-xl text-[#222222] uppercase tracking-wider mb-6 pb-4 border-b border-[#222222]/10">
              Agency Capabilities
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {data.capabilities.map((cap, i) => {
                const colors = ["bg-[#8FA4D8]/10", "bg-[#FFD45C]/10", "bg-[#319C97]/10", "bg-[#DE4A82]/10"];
                return (
                  <div 
                    key={i} 
                    className={`p-3 rounded-xl font-sans font-black text-[#222222] text-xs uppercase tracking-wider border-2 border-[#222222] ${colors[i % colors.length]}`}
                  >
                    {cap}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
