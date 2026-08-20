import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const CAPABILITIES = [
  {
    id: 1,
    title: "Brand Building",
    desc: "Building brands from the foundation — strategy, positioning, identity, communication, and experiences."
  },
  {
    id: 2,
    title: "Creative Direction",
    desc: "Turning business problems into creative ideas, campaigns, and experiences that people remember."
  },
  {
    id: 3,
    title: "Technology & Products",
    desc: "Exploring how AI, software, and emerging technology can transform creative industries and businesses."
  }
];export default function WhatIBuildSection() {
  const [expandedId, setExpandedId] = useState(null);

  const getNumberColor = (id) => {
    const colors = ["bg-[#8FA4D8]", "bg-[#319C97]", "bg-[#DE4A82]"];
    return colors[(id - 1) % colors.length];
  };

  return (
    <section
      id="what-i-build-section"
      className="relative w-full bg-[#F4F3EF] py-24 px-6 md:px-16 select-none"
    >
      <div className="max-w-5xl w-full flex flex-col justify-between relative z-10 gap-16 mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <div className="inline-block self-start px-4 py-1.5 bg-[#8A63D2] text-white text-xs font-black uppercase tracking-wider rounded-xl border-[3px] border-[#222222] shadow-[3.5px_3.5px_0px_0px_#222222] rotate-[1.5deg]">
            02 — CORE CAPABILITIES
          </div>
          <h2 className="font-heading font-black text-4xl md:text-6xl text-[#222222] uppercase tracking-tight">
            What I can do for you
          </h2>
        </div>

        {/* Numbered Vertical Accordion List */}
        <div className="flex flex-col border-t-2 border-[#222222]/20">
          {CAPABILITIES.map((cap) => {
            const isExpanded = expandedId === cap.id;
            return (
              <div 
                key={cap.id} 
                className="border-b-2 border-[#222222]/20 py-6 md:py-8 text-left"
              >
                <div
                  onClick={() => setExpandedId(isExpanded ? null : cap.id)}
                  className="flex items-center justify-between cursor-pointer group select-none py-2"
                >
                  <div className="flex items-center gap-6 md:gap-12">
                    {/* Number Badge Sticker */}
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl border-2 border-[#222222] font-heading font-black text-lg text-[#222222] shadow-[2.5px_2.5px_0px_0px_#222222] shrink-0 ${getNumberColor(cap.id)}`}>
                      {String(cap.id).padStart(2, "0")}
                    </div>
                    <h3 className="font-heading font-black text-xl md:text-3xl text-[#222222] uppercase tracking-tight group-hover:text-[#DE4A82] transition-colors duration-200">
                      {cap.title}
                    </h3>
                  </div>
                  <div className="w-11 h-11 bg-white border-2 border-[#222222] rounded-xl flex items-center justify-center text-[#222222] shadow-[3px_3px_0px_0px_#222222] group-hover:bg-[#FFD45C] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150">
                    {isExpanded ? <FiMinus className="text-xl" /> : <FiPlus className="text-xl" />}
                  </div>
                </div>
                
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: "auto", 
                        opacity: 1, 
                        transition: { 
                          height: { duration: 0.25, ease: "easeOut" }, 
                          opacity: { duration: 0.2, delay: 0.05 } 
                        } 
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0, 
                        transition: { 
                          height: { duration: 0.2, ease: "easeIn" }, 
                          opacity: { duration: 0.15 } 
                        } 
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pl-18 md:pl-24 pr-6 pb-4 pt-4 text-left">
                        <p className="text-base md:text-lg font-medium text-[#555555] leading-relaxed max-w-2xl font-sans">
                          {cap.desc}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Core Strength Callout */}
        <div className="mt-8 bg-white border-[3px] border-[#222222] rounded-[24px] shadow-[6px_6px_0px_0px_#222222] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-xs uppercase tracking-widest font-black text-[#8A63D2] mb-1">
              Core Strengths
            </h4>
            <p className="text-xl md:text-2xl font-black text-[#222222]">
              Brand Building + Problem Solving
            </p>
          </div>
          <div className="text-xs uppercase tracking-widest font-black text-[#222222] bg-[#FFD45C] px-6 py-3 border-2 border-[#222222] rounded-xl shadow-[3px_3px_0px_0px_#222222]">
            Based in India · Building Globally
          </div>
        </div>

      </div>
    </section>
  );
}
