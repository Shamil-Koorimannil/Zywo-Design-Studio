import React from "react";

const BRANDS = ["Indomie", "ZPC Milanówek", "Karikku India", "Edhwi India"];

const RESPONSIBILITIES = [
  "Digital strategy",
  "Brand marketing",
  "Content production",
  "Performance marketing",
  "Campaign management",
  "Analytics & reporting",
  "Client relationship",
  "Team leadership",
  "Business development"
];

export default function TharaSection() {
  return (
    <section
      id="thara-section"
      className="relative w-full bg-[#F4F3EF] py-24 px-6 md:px-16 select-none"
    >
      <div className="max-w-6xl w-full flex flex-col gap-16 relative z-10 mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <div className="inline-block self-start px-4 py-1.5 bg-[#FFD45C] text-[#222222] text-xs font-black uppercase tracking-wider rounded-xl border-[3px] border-[#222222] shadow-[3.5px_3.5px_0px_0px_#222222] rotate-[1deg]">
            04 — CHAPTER ONE
          </div>
          <h2 className="font-heading font-black text-4xl md:text-6xl text-[#222222] uppercase tracking-tight">
            Learning to think beyond design
          </h2>
          <p className="text-xl md:text-2xl font-black text-[#555555] uppercase tracking-tight">
            Thara Group &bull; Executive &rarr; Leadership
          </p>
        </div>

        {/* Narrative & Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: The Story (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <p className="font-sans font-medium text-lg md:text-xl text-[#555555] leading-relaxed text-left">
              At Thara Group, my role rapidly shifted from clean execution into high-level organizational leadership. Transitioning from visual layouts to strategic roadmaps gave me a vital realization:
            </p>
            
            <div className="bg-[#F4F3EF] border-l-4 border-[#DE4A82] p-6 rounded-none text-left">
              <p className="font-heading font-black text-xl md:text-2xl text-[#222222] leading-snug">
                “This was where I learned that creativity alone isn't enough. It needs strategy, execution and measurable business thinking.”
              </p>
            </div>

            {/* Brand grid section */}
            <div className="flex flex-col gap-4 mt-4 text-left">
              <h4 className="text-xs uppercase tracking-widest font-black text-[#555555]">
                Selected Client Work
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {BRANDS.map((brand, i) => (
                  <div 
                    key={i} 
                    className="p-4 bg-white rounded-xl border-2 border-[#222222] shadow-[3px_3px_0px_0px_#222222] text-center font-heading font-black text-[#222222] uppercase text-sm tracking-wider"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Block: Responsibilities Dashboard (5 columns) */}
          <div className="lg:col-span-5 bg-white p-8 md:p-10 rounded-[24px] border-[3px] border-[#222222] shadow-[6px_6px_0px_0px_#222222] relative text-left">
            <h3 className="font-heading font-black text-2xl text-[#222222] uppercase tracking-tight mb-6 pb-4 border-b border-[#222222]/10">
              Operational Focus
            </h3>
            <ul className="grid grid-cols-1 gap-4">
              {RESPONSIBILITIES.map((resp, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#319C97] shrink-0" />
                  <span className="font-sans font-medium text-md text-[#222222]">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
