import React from "react";
import { testimonialsData } from "../data/testimonials";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials-section"
      className="relative w-full bg-white py-24 px-6 md:px-16 select-none"
    >
      <div className="max-w-5xl w-full flex flex-col gap-16 relative z-10 mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <div className="inline-block self-start px-4 py-1.5 bg-[#8A63D2] text-white text-xs font-black uppercase tracking-wider rounded-xl border-[3px] border-[#222222] shadow-[3.5px_3.5px_0px_0px_#222222] rotate-[2deg]">
            13 — SOCIAL PROOF
          </div>
          <h2 className="font-heading font-black text-4xl md:text-6xl text-[#222222] uppercase tracking-tight">
            Exceptional Testimonials
          </h2>
        </div>

        {/* Quotes list */}
        <div className="flex flex-col gap-10">
          {testimonialsData.map((t) => (
            <div 
              key={t.id} 
              className="bg-[#F4F3EF] rounded-[24px] border-[3px] border-[#222222] shadow-[6px_6px_0px_0px_#222222] hover:shadow-[9px_9px_0px_0px_#222222] hover:-translate-y-1 transition-all duration-300 p-8 md:p-10 flex flex-col gap-6 text-left group"
            >
              {/* Giant quote symbol */}
              <span className="text-6xl md:text-8xl font-heading font-black text-[#DE4A82] opacity-25 leading-none h-6 select-none group-hover:opacity-40 transition-opacity duration-300">
                “
              </span>
              
              {/* Quote Body */}
              <p className="font-heading font-black text-xl md:text-3xl text-[#222222] leading-snug -mt-4 pl-4 md:pl-8 border-l-[6px] border-[#222222]/40">
                {t.quote}
              </p>

              {/* Author Credits */}
              <div className="pl-4 md:pl-8 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-2">
                <span className="font-heading font-black text-lg text-[#222222] uppercase tracking-wide">
                  {t.author}
                </span>
                <span className="hidden md:inline text-[#222222]/40">&bull;</span>
                <span className="font-sans font-medium text-[#555555] text-sm md:text-base">
                  {t.role} at <span className="font-black text-[#319C97]">{t.company}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
