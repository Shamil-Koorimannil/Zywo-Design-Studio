import React, { useState } from "react";
import { FiEye, FiSearch, FiSliders } from "react-icons/fi";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Understand the problem",
    icon: FiEye,
    description: "Never jump straight into visual execution or software architecture. I spend time mapping the core business bottlenecks, client ambitions, and project parameters to identify where the real challenge lies."
  },
  {
    step: "02",
    title: "Research the market",
    icon: FiSearch,
    description: "Deep dive into consumer behaviors, competitor design systems, and broader industry contexts. Knowing the canvas is essential before placing the first pixel or writing the first function."
  },
  {
    step: "03",
    title: "Explore possibilities",
    icon: FiSliders,
    description: "Push the boundaries of branding guidelines, creative visual styles, and system technologies. Combine curiosity and code to engineer products that stand out rather than standard boilerplate platforms."
  }
];

export default function MindsetSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="mindset-section"
      className="relative w-full bg-[#F4F3EF] py-24 px-6 md:px-16 select-none"
    >
      <div className="max-w-6xl w-full flex flex-col gap-16 relative z-10 mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <div className="inline-block self-start px-4 py-1.5 bg-[#8A63D2] text-white text-xs font-black uppercase tracking-wider rounded-xl border-[3px] border-[#222222] shadow-[3.5px_3.5px_0px_0px_#222222] rotate-[-2deg]">
            10 — PROCESS & MINDSET
          </div>
          <h2 className="font-heading font-black text-4xl md:text-6xl text-[#222222] uppercase tracking-tight">
            Understand. Research. Create.
          </h2>
          <p className="font-sans font-medium text-base md:text-lg text-[#555555] max-w-xl leading-relaxed">
            My framework for solving design and engineering challenges is simple, methodical, and driven by curiosity.
          </p>
        </div>

        {/* Process Block Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Step Selection Accordions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComponent = step.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-[20px] border-[3px] cursor-pointer transition-all duration-300 flex items-start gap-5 text-left ${
                    isActive 
                      ? "bg-white border-[#222222] shadow-[6px_6px_0px_0px_#222222]" 
                      : "bg-white/40 border-[#222222]/10 hover:bg-white/70"
                  }`}
                >
                  <span className={`font-heading font-black text-2xl ${isActive ? "text-[#DE4A82]" : "text-[#555555]"}`}>
                    {step.step}
                  </span>
                  
                  <div className="flex flex-col gap-2">
                    <h3 className="font-heading font-black text-xl md:text-2xl text-[#222222] uppercase tracking-tight">
                      {step.title}
                    </h3>
                    {isActive && (
                      <p className="font-sans text-sm md:text-base text-[#555555] leading-relaxed mt-2">
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Block: Process Highlight Statement (5 cols) */}
          <div className="lg:col-span-5 bg-white p-8 md:p-10 rounded-[24px] border-[3px] border-[#222222] shadow-[6px_6px_0px_0px_#222222] relative overflow-hidden flex flex-col justify-center min-h-[300px] text-left">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#222222]/5 rounded-bl-full pointer-events-none" />
            <span className="text-4xl font-heading font-black text-[#319C97] opacity-40 leading-none">“</span>
            <p className="font-heading font-black text-lg md:text-2xl text-[#222222] leading-snug -mt-2">
              I don't like stopping at the surface. If something makes me curious, I keep digging until I understand the root.
            </p>
            <div className="h-6" />
            <div className="w-12 h-1 bg-[#222222] rounded-none" />
          </div>

        </div>

      </div>
    </section>
  );
}
