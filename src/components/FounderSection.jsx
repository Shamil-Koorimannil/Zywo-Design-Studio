import React from "react";
import founderStudio from "../assets/rayan/founder-studio.png";

const INTERESTS = [
  "Photography",
  "Filmmaking",
  "Technology",
  "Cars",
  "Architecture",
  "Travel",
  "Events"
];

export default function FounderSection() {
  return (
    <section
      id="founder-section"
      className="relative w-full bg-[#F4F3EF] py-24 px-6 md:px-16 select-none"
    >
      <div className="max-w-6xl w-full flex flex-col gap-16 relative z-10 mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <div className="inline-block self-start px-4 py-1.5 bg-[#8A63D2] text-white text-xs font-black uppercase tracking-wider rounded-xl border-[3px] border-[#222222] shadow-[3.5px_3.5px_0px_0px_#222222] rotate-[-1deg]">
            12 — FOUNDER BEHIND THE SCENES
          </div>
          <h2 className="font-heading font-black text-4xl md:text-6xl text-[#222222] uppercase tracking-tight">
            The person behind the companies
          </h2>
          <p className="text-xl md:text-2xl font-black text-[#555555] uppercase tracking-tight text-left">
            Obsession with understanding how things work.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Image & Leadership Quote (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8 items-center lg:items-start order-2 lg:order-1">
            <div className="w-full max-w-[400px] aspect-[4/3] rounded-[24px] border-[3px] border-[#222222] shadow-[8px_8px_0px_0px_#222222] overflow-hidden rotate-[-1deg] hover:rotate-0 hover:-translate-y-1 transition-all duration-300 relative group bg-white">
              <img
                src={founderStudio}
                alt="Founder Studio setup"
                className="w-full h-full object-cover scale-102 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#222222]/5 pointer-events-none" />
            </div>

            {/* Leadership Box */}
            <div className="w-full max-w-[400px] bg-white p-6 rounded-[20px] border-[3px] border-[#222222] shadow-[4px_4px_0px_0px_#222222] text-left">
              <span className="text-[10px] uppercase font-black tracking-widest text-[#DE4A82] block mb-2">Leadership Philosophy</span>
              <p className="font-heading font-black text-lg text-[#222222] leading-snug">
                “Vision gives people direction. People give the vision life.”
              </p>
            </div>
          </div>

          {/* Right Block: The Persona & Interests (7 cols) - order 1 on lg */}
          <div className="lg:col-span-7 flex flex-col gap-8 order-1 lg:order-2">
            <div className="flex flex-col gap-6 font-sans text-lg text-[#555555] leading-relaxed text-left">
              <p>
                My trajectory is driven by a simple motivation: <span className="font-black text-[#222222]">curiosity</span>. I am obsessed with opening the black box, breaking down systems to their atomic parts, and understanding how strategy, design, and code integrate together.
              </p>
              <p>
                Whether managing campaigns for global clients, architecting system frameworks, or founding companies, I approach every challenge with the same builder's mindset.
              </p>
              <p className="text-base text-left">
                <span className="font-black text-[#222222] uppercase text-sm block mb-1">Leadership Style</span>
                My leadership approach is vision-driven and people-first, steering projects toward aggressive goals while empowering creators and engineers to execute at their best.
              </p>
            </div>

            {/* Personal Interests Area (10% personal) */}
            <div className="flex flex-col gap-4 border-t border-[#222222]/10 pt-6 text-left">
              <h4 className="text-xs uppercase tracking-widest font-black text-[#8A63D2]">
                Beyond the Ventures
              </h4>
              <div className="flex flex-wrap gap-3">
                {INTERESTS.map((interest, i) => {
                  const colors = ["bg-[#8FA4D8]/20", "bg-[#FFD45C]/20", "bg-[#319C97]/20", "bg-[#DE4A82]/20"];
                  return (
                    <span 
                      key={i} 
                      className={`px-4 py-2 rounded-xl border-2 border-[#222222] text-xs font-black uppercase text-[#222222] tracking-wider shadow-[2px_2px_0px_0px_#222222] ${colors[i % colors.length]}`}
                    >
                      {interest}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
