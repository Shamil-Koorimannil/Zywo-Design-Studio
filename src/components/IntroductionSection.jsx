import React from "react";

export default function IntroductionSection() {
  return (
    <section
      id="introduction-section"
      className="relative w-full bg-[#F4F3EF] py-24 px-6 md:px-16 flex items-center justify-center select-none"
    >
      <div className="max-w-5xl w-full flex flex-col gap-16 relative z-10 mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <div className="inline-block self-start px-4 py-1.5 bg-[#DE4A82] text-white text-xs font-black uppercase tracking-wider rounded-xl border-[3px] border-[#222222] shadow-[3.5px_3.5px_0px_0px_#222222] rotate-[-1deg]">
            01 — THE INTRODUCTION
          </div>
          <h2 className="font-heading font-black text-4xl md:text-6xl text-[#222222] uppercase tracking-tight">
            Who is Rayan Hany?
          </h2>
        </div>

        {/* Narrative Description & Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Main Biography Texts */}
          <div className="md:col-span-8 flex flex-col gap-8 text-left">
            <p className="font-sans font-medium text-xl md:text-2xl text-[#222222] leading-relaxed">
              I'm a founder and creative director based in India, building globally at the intersection of creativity, technology and business.
            </p>
            <p className="font-sans text-base md:text-lg text-[#555555] leading-relaxed">
              My journey began with design and advertising, evolved through digital marketing and creative leadership, and eventually led me into software development and product building.
            </p>
            <p className="font-sans text-base md:text-lg text-[#555555] leading-relaxed">
              Today, I'm building three ventures — <span className="text-[#222222] font-black">Zywo</span>, <span className="text-[#222222] font-black">Fluxify</span> and <span className="text-[#222222] font-black">Fluxiflow</span> — each exploring a different opportunity to create what's next.
            </p>
          </div>

          {/* Supporting Philosophy Quote Box */}
          <div className="md:col-span-4 bg-white p-8 rounded-[24px] border-[3px] border-[#222222] shadow-[6px_6px_0px_0px_#222222] relative overflow-hidden group text-left">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#222222]/5 rounded-bl-full pointer-events-none" />
            <span className="text-5xl font-heading font-black text-[#DE4A82] opacity-40 leading-none">“</span>
            <p className="font-heading font-black text-lg md:text-xl text-[#222222] leading-snug -mt-2">
              A brand is created in the consumer's mind. Every impression matters.
            </p>
            <div className="h-4" />
            <div className="w-10 h-1 bg-[#222222] rounded-none" />
          </div>
        </div>

        {/* Conceptual Journey Flow Summary */}
        <div className="border-t border-[#222222]/10 pt-10 flex flex-wrap gap-x-6 gap-y-4 text-xs font-black uppercase tracking-widest text-[#555555]/70">
          <span>Design</span>
          <span className="text-[#DE4A82]">&rarr;</span>
          <span>Digital Marketing</span>
          <span className="text-[#DE4A82]">&rarr;</span>
          <span>Marketing Leadership</span>
          <span className="text-[#DE4A82]">&rarr;</span>
          <span>UX/UI</span>
          <span className="text-[#DE4A82]">&rarr;</span>
          <span>Computer Science</span>
          <span className="text-[#DE4A82]">&rarr;</span>
          <span>3D/VFX</span>
          <span className="text-[#DE4A82]">&rarr;</span>
          <span>Software Development</span>
          <span className="text-[#DE4A82]">&rarr;</span>
          <span>Creative Direction</span>
          <span className="text-[#DE4A82]">&rarr;</span>
          <span>Entrepreneurship</span>
        </div>
      </div>
    </section>
  );
}
